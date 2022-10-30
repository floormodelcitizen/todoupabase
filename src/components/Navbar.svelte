<script>
	import { supabaseClient } from '../supabaseClient.js';

	const logout = () => {
		console.log('log out');
		supabaseClient.auth.signOut();
	};
</script>

<div class="my-4 flex justify-end">
	<button
		on:click={logout}
		class=" shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white
		py-2 px-4"
	>
		Log Out
	</button>
</div>
