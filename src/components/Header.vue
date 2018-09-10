<template>
    <header>
        <router-link to='/' exact-active-class="active" :class="{active:this.$route.path.includes('welcome')}" >首页</router-link>
        <router-link :to="{name:'pins'}" exact-active-class="active">沸点</router-link>
        <router-link to='/events' exact-active-class="active">活动</router-link>
        <router-link to='/user' exact-active-class="active">用户</router-link>
    </header>
</template>


<script>
export default {
    data:()=>({
        show:'home'
    }),
    methods:{
        handleChange(str){
            this.show=str
        }
    }
};
</script>

<style>
header {
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-around;
  line-height: 50px;
  background-color: #1992ff;
}
.active{
    color:aqua;
}
</style>
