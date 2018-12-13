<template>
  <div id="app">
    <header-view></header-view>
    <div class="container-fluid">
      <div class="row">
        <nav-view></nav-view>
        <content-view></content-view>
      </div>
    </div>
  </div>
</template>

<script>
import Content from './components/Content.vue'
import Nav from './components/Nav.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    'content-view': Content,
    'nav-view': Nav,
    'header-view': Header
  }
}
</script>
