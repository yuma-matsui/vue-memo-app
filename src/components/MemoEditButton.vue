<template>
  <button
    @click="editMemo(index)"
    class="button"
  >
    編集
  </button>
</template>

<script>
import { mapActions } from 'vuex'
export default {

  props: {
    index: {
      type: String,
      required: true
    }
  },

  methods: {
    ...mapActions([
      'editMemo'
    ])
  }
}
</script>

<style>
.button {
  display: inline-block;
  border: solid 1px black;
  border-radius: 5px;
  background-color: black;
  color: white;
  padding: 3px 12px;
  cursor: pointer;
}
</style>
