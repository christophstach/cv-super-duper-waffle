<template>
  <div id="app-material-layout">

    <header>
      <app-navigation/>

      <div class="row blue accent-5">
        <div class="col offset-s4 s4 m2 offset-m5 profile-picture-wrapper">
          <img src="../../assets/me.jpg" alt="Profile" class="circle responsive-img profile-picture">
        </div>
      </div>
    </header>

    <main>
      <div class="container">
        <router-view/>
      </div>
    </main>

    <app-footer/>

  </div>
</template>

<script>
import 'materialize-css/dist/css/materialize.css'
import 'materialize-css/dist/js/materialize.js'
import 'font-awesome/css/font-awesome.css'
import 'animate.css'

import AppNavigation from '@/layouts/material/Navigation'
import AppFooter from '@/layouts/material/Footer'

export default {
  name: 'app-material-layout',
  components: {
    AppNavigation,
    AppFooter
  }
}
</script>

<style>
  .profile-picture {
    display: block;
    margin-top: 15px;
    margin-bottom: 15px;
  }

  [v-cloak] {
    display: none;
  }

  #app-material-layout {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  main {
    flex: 1 0 auto;
  }
</style>
