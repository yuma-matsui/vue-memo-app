<template>
  <button
  class="button"
  @click="deleteMemo"
  >
    削除
  </button>
</template>

<script>
export default {
  props: {
    index: {
      type: String,
      required: true
    }
  },

  methods: {
    deleteMemo () {
      this.$store.dispatch('deleteMemo', this.index)
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
