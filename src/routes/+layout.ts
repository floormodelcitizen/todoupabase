import type { LayoutLoad } from './$types';
import { getSupabase } from '@supabase/auth-helpers-sveltekit';
import { loadTodos } from '../stores/todoStore';
import { onMount } from 'svelte';

onMount(() => {
    loadTodos()
    });

export const load: LayoutLoad = async (event) => {
  const { session } = await getSupabase(event);
    return { session };
    
};