<template>
  <h1 class="text-6xl font-bold">Job Results</h1>
  <button @click="goToHome">Go to Home</button>
</template>

<script>
export default {
  mame: "JobResultsView",
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" })
    }
  }
}
</script>

<style scoped></style>
