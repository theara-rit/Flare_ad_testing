<template>
  <div class="header">
    <div class="video-banner relative">
      <video autoplay loop muted class="w-full">
        <source src="../assets/images/video/video.mp4  " type="video/mp4" />
      </video>
      <header
        class="fixed top-0 z-30 w-full sm:px-4 shadow-xl"
        :style="{ background: changeColor ? '' : 'white' }"
      >
        <div class="flex w-11/12 justify-between mx-auto">
          <div class="logo">
            <nuxt-link to="/">
              <img src="../assets/images/renet.png" alt="" />
            </nuxt-link>
          </div>
          <div class="flex items-center space-x-1">
            <ul class="hidden space-x-2 md:inline-flex">
              <li>
                <nuxt-link
                  to="#service"
                  class="px-4 py-2 font-semibold text-gray-600 rounded"
                  >Service</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  to="#recent_project"
                  class="px-4 py-2 font-semibold text-gray-600 rounded"
                  >Recent Projects</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  to="#our_clients"
                  class="px-4 py-2 font-semibold text-gray-600 rounded"
                  >Our Clients</nuxt-link
                >
              </li>
              <li>
                <nuxt-link
                  to="#contact_us"
                  class="px-4 py-2 font-semibold text-gray-600 rounded"
                  >Contact Us</nuxt-link
                >
              </li>
            </ul>
            <div class="inline-flex md:hidden">
              <button class="flex-none px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
                <span class="sr-only">Open Menu</span>
              </button>
              <!-- put item menu to this -->
            </div>
          </div>
        </div>
      </header>
    </div>
    <div>
      <ServiceView id="service"></ServiceView>
      <RecentProjectView id="recent_project"></RecentProjectView>
      <OurClientView id="our_clients"></OurClientView>
      <ContactUsView id="contact_us"></ContactUsView>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      changeColor: true,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.updateScroll);
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition > 100) {
        this.changeColor = false;
      } else {
        this.changeColor = true;
      }
    },
  },
};
</script>

<style></style>
