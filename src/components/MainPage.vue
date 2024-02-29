<template>
    <div >
        <h1>ICT Globe</h1>
        <v-card v-for="post in posts" :key="post.id" @click="navigateToPost(post.id)" >
          <p>title{{post.title}}</p>
          <p>body{{post.body}}</p>
          <p>userId{{post.userId}}</p>
        </v-card>
 
    </div>
  </template>
  
  <script>
import axios from 'axios';
  export default {
    name: 'MainPage',
   
    data() {
      return {
        posts:[],
      };
    },

    mounted(){
      this.fatchData();
    },

    methods: {

      // fatchData
      fatchData(){
      axios.get('https://jsonplaceholder.typicode.com/posts').
      then(response => {
        // this.users = response.data;
        console.log(response.data)
        this.posts = response.data
      }).catch(error => {
        console.log('you got error', error);
      })},

      // navigateToPost
      navigateToPost(postId) {
      this.$router.push({ name: 'HomeView', params: { id: postId } });
    }
    },
  }
  </script>
  
  <style scoped>
 
  </style>
  