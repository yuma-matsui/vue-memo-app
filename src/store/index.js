import { createStore } from 'vuex'

export default createStore({
  state: {
    memos: JSON.parse(localStorage.getItem('memos')) || []
  },
  getters: {
    existMemos (state) {
      return state.memos.length > 0
    },

    subTitle (_, getters) {
      return getters.existMemos
        ? 'Check your memos below.'
        : "Let's write your memos."
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
