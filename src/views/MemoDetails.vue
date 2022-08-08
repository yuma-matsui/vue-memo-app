<template>
  <memo-app-top-title />
  <memo-item
    :index="index"
  />
</template>

<script>
import MemoAppTopTitle from '@/components/MemoAppTopTitle'
import MemoItem from '@/components/MemoItem'

export default {
  components: {
    MemoAppTopTitle,
    MemoItem
  },

  props: {
    index: {
      type: String,
      required: true
    }
  }
}
</script>
