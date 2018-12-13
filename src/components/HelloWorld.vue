<template>
  <div>
    <navheader></navheader>
    <content-view></content-view>
  </div>
</template>

<script>

import Nav from './Nav.vue'
import Content from './Content.vue'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'navheader': Nav,
    'content-view': Content
  }
}
</script>
