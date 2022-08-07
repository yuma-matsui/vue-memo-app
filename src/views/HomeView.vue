<template>
  <h1>
    <router-link
      to="/"
    >
      Memo App
    </router-link>
  </h1>
  <h2>{{ subTitle }}</h2>
  <memo-create-form />
</template>

<script>
import { mapGetters } from 'vuex'
import MemoCreateForm from '@/components/MemoCreateForm'

export default {
  components: {
    MemoCreateForm
  },

  computed: {
    ...mapGetters([
      'subTitle'
    ])
  }
}
</script>

<style scoped>
h1 a {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
</style>
