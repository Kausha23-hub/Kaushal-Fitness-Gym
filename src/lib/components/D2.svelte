<script>
// @ts-nocheck

    export let recipes = [
      {
        title: "Protein Shakes",
       image: "d11.jpg"
      },
      {
        title: "Protein Bars",
        image: "d12.jpg"
      },
      {
        title: "High Protein",
        image: "d13.jpg"
      },
      {
        title: "Low Carb",
        image: "d14.jpg"
      },
      {
        title: "Snacks",
        image: "d15.jpg"
      },
      {
        title: "Vegetarian",
        image: "d16.jpg"
      },
      {
        title: "Breakfast",
        image: "d17.jpg"
      },
      {
        title: "Lunch",
        image: "d18.jpg"
      }
    ];
  </script>
  
  <section class="bg-black text-white py-16 px-6 md:px-12">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-4xl font-extrabold mb-4"><span class="text-green-400">HEALTHY</span> RECIPES</h2>
      <p class="text-gray-300 text-lg max-w-2xl mx-auto">
        Learn how to prepare meals that taste great and support your fitness goals.
      </p>
    </div>
  
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      {#each recipes as recipe}
        <div class="group cursor-pointer">
          <img src={recipe.image} alt={recipe.title} class="w-full h-40 object-cover rounded-md group-hover:scale-105 transition-transform duration-300" />
          <p class="mt-2 text-center text-white font-semibold group-hover:text-white transition-colors duration-300">{recipe.title}</p>
          
        </div>
      {/each}
    </div>
  </section>
  