<template>
<div>
  <div id="nav" >
    <router-link to="/">Home</router-link> |
    <router-link to="/Info">Info</router-link>
  </div>
  <router-view/>
</div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: coral;
  
}

#nav {
  padding: 30px;
  background-color: tan;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color:red;
}
</style>
