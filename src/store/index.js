import { createStore } from 'vuex'

export default createStore({
  state: {
    memos: JSON.parse(localStorage.getItem('memos')) || []
  },
  getters: {
    hasMemos (state) {
      return state.memos.length > 0
    },

    subTitle (_, getters) {
      return getters.hasMemos
        ? 'Check your memos below.'
        : "Let's write your memos."
    },

    memo (state) {
      return (index) => {
        return state.memos.at(index)
      }
    }
  },
  mutations: {
    createMemo (state, newMemo) {
      state.memos.push(newMemo)
    },

    saveMemos (state) {
      localStorage.clear()
      const memosJSON = JSON.stringify(state.memos)
      localStorage.setItem('memos', memosJSON)
    }
  },
  actions: {
    createMemo ({ commit }, newMemo) {
      commit('createMemo', newMemo)
      commit('saveMemos')
    }
  }
})
