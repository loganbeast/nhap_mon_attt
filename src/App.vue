<template>
  <div id="app">
    <footer class="text-center">
      <p class="font-weight-bold"><code class="text-danger">Nguyen Thanh Son - 18021087 - INT3213_2</code></p>
      <p class="font-weight-bold"><code class="text-danger">Nhap mon an toan thong tin - TS.Le Phe Do</code></p>
    </footer>
    <div class="header"> 
      <b-dropdown id="dropdown-1" text="He mat RSA">
        <b-dropdown-item>
          <router-link
              to="/RSAModuloCaculate"
              style="margin:8px"
          >Tinh toan y = x ^ e mod n</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link
              to="/RSASign"
              style="margin:8px"
          >Ky van ban RSA</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link
              to="/RSASignCheck"
              style="margin:8px"
          >Kiem tra ky RSA</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link
              to="/RSASystem"
              style="margin:8px"
          >RSA</router-link>
        </b-dropdown-item>
      </b-dropdown>
      <b-dropdown id="dropdown-1" text="He mat Elgamal">
        <b-dropdown-item>
          <router-link
              to="/ElgamalEncrypt"
              style="margin:8px"
          >Ma hoa Elgamal</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link
              to="/ElgamalSign"
              style="margin:8px"
          >Ky van ban Elgamal</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link
              to="/ElgamalSignCheck"
              style="margin:8px"
          >Kiem tra ky Elgamal</router-link>
        </b-dropdown-item>
        <b-dropdown-item>
          <router-link
              to="/ElgamalSystem"
              style="margin:8px"
          >Elgamal</router-link>
        </b-dropdown-item>
      </b-dropdown>
      <b-dropdown id="dropdown-1" text="He mat tren duong cong Eliptic">
        <b-dropdown-item>
          <router-link
              to="/Elliptic"
              style="margin:8px"
          >Elliptic</router-link>
        </b-dropdown-item>
      </b-dropdown>
    </div> 
    <div class="content">
      <router-view></router-view>
    </div>
    
  </div>
  
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.header {
  text-align: center;
}
.group_dropdown {
  margin: 0px !important;
}
.dropdown-toggle::after {
}
a {
  text-decoration: none;
  
}
#app {
  width: 100%;
}

</style>
