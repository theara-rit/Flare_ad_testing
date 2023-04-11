<template>
  <div class="w-full">
    <div class="title-project w-11/12 m-auto">
      <p class="border-t-4 border-gray-600 w-12"></p>
      <h3
        class="mb-6 mt-2 text-2xl font-bold text-gray-600 tracking-tight dark:text-white"
      >
        Recent Project
      </h3>
    </div>
    <div class="project-see-more w-11/12 m-auto">
      <div class="card-project grid grid-cols-3 gap-3">
        <div class="card-item" v-for="(card, index) of maxPerPage" :key="index">
          <div class="item" v-if="index < projects.length">
            <div class="img">
              
              <div
                class="block max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
              >
              <img :src="projects[index].img" alt="" />
              </div>
            </div>
            <div class="title text-center mt-4">
              <h3 class="text-2xl font-bold">{{ projects[index].title }}</h3>
              <p>{{ projects[index].content }}</p>
            </div>
          </div>
        </div>
      </div>
      <div
        v-if="maxPerPage < projects.length || projects.length > maxPerPage"
        class="text-center mt-6"
      >
        <button
          @click="maxPerPage += 3"
          class="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full"
        >
          View All Projects
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "TotalEnergies",
          content: "Tuk Tuk Parade",
          img: "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",
        },
        {
          title: "Panasonic Cambodia",
          content: "Car Wrapping Advertising",
          img: "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",
        },
        {
          title: "CMA",
          content: "Material Production",
          img: "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",
        },
        {
          title: "Heineken Cambodia",
          content: "Video Production",
          img: "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",
        },
        {
          title: "Chamroeun Microfinance",
          content: "Tuk Tuk Advertising",
          img: "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",
        },
        {
          title: "Panasonic Cambodia",
          content: "Car Wrapping Advertising",
          img: "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",
        },
        {
          title: "Chamroeun Microfinance",
          content: "Car Wrapping Advertising",
          img: "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",
        },
        {
          title: "Panasonic Cambodia",
          content: "Car Wrapping Advertising",
          img: "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",
        },
        {
          title: "Heineken Cambodia",
          content: "Car Wrapping Advertising",
          img: "https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg",
        },
      ],
      maxPerPage: 6,
      totalOfSlider: 0,
    };
  },
  mounted() {
    this.totalOfSlider = this.projects.length;
  },
};
</script>

<style></style>
