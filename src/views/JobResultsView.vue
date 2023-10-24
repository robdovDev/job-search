<template>
  <div class="flex flex-row flex-nowrap w-full">
    <job-filter-sidebar />
    <job-listings />
  </div>
</template>

<script>
import JobFilterSidebar from "@/components/job-results/job-filter-sidebar/JobFilterSidebar.vue"
import JobListings from "@/components/job-results/JobListings.vue"

export default {
  name: "JobResultsView",
  components: {
    JobFilterSidebar,
    JobListings
  }
}
</script>

<style scoped></style>
