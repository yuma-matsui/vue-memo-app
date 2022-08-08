<template>
  <div class="memo-item-container">
    <h2>{{ memo.title }}</h2>
    <p>{{ memo.description }}</p>
  </div>
  <div class="button-container">
    <button>編集</button>
    <button>削除</button>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: String,
      required: true
    }
  },

  computed: {
    memo () {
      return this.$store.getters.memo(this.index)
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 0;
}

p {
  border: 2px solid lightgray;
  box-shadow: 2px 2px 3px 0 rgba(0, 0, 0, 0.2);
  width: 15%;
  margin: 8px auto 0;
  padding: 10px;
  overflow-wrap: break-word;
}
</style>
