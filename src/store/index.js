import { createStore } from 'vuex'

export default createStore({
  state: {
    memos: JSON.parse(localStorage.getItem('memos')) || [],
    id: localStorage.getItem('id') || 0
  },
  getters: {
    hasMemos (state) {
      return state.memos.length > 0
    },

    hasMemo (state) {
      return (id) => {
        return state.memos.some(memo => memo.id === id)
      }
    },

    subTitle (_, getters) {
      return getters.hasMemos
        ? 'Check your memos below.'
        : "Let's write your memos."
    },

    memo (state) {
      return (id) => {
        return state.memos.find(memo => memo.id === id)
      }
    }
  },
  mutations: {
    incrementId (state) {
      state.id++
    },

    saveId (state) {
      localStorage.setItem('id', state.id)
    },

    createMemo (state, newMemo) {
      if (newMemo.title === '') newMemo.title = 'タイトルなし'
      if (newMemo.description === '') newMemo.description = '詳細なし'
      state.memos.push({ id: state.id, ...newMemo })
    },

    saveMemos (state) {
      const memosJSON = JSON.stringify(state.memos)
      localStorage.setItem('memos', memosJSON)
    },

    editMemo (_, memo) {
      memo.editable = !memo.editable
    },

    updateMemo (state, { updatedMemo }) {
      updatedMemo.editable = false
      if (updatedMemo.title === '') updatedMemo.title = 'タイトルなし'
      if (updatedMemo.description === '') updatedMemo.description = '詳細なし'

      state.memos =
        state.memos.map(memo => {
          return memo.id === updatedMemo.id
            ? updatedMemo
            : memo
        })
    },

    deleteMemo (state, memo) {
      const index = state.memos.indexOf(memo)
      state.memos.splice(index, 1)
    }
  },
  actions: {
    incrementId ({ commit }) {
      commit('incrementId')
      commit('saveId')
    },

    createMemo ({ commit }, newMemo) {
      commit('createMemo', newMemo)
      commit('saveMemos')
    },

    editMemo ({ commit }, memo) {
      commit('editMemo', memo)
    },

    updateMemo ({ commit }, { updatedMemo }) {
      commit('updateMemo', { updatedMemo })
      commit('saveMemos')
    },

    deleteMemo ({ commit }, memo) {
      commit('deleteMemo', memo)
      commit('saveMemos')
    }
  }
})
