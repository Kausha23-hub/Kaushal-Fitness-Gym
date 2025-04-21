<script>
    export let trainers = [
      {
        name: "Armaan Sharma",
        qualifications: "NASM CPT",
        experience: "2.5 years",
        specialisation: [
          "Fat loss",
          "Weight gain",
          "Resistance training",
          "Core conditioning",
          "Body toning"
        ],
        image: "t1.jpg"
      },
      {
        name: "Sanya Kapoor",
        qualifications: "ISSA Certified Trainer",
        experience: "5 years",
        specialisation: [
          "Yoga & Flexibility",
          "Strength Training",
          "Endurance Training",
          "Injury Recovery"
        ],
        image: "t4.jpg"
      },

      {
        name: "Neha Mehta",
        qualifications: "ACE CPT",
        experience: "4 years",
        specialisation: [
          "Weight Loss",
          "Muscle Gain",
          "Athletic Training",
          "Nutrition Guidance"
        ],
        image: "t3.jpg"
      },
      {
        name: "Abhas Arora",
        qualifications: "CPT- K11, REPS L3, PHYSIQUE TRANSFORMATION, MASTER TRAINER L2, CPR",
        experience: "6 years",
        specialisation: [
          "Physique Transformation",
          "Powerlifting Prep",
          "Strength and Conditioning",
          "Bodybuilding Prep",
          "Bodyweight exercises"
        ],
        image: "t2.jpg"
      }
    ];
  </script>
  
  <section class="py-12 bg-black text-white">
    <div class="container mx-auto px-6 md:px-12">
      <h2 class="text-3xl font-bold text-center mb-8 text-white p-10">Personal <span class="text-green-500">Trainers</span></h2>
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {#each trainers as trainer}
          <div class="relative bg-black rounded-lg shadow-lg p-6 flex flex-col md:flex-row items-center text-center md:text-left transition-all duration-300 hover:shadow-[0px_0px_20px_5px_rgba(0,255,0,0.7)] before:absolute before:inset-0 before:bg-gradient-to-br before:from-white before:to-transparent before:opacity-20 before:pointer-events-none">
            <img class="w-40 h-48 rounded-lg object-cover shadow-md md:w-48 md:h-56" src={trainer.image} alt={trainer.name} />
            <div class="md:ml-6 mt-4 md:mt-0 relative z-10">
              <h3 class="text-xl font-bold text-white">{trainer.name}</h3>
              <p class="text-sm text-white mt-1"><span class="font-semibold text-gold">Qualifications:</span> {trainer.qualifications}</p>
              <p class="text-sm text-white mt-1"><span class="font-semibold text-gold">Experience:</span> {trainer.experience}</p>
              <div class="mt-3">
                <p class="text-sm font-semibold text-gold">Specialisation:</p>
                <ul class="list-disc text-white text-sm ml-4">
                  {#each trainer.specialisation as spec}
                    <li>{spec}</li>
                  {/each}
                </ul>
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
  
  <style>
    .text-gold {
      color: #d4af37;
    }
  </style>