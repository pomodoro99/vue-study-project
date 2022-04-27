<template>
  <div id="app">
    <nav>
      <!-- 
        아래의 router-link 라는 태그가 페이지를 이동시켜주는 역할을 한다.
        router-link의 to 속성의 값으로 URI path가 변경된다. 
      -->
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/new">New</router-link> <!-- /new라는 path로 이동하는 태그를 추가해주었다. -->
    </nav>
    <router-view/>
    <!--
      위의 router-view 태그의 위치에 path에 따라 보여질 화면이 생기게 된다.
      -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
