<script>
    const cards = [
      { img: "w11.jpg"},
      { img: "w12.jpg"},
      { img: "w13.jpg"},
      { img: "w14.jpg"},
      { img: "w15.jpg"},
      { img: "w16.jpg"},
      { img: "w17.jpg"},
      { img: "w18.jpg"},
    ];
</script>

<section class="bg-black text-white py-16 px-6 md:px-12 lg:px-20">
    <h2 class="text-4xl font-bold text-center mb-8 m-5">Normal <span class=" text-green-500">Workouts</span></h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      {#each cards as card}
        <div class="relative rounded-2xl transition-all hover:shadow-[0_0_20px_5px_#22c55e]">  
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
