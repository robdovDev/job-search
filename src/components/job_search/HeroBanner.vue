<template>
  <main>
    <section class="flex flex-col h-screen pt-10 pb-20">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-1"></div>
        <div class="col-start-2 col-span-5">
          <head-line />
          <job-search-form />
        </div>
        <div class="col-start-7 col-span-5 self-center justify-self-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
            class="h-80 w-80 object-contain"
          />
        </div>
        <div class="col-start-12 col-span-1"></div>
      </div>
    </section>
  </main>
</template>

<script>
import HeadLine from './HeadLine.vue'
import JobSearchForm from './JobSearchForm.vue'
export default {
  name: 'HeroBanner',
  components: {
    HeadLine,
    JobSearchForm
  }
}
</script>

<style scope></style>
