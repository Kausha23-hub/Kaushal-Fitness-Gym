<script>
    import { onMount } from "svelte";

    // Define workout plans with 6 images
    let workoutPlans = [
        { title: "Physical Fitness", img: "/pose.jpg" },
        { title: "Weight Gain", img: "/fitness5.jpg" },
        { title: "Strength Training", img: "/fitness3.jpg" },
        { title: "Fat Loss", img: "/fat.jpg" },
        { title: "Running", img: "/running.jpg" },
        { title: "Weightlifting", img: "/wet.jpg" }
    ];

    let imagesLoaded = false;

    // Preload images to prevent broken images
    onMount(() => {
        const imagePromises = workoutPlans.map((plan) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = plan.img;
                img.onload = resolve;
                img.onerror = resolve;
            });
        });

        Promise.all(imagePromises).then(() => {
            imagesLoaded = true;
        });
    });
</script>

<section class="bg-black py-16">
    <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center text-white mb-12">
            Our Workout <span class="text-green-400">Plans</span>
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each workoutPlans as plan}
                <div class="relative bg-gray-900 rounded-lg overflow-hidden shadow-lg p-4 border border-gray-800 hover:border-green-400 transition-all duration-300">
                    <div class="absolute inset-0 bg-blue-500 blur-lg opacity-50 rounded-lg"></div> 
                    
                    {#if imagesLoaded}
                        <img src={plan.img} alt={plan.title} class="w-full h-64 object-cover rounded-md relative z-10">
                    {:else}
                        <div class="w-full h-64 flex items-center justify-center bg-gray-700 rounded-md relative z-10">
                            <span class="text-white">Loading...</span>
                        </div>
                    {/if}

                    <h3 class="text-white text-xl font-semibold text-center mt-4 relative z-10">
                        {plan.title}
                    </h3>
                </div>
            {/each}
        </div>
    </div>
</section>
