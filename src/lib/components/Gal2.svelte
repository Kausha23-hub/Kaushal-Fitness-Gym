<script>
    let videoSrc = "https://www.w3schools.com/html/mov_bbb.mp4"; // Replace with your actual video URL
</script>

<div class="flex flex-col p-8 md:flex md:flex-row items-start justify-center  bg-black ">
    <!-- Video Section -->
    <div class="md:w-1/2 flex justify-center relative mt-4 mb-0 pb-0 md:mt-0 ">
      <video class="w-3/4  object-cover rounded-lg border-amber-300" autoplay muted loop playsinline>
          <source src="yoga.mp4" type="video/mp4" />
      </video>                
    </div>
  
    <!-- Description Section -->
    <div class="w-full md:w-1/2 p-4 flex flex-col justify-start items-start">
      <h2 class="text-xl md:text-2xl font-bold mb-2 text-white">Yoga <span class="text-green-400">Tutorial</span></h2>
      <p class="text-gray-300 text-base md:text-lg">
        Yoga is an ancient practice that involves physical postures, breathing techniques, and meditation.
        It improves flexibility, strength, and overall physical health. Yoga helps reduce stress, anxiety,
        and mental tension. It promotes mindfulness, self-awareness, and emotional balance.
      </p>
    </div>
</div>
<div class="grid grid-cols-1 md:grid-cols-3 gap-7 p-24 bg-black">
    <div class="flex justify-center">
        <video class="w-full  object-cover rounded-lg" autoplay muted loop playsinline>
            <source src="yoga1.mp4" type="video/mp4" />
        </video>

    </div>
    <div class="flex justify-center">
        <video class="w-full object-cover rounded-lg" autoplay muted loop playsinline>
            <source src="yoga2.mp4" type="video/mp4" />
        </video>
    </div>
    <div class="flex justify-center">
        <video class="w-full  object-cover rounded-lg" autoplay muted loop playsinline>
            <source src="yoga3.mp4" type="video/mp4" />
        </video>
    </div>
</div>
