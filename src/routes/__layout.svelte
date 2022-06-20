<script>
	import Auth from './../components/Auth.svelte';
	import { supabase } from '../supabase.js';
	import '../app.css';
	console.log(supabase);
</script>

<div class="container mx-auto my-6 max-w-lg">
	<Auth />
	<slot />
</div>
