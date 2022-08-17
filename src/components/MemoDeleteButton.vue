<template>
  <button
  class="memo-button"
  @click="deleteMemo"
  >
    削除
  </button>
</template>

<script>
export default {
  props: {
    memo: {
      type: Object,
      required: true
    }
  },

  methods: {
    deleteMemo () {
      if (confirm('本当に削除しますか?')) {
        this.$store.dispatch('deleteMemo', this.memo)
        this.$router.push({ name: 'Home' })
      } else {
        alert('削除を中止しました。')
      }
    }
  }
}
</script>
