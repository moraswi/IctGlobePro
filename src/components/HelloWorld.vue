<template>
  <div >
      <p>title{{post.title}}</p>
      <p>body{{post.body}}</p>
      <p>userId{{post.userId}}</p>

  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',

  data() {
      return {
        post:[],
      };
    },

  props: {
    msg: String
  },

  mounted(){
        const  id = this.$route.params.id;
      this.fatchData(id);
    },
    methods: {
      fatchData(postId){
           
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`).
            then(response => {
              // this.users = response.data;
              console.log(response.data)
              this.post = response.data
              }).catch(error => {
              console.log('you got error', error);
            })
        }
    },
}
</script>

<style scoped>

</style>
