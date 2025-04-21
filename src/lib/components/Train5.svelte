<script>
    import { fade } from "svelte/transition";
</script>

<section class="bg-black text-white py-16 px-6 md:px-12">
    <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-8">
            Trainer <span class="text-green-400">Plan Prices</span>
        </h2>

        <!-- Pricing Cards -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             
            <!-- Basic Plan -->
            <div class="bg-black border border-green-400 rounded-xl p-8 shadow-lg transition-all duration-300 
                hover:shadow-[0px_0px_2px_4px_white]"
                transition:fade={{ duration: 600 }}>
                <h3 class="text-2xl font-bold mb-3">BASIC</h3>
                <p class="text-green-400 text-3xl font-bold mb-4">$100/Month</p>
                <ul class="text-gray-300 space-y-2 mb-6">
                    <li>• Smart workout plan</li>
                    <li>• At home workouts</li>
                </ul>
                <a href="/join" class="text-green-400 font-semibold flex items-center justify-center gap-1 hover:underline">
                    Join Now →
                </a>
            </div> 

            <!-- Pro Plan -->
            <div class="bg-black border border-green-400 rounded-xl p-8 shadow-lg transition-all duration-300 
                hover:shadow-[0px_0px_2px_4px_white]"
                transition:fade={{ duration: 600, delay: 200 }}>
                <h3 class="text-2xl font-bold mb-3">PRO</h3>
                <p class="text-green-400 text-3xl font-bold mb-4">$150/Month</p>
                <ul class="text-gray-300 space-y-2 mb-6">
                    <li>• Pro GYMS</li>
                    <li>• Smart workout plan</li>
                    <li>• At home workouts</li>
                </ul>
                <a href="/join" class="text-green-400 font-semibold flex items-center justify-center gap-1 hover:underline">
                    Join Now →
                </a>
            </div>

            <!-- Premium Plan -->
            <div class="bg-black border border-green-400 rounded-xl p-8 shadow-lg transition-all duration-300 
                hover:shadow-[0px_0px_2px_4px_white]"
                transition:fade={{ duration: 600, delay: 400 }}>
                <h3 class="text-2xl font-bold mb-3">PREMIUM</h3>
                <p class="text-green-400 text-3xl font-bold mb-4">$300/Month</p>
                <ul class="text-gray-300 space-y-2 mb-6">
                    <li>• ELITE Gyms & Classes</li>
                    <li>• Pro GYMS</li>
                    <li>• Smart workout plan</li>
                </ul>
                <a href="/join" class="text-green-400 font-semibold flex items-center justify-center gap-1 hover:underline">
                    Join Now →
                </a>
            </div>

        </div>
    </div>
</section>
