<template>
  <div class="app">
<Header/>
<router-view></router-view>
</div>
</template>
<script>
import Header from "./components/Header";
export default {
  name:'app',
  components:{
    Header
  }
}
</script>
