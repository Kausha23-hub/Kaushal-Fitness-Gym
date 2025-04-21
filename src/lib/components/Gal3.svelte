<script>
    const cards = [
      { img: "a1.jpg", likes: 656, views: "70.2k" },
      { img: "a2.jpg", likes: 342, views: "78.4k" },
      { img: "a3.jpg", likes: 318, views: "187k" },
      { img: "a4.jpg", likes: 236, views: "511k" },
      { img: "a5.jpg", likes: 656, views: "702k" },
      { img: "a4.jpg", likes: 342, views: "784k" },
      { img: "a6.jpg", likes: 318, views: "187k" },
      { img: "z5.jpg", likes: 236, views: "585k" },
    ];
  </script>
  
  <section class="bg-black text-white py-16 px-6 md:px-12 lg:px-20">
    <h2 class="text-6xl font-bold text-center mb-8 ">Fitness <span class=" text-green-500">Pro</span></h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      {#each cards as card}
        <div class="relative rounded-2xl transition-all hover:shadow-[0_0_20px_5px_#22c55e]">  
          <!-- Outer border -->
          <div class="border-2 border-black rounded-2xl overflow-hidden">
            
            <!-- Image inside the card -->
            <!-- svelte-ignore a11y_img_redundant_alt -->
            <img src={card.img} alt="Fitness Image" class="w-full h-64 object-cover">
            
            <!-- Footer Section -->
            <div class="flex justify-between items-center p-4 border-t border-black text-white text-sm">
              <div class="flex items-center space-x-2">
                <img src="gal1.jpg" alt="Profile" class="w-6 h-6 rounded-full">
                <span>Fitness Pro</span>
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
  