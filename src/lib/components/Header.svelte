<script>
    let words = ['Running', 'Weightlifting', 'Yoga', 'Cycling'];
    let currentIndex = 0;
    setInterval(() => {
      currentIndex = (currentIndex + 1) % words.length;
    }, 2000);
  </script>
  
  <section class="relative bg-black text-white min-h-screen flex items-center">
    <div class="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
      <!-- Text Section -->
      <div class="md:w-1/2 space-y-4">
        <h1 class="text-5xl font-bold leading-tight">
          Build Your <br />
          <span class="text-green-400">Dream Physique</span>
        </h1>
        <h2 class="text-3xl font-semibold text-green-400">
          {words[currentIndex]}
        </h2>
        <p class="text-gray-300 max-w-md">
          Lorem ipsum dolor sit, bus earum, aliquam ipsa repellat iusto esse laudantium animi vitae consectetur obcaecati.
        </p><br>
        <!-- svelte-ignore a11y_invalid_attribute -->
        <a href="#" class="bg-green-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition">
          Join Now
        </a>
      </div>
  
      
      <div class="md:w-1/2 flex justify-center relative mt-10 md:mt-0">
        <video class="w-full h-full object-cover" autoplay muted loop playsinline>
            <source src="/home.mp4" type="video/mp4" />
        </video>               
      </div>
    </div>
  </section>
  
  