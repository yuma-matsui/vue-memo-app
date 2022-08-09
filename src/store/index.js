import { createStore } from 'vuex'

export default createStore({
  state: {
    memos: JSON.parse(localStorage.getItem('memos')) || []
  },
  getters: {
    hasMemos (state) {
      return state.memos.length > 0
    },

    hasMemo (state) {
      return (index) => {
        return state.memos.length > index
      }
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
      if (newMemo.title === '') newMemo.title = 'タイトルなし'
      if (newMemo.description === '') newMemo.description = '詳細なし'
      state.memos.push(newMemo)
    },

    saveMemos (state) {
      localStorage.clear()
      const memosJSON = JSON.stringify(state.memos)
      localStorage.setItem('memos', memosJSON)
    },

    editMemo (state, index) {
      const memo = state.memos.at(index)
      memo.editable = !memo.editable
    },

    updateMemo (state, { index, updatedMemo }) {
      updatedMemo.editable = false
      if (updatedMemo.title === '') updatedMemo.title = 'タイトルなし'
      if (updatedMemo.description === '') updatedMemo.description = '詳細なし'
      state.memos[index] = updatedMemo
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

    updateMemo ({ commit }, { index, updatedMemo }) {
      commit('updateMemo', { index, updatedMemo })
      commit('saveMemos')
    },

    deleteMemo ({ commit }, index) {
      commit('deleteMemo', index)
      commit('saveMemos')
    }
  }
})
