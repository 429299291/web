<template>
  <div class="lititong">

  </div>
</template>
<script>
export default {
  name: 'v_header',
  data () {
    return {
      msg: 'header',
      current: 0,
    }
  },
  methods: {
  },
  mounted(){
function greet(name) {
 return `Hello, ${name}!`;
}

greet('Cristina'); // => 'Hello, Cristina!'

const persons = ['Cristina', 'Ana'];

const messages = persons.map(greet);
console.log(messages)
// => ['Hello, Cristina!', 'Hello, Ana!'] 

  },
  components: {
  },
}
</script>

<style scoped>

</style>