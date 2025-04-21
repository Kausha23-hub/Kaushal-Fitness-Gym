<script>
  import { onMount } from 'svelte';
  import emailjs from 'emailjs-com'; // Import emailjs

  let name = "";
  let email = "";
  let phone = "";
  let plan = "";
  let showContent = false;

  const handleSubmit = () => {
    // Log the form values for debugging
    console.log({ name, email, phone, plan });

    // Send email using EmailJS
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID, // Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID, // Template ID
        {
          to_email: email, // Recipient email
          from_name: name, // User's name
          message: `Welcome to Royal Fitness Gym! Your plan: ${plan}. We'll contact you soon at ${phone}.`, // Message body
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY // Public key
      )
      .then(
        (response) => {
          // Show success alert after the email is sent
          alert("Email sent successfully!");
        },
        (error) => {
          // Log error and show failure message
          console.error("Error sending email:", error);
          alert("Something went wrong. Please try again.");
        }
      );

    // Reset form fields after submission
    name = "";
    email = "";
    phone = "";
    plan = "";
  };

  onMount(() => {
    setTimeout(() => {
      showContent = true;
    }, 300);
  });
</script>

<!-- Main Page Content -->
<div class="min-h-screen bg-black text-white px-4 pt-24 pb-12 flex items-center justify-center">
  <div
    class={`w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-6 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-in-out transform ${
      showContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`}
  >
    <!-- 🏋️ Form Section (Left) -->
    <section class="bg-gray-900 flex flex-col justify-center h-full p-10 md:p-10 min-h-[500px]">
      <h2 class="text-3xl font-bold mb-6 border-b pb-2 border-gray-700">
        <span class="text-green-400">Join</span> Royal Fitness
      </h2>

      <form class="space-y-5" on:submit|preventDefault={handleSubmit}>
        <div>
          <label for="name" class="block mb-1 text-sm">Full Name</label>
          <input
            id="name"
            type="text"
            bind:value={name}
            class="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <div>
          <label for="email" class="block mb-1 text-sm">Email Address</label>
          <input
            id="email"
            type="email"
            bind:value={email}
            class="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <div>
          <label for="phone" class="block mb-1 text-sm">Phone Number</label>
          <input
            id="phone"
            type="tel"
            bind:value={phone}
            class="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
            required
          />
        </div>

        <div>
          <label for="plan" class="block mb-1 text-sm">Preferred Plan</label>
          <select
            id="plan"
            bind:value={plan}
            class="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="" disabled selected>Select your plan</option>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        <button
          type="submit"
          class="w-full bg-green-500 hover:bg-green-400 text-black font-semibold py-2 rounded-lg transition duration-300"
        >
          Join Now
        </button>
      </form>
    </section>

    <!-- 🗺️ Map Section (Right) -->
    <section class="h-full w-full min-h-[500px]">
      <!-- svelte-ignore a11y_missing_attribute -->
      <iframe
        class="w-full h-full border-0"
        style="background: transparent"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019289574089!2d-122.41941568468127!3d37.77492977975996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c20df9f3f%3A0x3e6e20f3274f0ec5!2sSan+Francisco%2C+CA!5e0!3m2!1sen!2sus!4v1616612449693!5m2!1sen!2sus"
        allowfullscreen
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  </div>
</div>
