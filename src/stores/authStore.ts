import { writable } from 'svelte/store';
import { supabaseClient } from "../supabaseClient";

export const activeUser = writable(supabaseClient.auth.getSessionFromUrl);
