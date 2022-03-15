<template>
  <section class="toy-app flex col gap-1">
    <button @click="goToEdit" class="btn btn-secondary">Add a new toy</button>
    <toy-filter @setFilter="setFilter" />
    <toy-list @removeToy="removeToy" v-if="toys" :toys="toys" /> 
  </section>
</template>

<script>
// import { toyService } from '../services/toy-service.js'
import toyFilter from '../components/toy-filter.vue'
import toyList from '../components/toy-list.vue'

export default {
  name: 'toy-app',
  data() {
    return {
      // filterBy: null,
    }
  },
  computed: {
    toys() {
      // console.log('GETTERS: ', this.$store.getters.toys)
      return this.$store.getters.toys
    },
    // toysToShow() {
    //   if (!this.filterBy) return this.toys
    //   const regex = new RegExp(this.filterBy.name, 'i')
    //   return this.toys.filter((toy) => regex.test(toy.name) && ( toy.inStock === (this.filterBy.inStock) ? true : toy.inStock))
    // },
  },
  created() {},
  methods: {
    // loadToys() {
    //   toyService.query().then((toys) => (this.toys = toys))
    // },
    // setFilter(filterBy) {
    //   this.filterBy = filterBy
    // },
    goToEdit() {
      this.$router.push('/toy/edit')
    },
    removeToy(toyId) {
      this.$store.dispatch({ type: 'removeToy', id: toyId })
    },
    setFilter(filterBy){
      filterBy = JSON.parse(JSON.stringify(filterBy))
      // console.log('filterBy', filterBy);
      this.$store.dispatch({type: 'filter', filterBy})
    }
  },
  components: {
    toyList,
    toyFilter,
  },
}
</script>
