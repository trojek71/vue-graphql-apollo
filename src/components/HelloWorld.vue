<template>
  <div class="hello">
    <div v-for="post in posts" :key="post.id">{{post.title}}</div>
  </div>
</template>

<script>
import { POSTS } from "../graphql/graphql.js";
export default {
  name: 'HelloWorld',
  data(){
    return {
      id:'',
      title:''
    }
  },
  props: {
    msg: String
  },
  
  
    apollo:{
     posts:{
       query: POSTS
     }
  
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
