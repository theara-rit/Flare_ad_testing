<template>
    <div class="contact-us mt-16">
        <div class="text w-11/12 m-auto">
            <p class="mb-2">Have a project?</p>
            <p class="border-t-4 border-gray-600 w-12"></p>
            <h2 class="mt-2 text-2xl font-bold">Please share us your requirement.</h2>
        </div>
        <div class="w-11/12 m-auto flex justify-between mt-8">
          <form class="w-6/12">
            <div class="flex items-center border-b border-gray-500 py-4">
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Your Name"
                v-model="name"
              />
            </div>
            <div class="flex items-center border-b border-gray-500 py-4 mt-4">
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Company"
                aria-label="Full name"
                v-model="company"
              />
            </div>
            <div class="flex items-center border-b border-gray-500 py-4 mt-4">
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="text"
                placeholder="Subject"
                aria-label="Full name"
                v-model="subjectOfEmail"
              />
            </div>
            <div class="flex items-center border-b border-gray-500 py-4 mt-4">
              <input
                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                type="email"
                placeholder="Email"
                aria-label="Full name"
                v-model="email"
              />
            </div>
            <div class="flex items-center border-b border-gray-500 py-4 mt-4">
              <textarea v-model="textarea" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" name="" id="" cols="60" rows="5" placeholder="Message (Optional)"></textarea>
            </div>
            <div class="flex items-center py-4 mt-4">
              <button
                class="flex-shrink-0 bg-red-400 hover:bg-red-600 text-sm text-white py-2 px-4 rounded"
                type="submit"
                @click="sendMail"
              >
                Send
              </button>
          </div>
          </form>
          <div class="img w-2/5">
              <img class="w-full" src="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg" alt="">
          </div>
        </div>
        <div>
          <div class="result">

          </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      name : '',
      company: '',
      subjectOfEmail: '',
      email: '',
      textarea: '',
    }
  },
  methods:{
    sendMail(){
      console.log(this.name,this.company);
    }
  }
};
</script>

<style></style>
