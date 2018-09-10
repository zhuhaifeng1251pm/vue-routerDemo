<template>
    <div class="main">
        <nav>
     <h3>热门文章</h3>
     <ul>
         <li><router-link to='/' exact-active-class="active1" >推荐</router-link></li>
         <li><router-link :to="{name:'welcome',params:{tab:'frontend'}}" exact-active-class="active1">前端</router-link></li>
         <li><router-link to='/welcome/backEnd' exact-active-class="active1">后端</router-link></li>
     </ul>   
     </nav>
     <router-view></router-view>
    </div>
</template>

<style scoped>
.main{
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}
.main nav{
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 40px;
        background-color: green;

    
}
.main nav ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;

}
.main nav ul li{
    margin-right: 20px;
}
.main nav ul li a{
    color:#fff;
}
.main nav ul li a.active1{
    color:red;
}
</style>


