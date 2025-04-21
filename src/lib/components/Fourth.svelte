<script>
    import { onMount } from "svelte";
    import { fade } from "svelte/transition";

    let isVisible = false;

    onMount(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        isVisible = true;
                    }
                });
            },
            { threshold: 0.3 }
        );

        // @ts-ignore
        observer.observe(document.querySelector("#why-choose-us"));
    });
</script>

<section id="why-choose-us" class="bg-black text-white py-16 px-6 md:px-12">
    <div class="container mx-auto flex flex-col lg:flex-row items-center gap-8">
        
        <!-- Left Side (Image) -->
        <div class="md:w-1/2 flex justify-center relative mt-10 md:mt-0">
            <video class="w-full h-full object-cover" autoplay muted loop playsinline>
                <source src="/About.mp4" type="video/mp4" />
            </video>               
          </div>

        <!-- Right Side (Text Content) -->
        <div class="w-full lg:w-1/2" transition:fade={{ duration: 800 }}>
            <h2 class="text-4xl font-bold mb-6">
                Why Choose <span class="text-green-400">Us?</span>
            </h2>
            <p class="text-gray-300 mb-4">
                Our diverse membership base creates a friendly and supportive atmosphere, 
                where you can make friends and stay motivated.
            </p>
            <p class="text-gray-300 mb-4">
                Unlock your potential with our expert Personal Trainers.
            </p>
            <p class="text-gray-300 mb-4">
                Elevate your fitness with practice sessions.
            </p>
            <p class="text-gray-300 mb-6">
                We provide supportive management for your fitness success.
            </p>
            <br>
            <!-- Call to Action Button -->
            <a href="/signup" 
               class="bg-green-400 text-black font-semibold px-6 py-3 rounded-md hover:bg-green-500 transition-all">
                Book A Free Class
            </a>
        </div>

    </div>
</section>
