<template>
  <div>
    <div>
      <h1> All Vue Quotes </h1>
      <div>
        <router-link v-for="(quote, i) in $store.state.quote" :key="quote._id">
          <p :key="i">
            <span>{{quote.content}}</span>
            <span>{{quote.author}}</span>
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>
