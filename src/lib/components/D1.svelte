<script>
  import { onMount } from 'svelte';
  
  export let diets = [
    {
      title: "The Clean Eating Diet Plan Guide",
      description: "Learn everything you need to know before starting the Clean Eating Diet plan including its history, guidelines & components, & all of the science behind it.",
      image: "di.jpg",
      reads: "727.4K Reads",
      comments: "48 Comments",
    },
    {
      title: "The IIFYM & Flexible Dieting Diet Plan Guide",
      description: "Learn everything you need to know before starting the IIFYM Diet plan including its history, guidelines and components, and all of the science behind it.",
      image: "di1.jpg",
      reads: "265K Reads",
      comments: "5 Comments",
    },
    {
      title: "The Ketogenic & Low Carb Diet Plan Guide",
      description: "Learn everything you need to know before starting the Keto Diet plan including its history, guidelines and components, and all of the science behind it.",
      image: "di2.jpg",
      reads: "272.7K Reads",
      comments: "2 Comments",
    },
    {
      title: "The Intermittent Fasting Diet Plan Guide",
      description: "Learn everything you need to know before starting the Intermittent Fasting plan including its history, guidelines & components, & all the science behind.",
      image: "d4.jpg",
      reads: "264.2K Reads",
      comments: "28 Comments",
    },
    {
      title: "The Carb Cycling Diet Plan Guide",
      description: "Learn everything you need to know before starting the Carb Cycling Diet plan including its history, guidelines & components, & all the science behind.",
      image: "d5.jpg",
      reads: "209.9K Reads",
      comments: "20 Comments",
    },
    {
      title: "The Paleolithic (Paleo) Diet Plan Guide",
      description: "Learn everything you need to know before starting the Paleo Diet plan including its history, guidelines and components, and all of the science behind it.",
      image: "d6.jpg",
      reads: "43.5K Reads",
      comments: "0 Comments",
    },
    {
      title: "The Mediterranean Diet Plan Guide",
      description: "Learn everything you need to know before starting the Mediterranean Diet plan including its history, guidelines and components, and the science behind.",
      image: "d7.jpg",
      reads: "69K Reads",
      comments: "3 Comments",
    },
    {
      title: "The Vegan, Vegetarian, & Pescatarian Diet Plan Guide",
      description: "Learn everything you need to know before starting the vegan & vegetarian diet including its history, guidelines & components, & all the science behind.",
      image: "d8.jpg",
      reads: "56.3K Reads",
      comments: "7 Comments",
    },
    {
      title: "The Gluten Free Diet Plan Guide",
      description: "Learn everything you need to know before starting the Gluten Free Diet plan including its history, guidelines & components, & all the science behind.",
      image: "d9.jpg",
      reads: "35.2K Reads",
      comments: "0 Comments",
    },
  ];

  let showContent = false;

  onMount(() => {
    showContent = true;
  });
</script>

<section class="bg-black text-white py-16 px-4 md:px-10 lg:px-20">
  <div class="text-center mb-12">
    <h2 class="text-4xl font-bold p-10">
      DIET <span class="text-4xl font-bold text-green-400">GUIDES</span>
    </h2>
    <p class="mt-2 text-gray-300 max-w-2xl mx-auto">
      Confused about what diet you should follow? Our guides explain the different approaches to nutrition in detail. Choose a style that best suits your goals, food preferences and lifestyle.
    </p>
  </div>

  <div class="grid gap-12 md:grid-cols-3">
    {#each diets as diet, index}
      <div 
        class={`bg-gray-900 rounded-lg shadow-lg overflow-hidden transition-all duration-700 ease-in-out ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style="transition-delay: {index * 100}ms;">
        <img src={diet.image} alt={diet.title} class="w-full h-48 object-cover" />
        <div class="p-6">
          <h3 class="text-xl font-semibold mb-4">{diet.title}</h3>
          <p class="text-gray-400 mb-6">{diet.description}</p>
          <div class="flex gap-4 text-sm text-gray-300">
            <span class="bg-gray-700 px-4 py-1 rounded-full">{diet.reads}</span>
            <span class="bg-gray-700 px-4 py-1 rounded-full">{diet.comments}</span>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>
