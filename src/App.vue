<template>
  <main-nav />
  <hero-banner />
</template>

<script>
import MainNav from '@/components/MainNav.vue'
import HeroBanner from './components/HeroBanner.vue'

export default {
  name: 'App',
  components: {
    MainNav: MainNav,
    HeroBanner
  }
}
</script>
