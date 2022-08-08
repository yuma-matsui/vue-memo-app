<template>
  <div class="memo-item-container">
    <h2>{{ memo.title }}</h2>
    <p>{{ memo.description }}</p>
  </div>
  <div class="button-container">
    <memo-edit-button :index="index" />
    <memo-delete-button :index="index" />
  </div>
</template>

<script>
import MemoEditButton from '@/components/MemoEditButton'
import MemoDeleteButton from '@/components/MemoDeleteButton'
export default {
  components: {
    MemoEditButton,
    MemoDeleteButton
  },

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
.memo-item-container {
  margin: 15px 0;
}

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

.button-container .button{
  margin: 0 5px;
}
</style>
