<script>
	import {
		deleteTodo,
		toggleTodoCompleted
	} from './../stores/todoStore.js';
	import Icon from '@iconify/svelte';
	export const completedTodo = () => {
		toggleTodoCompleted(todo.id);
	};
	export let todo;
</script>

<li
	class="todo-item bg-white flex items-center shadow-sm border
	border-gray-200 rounded-lg my-2 py-2 px-2 "
>
	<input
		type="checkbox"
		name="complete"
		checked={todo.is_complete}
		on:change={() => completedTodo()}
		class="magic mr-2 form-select h-5 w-5"
	/>
	<span
		class={` flex-1 text-gray-800 ${
			todo.is_complete ? 'line-through' : ''
		} `}
	>
		{todo.task}
	</span>

	<button
		type="submit"
		class="text-lg bg-gray-400 hover:bg-red-500 text-white py-1 px-2
		rounded focus:outline-none focus:shadow ease-in duration-300"
		on:click={() => deleteTodo(todo.id)}
	>
		<Icon icon="iwwa:trash" inline={true} />
	</button>
</li>
