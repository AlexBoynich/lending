import axios from 'axios';

const slider = {
  namespaced: true,
  state: {
    social: []
  },
  actions: {
    getSocialInfo(context) {
      axios.get('/api/data.json').then((response) => {
        const social = response.data.social;
        context.commit('setSocialInfo', social)
      })
    }
  },
  mutations: {
    setSocialInfo(state, social) {
      state.social = social
    }
  },
  getters: {
    socialInfo(state) {
      return state.social
    }
  }
}

export default slider;