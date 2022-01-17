<template>
<div>
<h1>{{quote.author}}</h1>
  <p>{{quote.content}}</p>
</div>
</template>

<script>
  import { useRoute } from "vue-router";
  import { useStore } from "vuex";
  import { ref, onMounted } from "vue";

  export default{
    setup(){
      const route = useRoute();
      const store = useStore();
      const quote = ref({});
      onMounted(()=>{
        setTimeout(()=>{
          quote.value = store.getters.GetSpecificQuote(route.params.id)
        }, 1000);
      });
      return{
        quote
      }
    }
  }
</script>
