// @ts-nocheck
import { writable } from 'svelte/store';

export const /** @type any */ todos = writable([]);

export const addTodo = (/** @type string */ text) => {
	todos.update((/** @type {any} */ cur) => {
		const newTodos = [...cur, { text, completed: false, id: Date.now() }];
		return newTodos;
	});
};

export const deleteTodo = (/** @type {any} */ id) => {
	todos.update((/** @type {any[]} */ todos) =>
		todos.filter((todo) => todo.id !== id)
	);
};

export const toggleTodoCompleted = (id) => {
	todos.update((/** @type {any[]} */ todos) => {
		let index = -1;
		todos.forEach((i) => {
			if (i.id === id) {
				index = 1;
			}
			if (index !== -1) {
				todos[index].completed = !todos[index].completed;
			}
			return todos;
		});
	});
};
