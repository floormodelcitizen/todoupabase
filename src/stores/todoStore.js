// @ts-nocheck
import { writable } from 'svelte/store';

export const /** @type any */ todos = writable([]);

export const addTodo = (/** @type string */ text) => {
	todos.update((/** @type {any} */ cur) => {
		const newTodos = [
			...cur,
			{ text, completed: false, id: Date.now() }
		];
		return newTodos;
	});
};

export const deleteTodo = (/** @type {any} */ id) => {
	todos.update((todos) => todos.filter((todo) => todo.id !== id));
};

export const toggleTodoCompleted = (id) => {
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
