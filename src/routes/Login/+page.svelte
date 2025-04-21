<script>
// @ts-nocheck

    import { auth, db } from "$lib/firebase";
    import { ref, set } from "firebase/database";
    import {
      createUserWithEmailAndPassword,
      signInWithEmailAndPassword,
      signInWithPopup,
      signOut,
      onAuthStateChanged,
      GoogleAuthProvider
    } from "firebase/auth";
    import { onMount } from "svelte";
    import { goto } from "$app/navigation";
  
    let email = "";
    let password = "";
    let username = "";
    let isLogin = true;
    let message = "";
    // @ts-ignore
    let user = null; 
  
    // Check login state on mount
    onMount(() => {
      onAuthStateChanged(auth, (currentUser) => {
        user = currentUser;
      });
    });
  
    async function signup() {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const newUser = userCredential.user;
        // @ts-ignore
        await set(ref(db, "users/" + newUser.uid), { username, email });
        message = "Signup successful!";
        goto("/");
      } catch (error) {
        // @ts-ignore
        message = error.message;
      }
    }
  
    async function login() {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        message = "Login successful!";
        goto("/");
      } catch (error) {
        // @ts-ignore
        message = error.message;
      }
    }
  
    async function loginWithGoogle() {
      try {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const gUser = result.user;
        // @ts-ignore
        await set(ref(db, "users/" + gUser.uid), {
          username: gUser.displayName,
          email: gUser.email
        });
        message = "Google login successful!";
        goto("/");
      } catch (error) {
        // @ts-ignore
        message = error.message;
      }
    }
  
    async function logout() {
      await signOut(auth);
      user = null;
      message = "Logged out!";
      goto("/");
    }
  </script>
  
  <!-- UI with Tailwind CSS -->
  <div class="min-h-screen bg-black flex items-center justify-center px-4">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-2xl">
      
      {#if user}
        <div class="flex flex-col items-center gap-4">
          <!-- Profile Icon -->
          <div class="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24"
              stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M5.121 17.804A11.954 11.954 0 0112 15c2.21 0 4.27.637 5.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
  
          <!-- User Info -->
          <h2 class="text-xl font-semibold text-center text-gray-700">
            Welcome, {user.displayName || user.email}!
          </h2>
  
          <!-- Logout -->
          <button
            class="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600"
            on:click={logout}
          >
            Logout
          </button>
        </div>
  
      {:else}
        <h2 class="text-2xl font-bold text-center text-gray-800 mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
  
        {#if !isLogin}
          <input type="text" bind:value={username} placeholder="Username"
            class="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
        {/if}
  
        <input type="email" bind:value={email} placeholder="Email"
          class="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
  
        <input type="password" bind:value={password} placeholder="Password"
          class="w-full mb-4 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" />
  
        <button class="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 mb-3"
          on:click={isLogin ? login : signup}>
          {isLogin ? "Login" : "Sign Up"}
        </button>
  
        <button class="w-full bg-red-500 text-white font-semibold py-2 rounded-md hover:bg-red-600"
          on:click={loginWithGoogle}>
          Login with Google
        </button>
  
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <p class="text-sm text-gray-600 text-center mt-4 cursor-pointer hover:underline"
          on:click={() => (isLogin = !isLogin)}>
          {isLogin ? "Don't have an account? Sign up" : "Already have an account? Login"}
        </p>
      {/if}
  
      {#if message}
        <p class="mt-4 text-center text-sm text-red-500">{message}</p>
      {/if}
    </div>
  </div>
  