<script>
    // You can add any necessary script here
</script>
    
<!-- svelte-ignore css_unused_selector -->
<style>
    /* Custom styles */
    .custom-bg {
      background-color: #000;
      color: white;
    }
    
    /* Center the content and profile */
    .profile-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
    }
    
    .content-container {
      margin-top: 20px;
    }
</style>
    
<div class="flex flex-col items-center justify-center bg-black p-8 shadow-md text-white">
  <!-- User Info Section -->
  <div class="profile-container">
    <img
      src="t2.jpg"
      alt="User Avatar"
      class="rounded-full mb-3 w-48 h-48 object-cover transition-shadow duration-300 hover:shadow-[0px_0px_20px_5px_rgba(0,255,0,0.7)]" />
    <div>
      <h2 class="text-lg font-semibold">Good Evening</h2>
      <p class="text-gray-400">Abhas Arora <span class="text-green-500 font-medium">Members</span></p>
    </div>
  </div>
    
  <!-- Notification Icon -->
  <div class="lg:ml-auto mt-2 lg:mt-0">
    <button class="bg-transparent border-none">
      <img src="notification-icon.jpg" alt=""/>
    </button>
  </div>
</div>
