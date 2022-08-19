<template>
  <template v-if="memo.editable">
    <memo-update-form
      :memo="memo"
    />
  </template>
  <template v-else>
    <div class="memo-item-container">
      <h2>{{ memo.title }}</h2>
      <p>{{ memo.description }}</p>
    </div>
    <div class="button-container">
      <memo-edit-button :memo="memo" />
      <memo-delete-button :memo="memo" />
    </div>
  </template>
</template>

<script>
import MemoEditButton from '@/components/MemoEditButton'
import MemoDeleteButton from '@/components/MemoDeleteButton'
import MemoUpdateForm from '@/components/MemoUpdateForm'
export default {
  components: {
    MemoEditButton,
    MemoDeleteButton,
    MemoUpdateForm
  },

  props: {
    id: {
      type: Number,
      required: true
    }
  },

  computed: {
    memo () {
      return this.$store.getters.memo(this.id)
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

.button-container .memo-button{
  margin: 0 5px;
}
</style>
