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
    },

    editMemo (state, index) {
      state.memos.at(index).editable = true
    },

    deleteMemo (state, index) {
      state.memos.splice(index, 1)
    }
  },
  actions: {
    createMemo ({ commit }, newMemo) {
      commit('createMemo', newMemo)
      commit('saveMemos')
    },

    editMemo ({ commit }, index) {
      commit('editMemo', index)
    },

    deleteMemo ({ commit }, index) {
      commit('deleteMemo', index)
      commit('saveMemos')
    }
  }
})
