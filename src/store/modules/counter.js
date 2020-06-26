export default {
  namespaced: true,
  state: {
    counter: 0
  },
  getters: {
    doubleCounter: (state) => {
      return state.counter * 2;
    },
    clickCounter: state => {
      return state.counter + ' Clicks';
    }
  },
  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: state => {
      state.counter--;
    }
  },
  actions: {
    increment: ({ commit }, payload) => {
      commit('increment', payload);
    },
    decrement: ({ commit }) => { //If you only need the commit part you can do it like this
      commit('decrement');
    },
    asyncIncrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('increment', payload.duration);
      }, payload.duration);
    },
    asyncDecrement: ({ commit }) => {
      setTimeout(() => {
        commit('decrement');
      }, 1000);
    }
  }
}

// export default {
//   state, //es6 for  "state: state"
//   getters,
//   mutations,
//   actions
// }
