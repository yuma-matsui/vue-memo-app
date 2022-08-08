<template>
  <div class="memo-lists-container">
    <template v-if="hasMemos">
      <ul>
        <li
          v-for="(memo, index) in memos"
          :key="memo.title"
        >
          <router-link :to="toMemoDetails(index)">
            {{ memo.title }}
          </router-link>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    memos () {
      return this.$store.state.memos
    },

    toMemoDetails () {
      return (index) => {
        return {
          name: 'MemoDetails',
          params: {
            index
          }
        }
      }
    },

    ...mapGetters([
      'hasMemos'
    ])
  }
}
</script>

<style scoped>
.memo-lists-container {
  border: 2px solid lightgray;
  box-shadow: 2px 2px 3px 3px rgba(0, 0, 0, 0.2);
  width: 25%;
  margin: 0 auto;
  padding: 10px 0;
}

.memo-lists-container ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.memo-lists-container ul li {
  font-size: 1.25rem;
  font-weight: bold;
  margin: 5px 0;
}

.memo-lists-container ul li a {
  text-decoration: none;
  color: black;
}

.memo-lists-container ul li a:hover {
  color: mediumseagreen;
}
</style>
