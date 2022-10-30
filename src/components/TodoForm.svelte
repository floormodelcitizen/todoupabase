<script>
	import { activeUser } from '../stores/authStore';
	import { addTodo } from '../stores/todoStore';

	let todo = '';
	const handleSubmit = () => {
		addTodo(todo, $activeUser.id);
		todo = '';
		console.log('submitting');
	};
</script>

<form action="" class="my-6" on:submit|preventDefault={handleSubmit}>
	<div class="flex flex-col text-sm mb2">
		<label class="font-bold mb-2 text-gray-800" for="todo" />
		<input
			bind:value={todo}
			type="text"
			name="todo"
			placeholder="What are we gonna get done?"
			class=" appearance-none shadow-sm border border-gray-200 p-2
			focus:outline-none focus:border-gray-500 rounded-lg "
		/>
		<input />
	</div>
	<button
		type="submit"
		class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600
		text-white py-2 px-4"
	>
		Submit
	</button>
</form>
