<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClass">{{ action }}</span>
      <br />
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at BDRET.</h2>
  </section>
</template>

<script>
import nextElementinList from '@/utils/nextElementInList.js'

export default {
  name: 'HeadLine',
  data() {
    return {
      action: 'Build',
      changeTitleMethod: null
    }
  },
  computed: {
    actionClass() {
      return {
        [this.action.toLowerCase()]: true
      }
    }
  },
  created() {
    this.changeTitle()
  },
  beforeUnmount() {
    clearInterval(this.changeTitleMethod)
  },
  methods: {
    changeTitle() {
      this.changeTitleMethod = setInterval(() => {
        const actions = ['Build', 'Create', 'Design', 'Code']
        this.action = nextElementinList(actions, this.action)
      }, 5000)
    }
  }
}
</script>

<style scoped>
.build {
  color: #1a73e8;
}

.create {
  color: #34a853;
}

.design {
  color: #f9ab00;
}

.code {
  color: #d93025;
}
</style>
