<template>
  <memo-app-top-title />
  <template v-if="hasMemo(index)">
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
      'hasMemo'
    ])
  },

  mounted () {
    if (!this.$store.getters.hasMemo(this.index)) this.$router.push('/')
  },

  unmounted () {
    const memo = this.$store.getters.memo(this.index)
    if (memo?.editable) this.$store.dispatch('editMemo', this.index)
  }
}
</script>
