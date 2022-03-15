<template>
  <section v-if="toy" class="toy-details flex flex-col items-center gap-2">
    <article>
      <p><span class="fw-bold">ID:</span> {{ toy._id }}</p>
      <p><span class="fw-bold">Name:</span> {{ toy.name }}</p>
      <p><span class="fw-bold">Price:</span> {{ toy.price }}</p>
      <p><span class="fw-bold">In Stock:</span> {{ toy.inStock ? 'Yes' : 'No' }}</p>
      <p><ul class="fw-bold">Categories: <li v-for="label in toy.labels" key="label">{{ label }}</li></ul></p>
      <p><ul class="fw-bold">Reviews: <li v-for="review in toy.reviews" key="review">{{ review }}</li></ul></p>
      <!-- <p><span class="fw-bold">Reviews:</span> {{ toy.reviews }}</p> -->
    </article>
    <button @click="goBack" class="btn btn-primary">go back</button>
  </section>
</template>

<script>
import { toyService } from '../services/toy-service.js'

export default {
  name: 'toy-detail',
  data() {
    return {
      toy: null,
    }
  },
  created() {
    let { toyId } = this.$route.params
    toyService.getById(toyId).then((toy) => {
      this.toy = toy
    })
  },
  methods: {
    goBack() {
      this.$router.push('/toy')
    },
  },
}
</script>
