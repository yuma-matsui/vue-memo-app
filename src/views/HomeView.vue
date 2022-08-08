<template>
  <memo-app-top-title />
  <h2>{{ subTitle }}</h2>
  <memo-lists />
  <memo-create-form />
</template>

<script>
import { mapGetters } from 'vuex'
import MemoCreateForm from '@/components/MemoCreateForm'
import MemoLists from '@/components/MemoLists'
import MemoAppTopTitle from '@/components/MemoAppTopTitle'

export default {
  components: {
    MemoCreateForm,
    MemoLists,
    MemoAppTopTitle
  },

  computed: {
    ...mapGetters([
      'subTitle'
    ])
  }
}
</script>
