<template>
  <div id="app">
    <h2>Top Crypto Currency List</h2>
    
    <table class="box">
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Symbol</th>
          <th>Price</th>
          <th>Price Change</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(items, index) in coins.slice(this.startPoint,this.startPoint+this.currentLength)" :key="index">
          <img :src="items.iconUrl" class="img-fluid"  width="30"/>
          <td>{{ items.name }}</td>
          <td>{{ items.symbol }}</td>
          <td>{{ items.price }}</td>
          <td>{{ items.change }}%</td>
        </tr>
      </tbody>
    </table>
    <p>
      <button id="btn01" @click="nextPage">Next</button>
      <button id="btn01" @click="prevPage">Previous</button>
    </p>
    <h4>Current Page: {{this.currentPage}}</h4>
      <li id="paginate">Pagination</li>
    <select  v-model="currentLength" id="deptList">
        <option v-for="dept in options" v-bind:value="dept" :key="dept" >
            {{dept}} 
        </option>
    </select>  
     
  </div>
</template> 

<script>

import { mapState } from "vuex";

export default {
  name: "app",
  data(){
    return{
      selected:'',
    options:[10, 25,50,100],
    startPoint:0,
    currentLength:10,
    pageSize:3,
    currentPage:1}
  },

  mounted() {
    this.getResults();
    // this.currentLength = this.coins.length
    // this.$store.dispatch("loadPosts"); //.state.test
  },
  computed: 
  {
    ...mapState(["coins"]),
    
  }
  ,
  methods: {
    getResults(page = 1) {
      this.$store.dispatch("loadPosts"); //.state.test

    },
    nextPage: function () {
      if (this.currentPage * this.pageSize < this.currentLength)
      {  console.log("i am be")
        this.currentPage++;
        this.startPoint += this.currentLength
         this.getResults();}
    },
    prevPage: function () {
      if (this.currentPage > 1) {this.currentPage--; this.startPoint -= this.currentLength;
       this.getResults();}
    },
    
  },
 
};
</script>



<style>
@import './assets/style.css';
</style>



