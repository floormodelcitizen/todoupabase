// @ts-nocheck
import { supabase } from '../supabase';
import { writable } from 'svelte/store';

export const /** @type any */ todos = writable([]);

export const name = writable('Svelte');

export const loadTodos = async () => {
	const { data, error } = await supabase.from('todos').select();

	if (error) return console.error(error);

	todos.set(data);
};

export const addTodo = async (text) => {
	const { data, error } = await supabase
		.from('todos')
		.insert([{ text, completed: false }]);

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
		.update({ completed: !currentState })
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
			todos[index].completed = !todos[index].completed;
		}
		return todos;
	});
};
