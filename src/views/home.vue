<template>
  <section>
    <h3>Home Sweet Home</h3>
    <button>Click Me</button>
  </section>
</template>

<script>

import appHeader from "../components/app-header.vue"
export default {
  name: 'home',
  created() {
    
  },
  methods: {
    clicked() {
      alert('I got clicked!')
    },
  },
  components: {
    appHeader,
  },
}
</script>
