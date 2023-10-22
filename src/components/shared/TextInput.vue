<template>
  <input
    :value="modelValue"
    @input="handleInput"
    type="text"
    class="w-full text-lg font-normal focus:outline-none"
  />
</template>

<script>
export default {
  name: "TextInput",
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },

  methods: {
    handleInput($event) {
      this.$emit("update:modelValue", $event.target.value)
    }
  }
}
</script>

<style scoped></style>
