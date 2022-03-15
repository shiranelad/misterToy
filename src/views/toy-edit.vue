<template>
  <section v-if="toyToEdit" class="toy-edit">
    <form @submit.prevent="saveToy" class="form">
      <div class="form-control">
        <label for="toyname" class="form-label">Toy Name</label>
        <input
          required
          v-model="toyToEdit.name"
          id="toyname"
          type="text"
          class="form-input"
          placeholder="Enter your toy name here..."
        />
      </div>
      <div class="form-control">
        <label for="price" class="form-label">Toy Price</label>
        <input
          required
          v-model.number="toyToEdit.price"
          id="price"
          type="number"
          class="form-input"
        />
        <label for="inStock" class="form-label">Toy In Stock?</label>
        <input
          v-model="toyToEdit.inStock"
          id="inStock"
          type="checkbox"
          class="form-input"
        />
      </div>
      <div class="btn-group">
        <button @click="saveToy" class="btn btn-info">save</button>
        <button @click="goBack" class="btn btn-danger-text">go back</button>
      </div>
    </form>
  </section>
</template>

<script>
import { toyService } from '../services/toy-service'

export default {
  name: 'toy-edit',
  data() {
    return {
      toyToEdit: null,
    }
  },
  created() {
    let { toyId } = this.$route.params
    if (toyId) {
      toyService.getById(toyId).then((toy) => {
        this.toyToEdit = toy
      })
    } else this.toyToEdit = toyService.getEmptyToy()
  },
  methods: {
    goBack() {
      this.$router.push('/toy')
    },
    saveToy() {
      this.$store.dispatch({ type: 'saveToy', toy: this.toyToEdit }).then(() => {
        this.$router.push('/toy')
      })
    },
  },
}
</script>
