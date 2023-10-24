<template>
  <div>Job Page: {{ currentJobId }}</div>
</template>

<script>
export default {
  name: "JobView",
  computed: {
    currentJobId() {
      return this.$route.params.job_id
    }
  }
}
</script>

<style scope></style>
