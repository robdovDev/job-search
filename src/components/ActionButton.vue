<template>
  <button
    class="rounded border-0 px-5 py-3 font-medium text-white bg-brand-blue-1 hover:shadow-blue"
  >
    {{ caption }}
  </button>
</template>

<script>
export default {
  name: 'ActionButton',
  data() {
    return {
      caption: 'Sign in'
    }
  }
}
</script>

<style scope></style>
