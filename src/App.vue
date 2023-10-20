<template>
  <main-nav />
  <hero-banner />
</template>

<script>
import MainNav from '@/components/navigation/MainNav.vue'
import HeroBanner from './components/job_search/HeroBanner.vue'

export default {
  name: 'App',
  components: {
    MainNav: MainNav,
    HeroBanner
  }
}
</script>
