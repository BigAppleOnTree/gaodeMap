<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-link to='/npm'>{{this.npMap.name}}</router-link>
  </div>
</template>

<script>
import defaultMap from '@/router'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      npMap: ''
    }
  },
  created () {
    this.npMap = defaultMap.options.routes[1]
    console.log(this.npMap)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
