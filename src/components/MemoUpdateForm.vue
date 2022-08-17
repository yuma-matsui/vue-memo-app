<template>
  <form @submit.prevent>
    <div class="input-container">
      <label for="title">タイトル</label>
      <input
        type="text"
        id="title"
        placeholder="Input the title of this memo"
        v-model.trim="updatedMemo.title"
      >
    </div>
    <div class="input-container">
      <label for="description">詳細</label>
      <textarea
        id="description"
        placeholder="Input the description of this memo"
        v-model.trim="updatedMemo.description"
      ></textarea>
    </div>
    <input
      value="更新"
      class="memo-input"
      @click="updateMemo"
    >
  </form>
</template>

<script>
export default {
  props: {
    memo: {
      type: Object,
      required: true
    }
  },

  data () {
    return {
      updatedMemo: {
        ...this.memo
      }
    }
  },

  methods: {
    updateMemo () {
      this.$store.dispatch('updateMemo', {
        updatedMemo: this.updatedMemo
      })
    }
  }
}
</script>
