<script>
	import { name } from './../stores/todoStore.js';
	import Error from './../../.svelte-kit/runtime/components/error.svelte';
	import { supabase } from './../supabase.js';

	let loading = false;
	let email;

	const handleLogin = async () => {
		try {
			loading = true;
			console.log(email);
			const { error } = await supabase.auth.signIn({ email });

			//> Variance
			if (error)
				throw new Error('Check your email for the login link.');
		} catch (error) {
			console.log('err :>>', err);
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	};
</script>

<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">
	Log In
</h1>
<p class="text-center mt-2">
	Sign in via magic link with your email below.
</p>

<form on:submit|preventDefault={handleLogin}>
	<div class="flex flex-col text-sm mb-2">
		<label for="email" class="font-bold mb-2 text-gray-800">
			Email
		</label>
		<input
			bind:value={email}
			type="email"
			name="email"
			placeholder="Your email"
			class="app appearance-none shadow-sm border border-gray-200 p-2
			focus:outline-none focus:border-gray-500 rounded-lg " />
	</div>
	<button
		type="submit"
		class=" w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600
		text-white py-2 px-4">
		Log In
	</button>
</form>
