<template>
  <img
    :src="imgLink"
    class="h-8 w-8 rounded-3xl object-contain cursor-pointer"
    alt="User profile image"
  />
</template>

<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      imgLink:
        'https://dtzulyujzhqiu.cloudfront.net/remaxgoldcoast4950/profiles/1696274505_1250797.jpg'
    }
  }
}
</script>

<style scope></style>
