<template>
  <memo-app-top-title />
  <template v-if="hasMemo(id)">
    <memo-item
      :id="id"
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

  data () {
    return {
      id: Number(this.$route.params.id)
    }
  },

  computed: {
    ...mapGetters([
      'hasMemo'
    ])
  },

  beforeRouteEnter (to, _, next) {
    const id = Number(to.params.id)
    if (!store.getters.hasMemo(id) || Number.isNaN(id)) {
      next({ name: 'Home' })
    } else {
      next()
    }
  },

  beforeRouteLeave (_, __, next) {
    const memo = this.$store.getters.memo(this.id)
    if (memo?.editable) this.$store.dispatch('editMemo', memo)
    next()
  }
}
</script>
