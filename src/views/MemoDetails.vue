<template>
  <memo-app-top-title />
  <template v-if="hasMemo(index)">
    <memo-item
      :index="index"
    />
  </template>
</template>

<script>
import store from '@/store'
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

  beforeRouteEnter (to, _, next) {
    const index = Number(to.params.index)
    if (!store.getters.hasMemo(index) || Number.isNaN(index)) {
      next({ name: 'Home' })
    } else {
      next()
    }
  },

  beforeRouteLeave (_, __, next) {
    const memo = this.$store.getters.memo(this.index)
    if (memo?.editable) this.$store.dispatch('editMemo', this.index)
    next()
  }
}
</script>
