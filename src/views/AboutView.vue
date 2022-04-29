<template>
  <div>
    <!-- 
      name(必传)：应用名称
      url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
      baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/about`
     -->
    <micro-app
      name="app1"
      url="http://localhost:3000/"
      baseroute="/about"
    ></micro-app>
  </div>
</template>
