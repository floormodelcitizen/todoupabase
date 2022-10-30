<script lang="ts">
	import { onMount } from 'svelte';
	import TodoForm from '../components/TodoForm.svelte';
	import { loadTodos, todos } from '../stores/todoStore.js';
	import Todo from '../components/Todo.svelte';

	onMount(() => {
		loadTodos();
	});
</script>

<main>
	<h1
		class="text-2xl font-bold text-center text-gray-800 md:text-3xl"
	>
		Voila!
	</h1>
	<h3 class="text-1xl text-center text-gray-600">
		From to-do ✨ to ta-da!
	</h3>
	<TodoForm />
	{#each $todos as todo}
		<Todo {todo} index={todo.id} />
	{/each}
</main>
