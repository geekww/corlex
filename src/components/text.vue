<template>
  <!--变量绑定-->
  <h2>{{title}}</h2>
  <!--双向绑定-->
  <input v-model="name">
  <h1>{{name}}</h1>
  <!--事件绑定-->
  <button v-on:click="clickMe()">事件绑定</button>
</template>

<script>
  export default {
    name: 'model',
    data: {
      title: 'hello world',
      name: 'canfoo'
    },
    methods: {
      clickMe: function () {
        this.title = 'hello world';
      }
    }
  }
</script>
