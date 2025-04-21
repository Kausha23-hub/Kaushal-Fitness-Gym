<script>
    import { fade } from "svelte/transition";
</script>

<section class="bg-black text-white py-16 px-6 md:px-12">
    <div class="container mx-auto text-center">
        <h2 class="text-4xl font-bold mb-10">Client <span class="text-green-400">Reviews</span></h2>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each [
                { name: "Karan Jain", image: "pic1.jpg" },
                { name: "Sourabh Rathore", image: "pic2.jpg" },
                { name: "Varun Sharma", image: "pic3.jpg" }
            ] as client}
                <div class="bg-black-900 border border-white-700 rounded-xl p-8 shadow-lg text-center 
                    transition-transform duration-300 hover:scale-105"
                    transition:fade={{ duration: 600 }}>
                    
                    <!-- Profile Image -->
                    <div class="w-24 h-24 mx-auto overflow-hidden rounded-full border-2 border-green-400">
                        <img src={client.image} alt={client.name} class="w-full h-full object-cover">
                    </div>

                    <h3 class="text-2xl font-bold mt-4">{client.name}</h3>

                    <!-- Star Rating -->
                    <div class="flex justify-center my-2">
                        <span class="text-yellow-400 text-xl">⭐ ⭐ ⭐ ⭐ ⭐</span>
                    </div>

                    <p class="text-gray-300 mt-3">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius reiciendis officia recusandae.
                    </p>
                </div>
            {/each}
        </div>
    </div>
</section>
