<template>
  <h1 class="text-6xl font-bold">Job Results</h1>
  <div>{{ role }} in {{ location }}</div>
</template>

<script>
export default {
  name: "JobResultsView",
  computed: {
    role() {
      return this.$route.query.role
    },
    location() {
      return this.$route.query.loc
    }
  },
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" })
    }
  }
}
</script>

<style scoped></style>
