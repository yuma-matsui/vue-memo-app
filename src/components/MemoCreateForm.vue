<template>
  <div class="create-form-wrapper">
    <h2>メモを追加する</h2>
    <form @submit.prevent>
      <div class="input-container">
        <label for="title">タイトル</label>
        <input
          type="text"
          id="title"
          placeholder="Input the title of this memo"
          v-model="newMemo.title"
        >
      </div>
      <div class="input-container">
        <label for="description">詳細</label>
        <textarea
          id="description"
          placeholder="Input the description of this memo"
          v-model="newMemo.description"
        ></textarea>
      </div>
      <input
        type="submit"
        value="作成"
        @click="createMemo"
      >
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newMemo: {
        title: '',
        description: '',
        editable: false
      }
    }
  },

  methods: {
    createMemo () {
      this.$store.dispatch('createMemo', { ...this.newMemo })
      this.resetNewMemo()
    },

    resetNewMemo () {
      this.newMemo.title = ''
      this.newMemo.description = ''
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 0;
}

.create-form-wrapper {
  margin: 50px auto;
}

.input-container {
  margin: 10px 0px;
  display: flex;
  flex-direction: column;
}

.input-container input {
  padding: 5px;
  display: inline-block;
  width: 15%;
  align-self: center;
  border: solid 1px black;
  border-radius: 3px;
}

.input-container textarea {
  padding: 5px;
  display: inline-block;
  width: 25%;
  align-self: center;
  border: solid 1px black;
  border-radius: 3px;
}

input[type="submit"] {
  display: inline-block;
  border: solid 1px black;
  border-radius: 5px;
  background-color: black;
  color: white;
  padding: 3px 12px;
  cursor: pointer;
}
</style>
