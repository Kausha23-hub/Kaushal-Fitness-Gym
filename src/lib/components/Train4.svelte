<script>
    export let benefits = [
        {
            title: "Yoga",
            description: "Access to a unique functional fitness facility that has been specifically designed for Personal training.",
            icon: "yoga34.jpg"
        },
        {
            title: "Physical Fitness",
            description: "Unlike a gym, the studio provides relative privacy with only scheduled sessions on offer.",
            icon: "phy.jpg"
        },
        {
            title: "Strength Training",
            description: "Flexible training times and long opening hours from 5:00am through to 10:00pm.",
            icon: "s1.jpg"
        }
    ];
</script>

<section class="bg-black text-white py-16 px-6 md:px-12 lg:px-24">
    <div class="text-center mb-12">
        <h2 class="text-3xl font-bold"><span class="text-green-500"> Daily </span> Challenges <span class="text-green-500"> & </span> My Healthy <span class="text-green-500"> Lifestyle </span> </h2>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {#each benefits as benefit}
            <div class="flex flex-col items-center p-6 bg-blue-300 text-black rounded-lg shadow-lg hover:shadow-[0px_0px_20px_5px_rgba(0,255,0,0.7)] transition duration-300">
                <img src={benefit.icon} alt={benefit.title} class="w-16 h-16 mb-4"/>
                <h3 class="text-xl font-semibold">{benefit.title}</h3>
                <p class="text-gray-700 mt-2">{benefit.description}</p>
            </div>
        {/each}
    </div>
</section>
