<template>
  <section class="toy-filter flex col">
    <input
      v-focus
      v-model="filterBy.name"
      @input="setFilter"
      type="text"
      class="form-input"
      placeholder="Search toy name..."
    />
    <label
      >In Stock?<input
        type="checkbox"
        @input="setFilter"
        v-model="filterBy.inStock"
        class="form-input"
    /></label>

    <label>
      Labels:
      <select @change="setFilter" multiple v-model="filterBy.labels">
        <option value="On wheels">On wheels</option>
        <option value="Box game">Box game</option>
        <option value="Art">Art</option>
        <option value="Baby">Baby</option>
        <option value="Doll">Doll</option>
        <option value="Puzzle">Puzzle</option>
        <option value="Outdoor">Outdoor</option>
      </select>
      <label>
        Sort By:
        <select @change="setFilter" v-model="filterBy.sortBy">
          <option value="time">Time</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </label>
      </label>
  </section>
</template>

<script>
export default {
  name: "toy-filter",
  data() {
    return {
      filterBy: {
        name: '',
        inStock: false,
        labels: [],
        sortBy: '',
      },
    };
  },
  methods: {
    setFilter() {
      this.$emit('setFilter', this.filterBy);
      // this.$emit('setFilter', JSON.parse(JSON.stringify(this.filterBy)));
    },
  },
};
</script>
