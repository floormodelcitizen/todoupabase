// @ts-nocheck
import { supabase } from '../supabaseClient';
import { writable } from 'svelte/store';


export const todos = writable([]);

export const loadTodos = async () => {
	const { data, error } = await supabase.from('todos').select();

	if (error) return console.error(error);

	todos.set(data);
};

export const addTodo = async (task, user_id) => {
	const { data, error } = await supabase
		.from('todos')
		.insert([{ task, is_complete: false, user_id }]);

	if (error) return console.error(error);

	todos.update((cur) => [...cur, data[0]]);
};

export const deleteTodo = async (id) => {
	const { error } = await supabase
		.from('todos')
		.delete()
		.match({ id });

	if (error) return console.error(error);

	todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

export const toggleTodoCompleted = async (id, currentState) => {
	const { error } = await supabase
		.from('todos')
		.update({ is_complete: !currentState })
		.match({ id });

	if (error) return console.error(error);

	todos.update((todos) => {
		let index = -1;
		for (let i = 0; i < todos.length; i += 1) {
			if (todos[i].id === id) {
				index = i;
				break;
			}
		}
		if (index !== -1) {
			todos[index].is_complete = !todos[index].is_complete;
		}
		return todos;
	});
};
