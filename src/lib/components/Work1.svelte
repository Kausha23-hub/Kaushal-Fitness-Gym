<script>
  import { onMount } from 'svelte';

  const cards = [
    { img: "w1.jpg" },
    { img: "w2.jpg" },
    { img: "w3.jpg" },
    { img: "w4.jpg" },
    { img: "w5.jpg" },
    { img: "w6.jpg" },
    { img: "w7.jpg" },
    { img: "w8.jpg" },
  ];

  let showContent = false;

  onMount(() => {
    showContent = true;
  });
</script>

<section class="bg-black text-white py-16 px-6 md:px-12 lg:px-20">
    <h2 class="text-4xl font-bold text-center mb-8 m-9">Easy <span class="text-green-500">Workouts</span></h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      {#each cards as card, index}
        <div
          class={`relative rounded-2xl transition-all duration-700 ease-in-out transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style="transition-delay: {index * 100}ms;">
          
          <!-- Outer border -->
          <div class="border-2 border-black rounded-2xl overflow-hidden flex items-center justify-center p-4 bg-white">
            
            <!-- Image inside the card -->
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src={card.img} alt="Fitness Image" class="w-40 h-40 object-contain">
            
          </div>
        </div>
      {/each}
    </div>
</section>

<style>
  /* Optional: You can add any custom styles here */
</style>
