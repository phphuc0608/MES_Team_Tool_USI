<template>
  <nav class="p-3 d-flex align-items-center navbar navbar-expand-lg" id="navbar_container">
    <img :src="require('@/assets/logo.png')" class="navbar-brand" alt="Logo">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link mx-1" to="/">Wip Query</router-link> 
        <router-link class="nav-link mx-1" to="/union-all">Union All</router-link>
      </div>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}
#navbar_container{
  box-shadow: 0 4px 8px 0 rgba(77, 76, 76, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-image: url('./assets/bg.jfif');
  background-position: center;
  background-repeat: no-repeat;
}
#navbar_container .nav-link{
    text-decoration: none;
    font-size: 20px!important;
    color: #2b52c9!important;   
 }
 #navbar_container .nav-link:hover{
    color: #122459!important;
    background-color: #DDDDDD;
    border-radius: 10px;
 }
.navbar-nav a.router-link-exact-active{
  color: #122459!important;
  background-color: #DDDDDD;
  border-radius: 10px;
}
</style>
