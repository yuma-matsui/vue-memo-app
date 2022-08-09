<template>
  <memo-app-top-title />
  <template v-if="hasMemos">
    <memo-item
      :index="index"
    />
  </template>
</template>

<script>
import MemoAppTopTitle from '@/components/MemoAppTopTitle'
import MemoItem from '@/components/MemoItem'
import { mapGetters } from 'vuex'

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
  },

  computed: {
    ...mapGetters([
      'hasMemos'
    ])
  }
}
</script>
