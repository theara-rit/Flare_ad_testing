<template>
  <div class="w-full mt-16 ">
    <div class="slider-top w-11/12 m-auto">
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination]"
        :slides-per-view="3"
        :a11y="true"
        :loop="true"
        :space-between="30"
        :pagination="{ clickable: true }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
      >
        <SwiperSlide v-for="(slide, index) of cards" :key="index">
          <div
            class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mb-9"
          >
            <img class="rounded-t-lg" :src="slide.img" alt="" />

            <div class="p-5">
              <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
              >
                {{ slide.title }}
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {{ slide.content }}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="slider-center mt-16 mb-16">
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination]"
        :slides-per-view="1"
        :loop="true"
        :space-between="30"
        :pagination="{ clickable: true }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
      >
        <SwiperSlide v-for="(slide, index) of sliders" :key="index">
          <div
            class="bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <img class="w-full" :src="slide.img" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="slider-below mb-24 relative">
      <Swiper
        :modules="[SwiperAutoplay, SwiperPagination]"
        :slides-per-view="1"
        :loop="true"
        :space-between="30"
        :pagination="{ clickable: false }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: true,
        }"
      >
        <SwiperSlide v-for="(slide, index) of sliders" :key="index">
          <div class="relative">
            <div class="img w-7/12">
              <img class="w-full" :src="slide.img" alt="" />
            </div>
            <div class="card-text w-4/12 absolute top-1/4 right-44">
              <a
                href="#"
                class="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
                <h5
                  class="mb-2 text-2xl font-bold tracking-tight dark:text-white"
                >
                  {{ slide.title }}
                </h5>
                <p class="font-normal  dark:text-gray-400">
                  {{ slide.content }}
                </p>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="box-info bg-gray-500 mb-16">
      <div class="box-info-content w-11/12 m-auto flex justify-between p-6 ">
        <div class="text">
          <h1 class="mb-2 text-2xl font-bold text-gray-100 tracking-tight dark:text-white">
            Let's work together.
          </h1>
          <p class="text-gray-100">Have a project? Let's make great things!</p>
        </div>
        <div class="btn-info mt-4">
          <button
            class="bg-red-400  hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
          >
          Get Pricing & Info
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          title: "Flare Ad - Car Wrapping",
          content: "Expose Your Brand",
          img: "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",
        },
        {
          title: "Flare Ad - Tuk Tuk Wrapping",
          content: "More Recognition",
          img: "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",
        },
        {
          title: "Flare Ad - Tuk Tuk Wrapping",
          content: "More Recognition",
          img: "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",
        },
        {
          title: "Flare Ad - Tuk Tuk Wrapping",
          content: "More Recognition",
          img: "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",
        },
        {
          title: "VDO Production",
          content: "Engage Your Target",
          img: "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",
        },
        {
          title: "VDO Production",
          content: "Engage Your Target",
          img: "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",
        },
      ],
      sliders: [
        {
          title: "OOH Advertising",
          content:
            "Lorem ipsum dolor sit amet. Et impedit architecto in doloribus repellat ut ipsam voluptatem qui soluta labore et temporibus voluptas. Ut odio quaerat estvoluptate expedita ut obcaecati nostrum.",
          img: "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",
        },
        {
          title: "OOH Advertising",
          content:
            "Lorem ipsum dolor sit amet. Et impedit architecto in doloribus repellat ut ipsam voluptatem qui soluta labore et temporibus voluptas. Ut odio quaerat estvoluptate expedita ut obcaecati nostrum.",
          img: "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",
        },
        {
          title: "OOH Advertising",
          content:
            "Lorem ipsum dolor sit amet. Et impedit architecto in doloribus repellat ut ipsam voluptatem qui soluta labore et temporibus voluptas. Ut odio quaerat estvoluptate expedita ut obcaecati nostrum.",
          img: "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",
        },
      ],
    };
  },
};
</script>

<style></style>
