<script>
    const footerLinks = [
        {
            title: "About Us",
            links: ["Join Now", "Submit a Ticket"]
        },
        {
            title: "SERVICES",
            links: ["Personal Gym Trainer", "Body Transformation" , "Online Personal Training"]
        },
        {
            title: "SUPPORT",
            links: ["Teamwork", "TensaX innovation Lab"]
        },
        {
            title: "Location / Address",
            links: ["Jagatpura, jaipur", "7427806908", "kausalgr215@gmail.com"]
        }
    ];

    const socialIcons = [
        { icon: "fa-facebook", link: "#" },
        { icon: "fa-twitter", link: "#" },
        { icon: "fa-rss", link: "#" },
        { icon: "fa-google", link: "#" },
        { icon: "fa-ellipsis-h", link: "#" }
    ];
</script>

<footer class="bg-gray-800 text-gray-300 py-10 px-6 md:px-12">
    <div class="container mx-auto text-center md:text-left">
        
        <!-- Top Footer Section -->
        <div class="flex flex-col md:flex-row justify-between items-center md:items-start">
            
            <!-- Logo & Slogan -->
            <div class="mb-6 md:mb-0">
                <h2 class="text-2xl font-bold text-white">
                    Royal <span class="text-green-400">Fitness</span>
                </h2><br>
                <p class="text-sm mt-1">COMPANY</p>
            </div>

            <!-- Footer Links -->
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
                {#each footerLinks as section}
                    <div>
                        <h3 class="text-white font-semibold mb-2">{section.title}</h3>
                        <ul class="space-y-1">
                            {#each section.links as link}
                                <!-- svelte-ignore a11y_invalid_attribute -->
                                <li><a href="#" class="hover:text-green-400 transition">{link}</a></li>
                            {/each}
                        </ul>
                    </div>
                {/each}
            </div>
        </div>

        <hr class="border-gray-700 my-6" />

        <!-- Bottom Footer Section -->
        <div class="flex flex-col items-center justify-center">
            
            <!-- Social Icons -->
            <div class="flex space-x-4 mb-4">
                {#each socialIcons as social}
                    <!-- svelte-ignore a11y_consider_explicit_label -->
                    <a href={social.link} class="text-gray-400 hover:text-white transition text-xl">
                        <i class={"fab " + social.icon}></i>
                    </a>
                {/each}
            </div>

            <p class="text-sm text-gray-400">@ Original. All rights reserved 2025.</p>
        </div>
    </div>
</footer>


