<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <div class="mx-auto mb-5 mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Previous
          </router-link>
        </div>

        <div class="flex items-center justify-center">
          <router-link
            v-if="nextPage"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Next
          </router-link>
        </div>
      </div>
    </div>
    <ol>
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
      />
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentPage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            role="link"
            :to="{ name: 'JobResults', query: { page: previousPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Previous
          </router-link>
        </div>

        <div class="flex items-center justify-center">
          <router-link
            v-if="nextPage"
            role="link"
            :to="{ name: 'JobResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Next
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios"

import JobListing from "@/components/job-results/JobListing.vue"

export default {
  name: "JobListings",
  components: {
    JobListing
  },
  data() {
    return {
      jobs: []
    }
  },
  computed: {
    currentPage() {
      return Number.parseInt(this.$route.query.page || "1")
    },
    previousPage() {
      return this.currentPage > 1 ? this.currentPage - 1 : undefined
    },
    nextPage() {
      return this.currentPage < Math.ceil(this.jobs.length / 10)
        ? this.currentPage + 1
        : undefined
    },
    displayedJobs() {
      const firstJobIdx = (this.currentPage - 1) * 10
      const lastJobIdx = this.currentPage * 10
      return this.jobs.slice(firstJobIdx, lastJobIdx)
    }
  },
  async mounted() {
    const baseUrl = import.meta.env.VITE_APP_API_URL
    const response = await axios.get(`${baseUrl}/jobs`)
    this.jobs = response.data
  }
}
</script>

<style scope></style>
