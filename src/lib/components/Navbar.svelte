<script>
	import { goto } from '$app/navigation';

	let isOpen = false;
	let showChatbox = false;
	let question = '';
	let response = '';
	let loading = false;

	async function handleSend() {
		if (!question.trim()) return;

		loading = true;
		response = '';

		try {
			const res = await fetch('/api/chat', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ message: question })
			});

			const data = await res.json();
			response = data.reply || 'No response from AI.';
		} catch (err) {
			console.error(err);
			response = 'Something went wrong. Please try again.';
		}

		loading = false;

	}
</script>

<!-- NAVBAR -->
<nav class="bg-black text-white p-4 fixed top-0 left-0 w-full z-50 shadow-lg">
	<div class="container mx-auto flex justify-between items-center">
		<a href="/" class="text-2xl font-bold">
			<span class="text-white">Royal</span><span class="text-green-400">Fitness</span>
		</a>

		<ul class="hidden md:flex space-x-6">
			<li><a href="/" class="hover:text-green-400">Home</a></li>
			<li><a href="/Gallery" class="hover:text-green-400">Gallery</a></li>
			<li><a href="/Workout" class="hover:text-green-400">Workouts</a></li>
			<li><a href="/Trainer" class="hover:text-green-400">Trainer</a></li>
			<li><a href="/Diet" class="hover:text-green-400">Diet</a></li>
			<li><a href="/Contact" class="hover:text-green-400">Contact us</a></li>
		</ul>

		<div class="flex items-center space-x-4">
			<!-- AI Button -->
			<button
				on:click={() => (showChatbox = !showChatbox)}
				class="hidden md:flex items-center space-x-2 bg-blue-400 text-black px-3 py-1 rounded-lg hover:bg-white hover:text-blue-500 transition"
			>
				<!-- Robot SVG -->
				<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
						d="M12 14l9-5-9-5-9 5 9 5zm0 0v5m0-5l-9 5m9-5l9 5" />
				</svg>
				<span class="font-semibold">AI</span>
			</button>

			<button
				on:click={() => (window.location.href = '/Login')}
				class="hidden md:block border border-green-400 text-green-400 px-4 py-2 rounded-lg hover:bg-green-400 hover:text-black transition duration-300"
			>
				Log-in & Sign-up
			</button>

			<!-- svelte-ignore a11y_consider_explicit_label -->
			<button class="md:hidden" on:click={() => (isOpen = !isOpen)}>
				<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
				</svg>
			</button>
		</div>
	</div>

	{#if isOpen}
		<ul class="md:hidden bg-black text-white p-4 space-y-4">
			<li><a href="/" class="block hover:text-green-400">Home</a></li>
			<li><a href="/Gallery" class="block hover:text-green-400">Gallery</a></li>
			<li><a href="/Workout" class="block hover:text-green-400">Workouts</a></li>
			<li><a href="/Trainer" class="block hover:text-green-400">Trainer</a></li>
			<li><a href="/Diet" class="block hover:text-green-400">Diet</a></li>
			<li><a href="/Contact" class="block hover:text-green-400">Contact us</a></li>
			<li>
				<a href="/Login" class="block border border-green-400 text-green-400 px-4 py-2 rounded-lg text-center hover:bg-green-400 hover:text-black transition">Join Now</a>
			</li>
		</ul>
	{/if}
</nav>

<!-- AI CHATBOX -->
{#if showChatbox}
	<div class="fixed bottom-4 right-4 w-80 bg-white border border-green-400 rounded-xl shadow-xl z-50">
		<div class="flex justify-between items-center px-4 py-2 bg-green-400 text-black rounded-t-xl">
			<span class="font-semibold">AI ChatBox</span>
			<button on:click={() => (showChatbox = false)} class="text-xl font-bold">&times;</button>
		</div>
		<div class="p-4 space-y-3">
			<input
				type="text"
				bind:value={question}
				placeholder="Ask me a question..."
				class="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
			/>
			<button
				on:click={handleSend}
				class="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 w-full disabled:opacity-50"
				disabled={loading}
			>
				{loading ? "Thinking..." : "Send"}
			</button>

			{#if response}
				<div class="mt-2 bg-gray-100 p-2 rounded text-sm whitespace-pre-line">
					{response}
				</div>
			{/if}
		</div>
	</div>
{/if}
