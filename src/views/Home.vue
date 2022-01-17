<template>
  <div>

        <div @click="$store.commit('GetRandomQuote')">
            Get Random Vue Quote
        </div>
        <p v-if="typeof $store.state.quote._id != 'undefined'">
        <span>{{$store.state.quote.content}}</span>
        <span>{{$store.state.quote.auhtor}}</span>
        </p>
      
  </div>
</template>

<script>

import { createStore } from "vuex";
export default createStore({
  state:{
    quote: {},
    quotes: []
  },
  mutations:{
  GetRandomQuote(state){
    fetch("http://localhost:3000/random")
    .then(res =>res.json())
    .then(data=>{
      if(state.quote._id != data._id){
        state.quote = data;
      }
      else{
        this.commit('GetRandomQuote');
      }
    });
    },
    GetAllQuotes(state){
      fetch("http://localhost:3000/vuetext")
      .then(res =>res.json())
      .then(data=>{
        state.quotes = data;
      });
      }
  },
  getters:{
    GetSpecificQuote: state=> id=> {
    return state.quotes.filter(vueGet => vueGet._id == id)[0]
    }
  }

  })
</script>
