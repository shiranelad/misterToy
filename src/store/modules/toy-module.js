import { toyService } from '../../services/toy-service.js'

export default {
  state: {
    toys: [],
    filterBy: null,
  },
  getters: {
    toys(state) {
      return state.toys
    },
  },
  mutations: {
    setToys(state, { toys }) {
      state.toys = toys
    },
    removeToy(state, { id }) {
      const idx = state.toys.findIndex((toy) => toy._id === id)
      state.toys.splice(idx, 1)
    },
    saveToy(state, { toy }) {
      const idx = state.toys.findIndex((currToy) => currToy._id === toy._id)
      if (idx !== -1) state.toys.splice(idx, 1, toy)
      else state.toys.push(toy)
    },
    setFilter(state, {filterBy}){
      state.filterBy = filterBy;
    }
  },
  actions: {
    loadToys({commit, state}) {
      toyService.query(state.filterBy).then((toys) => {
        // console.log('toys FROM LOAD', toys);
        commit({type: 'setToys', toys});
      });
    },
    removeToy({ commit }, { id }) {
      toyService.remove(id).then(() => {
        commit({ type: 'removeToy', id })
      })
    },
    saveToy({ commit }, { toy }) {
      toyService.save(toy).then((toy) => {
        commit({ type: 'saveToy', toy })
      })
    },
    filter({commit, dispatch}, {filterBy}) {
      // toyService.query(filterBy).then((toys) => {
      //   commit({type: 'setToys', toys});
      // });
      console.log('filterByStore', filterBy);
      commit({type: 'setFilter', filterBy});
      dispatch({type: 'loadToys'});
    },
  },
}
