<script>
  import { onMount } from 'svelte';

  const cards = [
    { img: "gal1.jpg", likes: 656, views: "70.2k" },
    { img: "gal2.jpg", likes: 342, views: "78.4k" },
    { img: "gal3.jpg", likes: 318, views: "18.7k" },
    { img: "gal4.jpg", likes: 236, views: "5.1k" },
    { img: "gal5.jpg", likes: 656, views: "70.2k" },
    { img: "gal6.jpg", likes: 342, views: "78.4k" },
    { img: "gal7.jpg", likes: 318, views: "18.7k" },
    { img: "gal8.jpg", likes: 236, views: "5.1k" },
  ];

  let showContent = false;

  onMount(() => {
    showContent = true;
  });
</script>

<section class="bg-black text-white py-16 px-6 md:px-12 lg:px-20">
  <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
    {#each cards as card, index}
      <div
        class={`relative rounded-2xl transition-all duration-700 ease-in-out transform ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style="transition-delay: {index * 100}ms;">
        
        <!-- Outer border -->
        <div class="border-2 border-black rounded-2xl overflow-hidden">
          
          <!-- Image inside the card -->
          <!-- svelte-ignore a11y_img_redundant_alt -->
          <img src={card.img} alt="Fitness Image" class="w-full h-64 object-cover">
          
          <!-- Footer Section -->
          <div class="flex justify-between items-center p-4 border-t border-black text-white text-sm">
            <div class="flex items-center space-x-2">
              <img src="gal1.jpg" alt="Profile" class="w-6 h-6 rounded-full">
              <span>Erik Padamans</span>
            </div>
            <div class="flex space-x-4">
              <span class="flex items-center">❤️ {card.likes}</span>
              <span class="flex items-center">👁 {card.views}</span>
            </div>
          </div>

        </div>
      </div>
    {/each}
  </div>
</section>

<style>
  /* Optional: You can add any custom styles here */
</style>
