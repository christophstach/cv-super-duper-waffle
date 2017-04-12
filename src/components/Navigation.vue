<template>
  <div class="navbar-fixed app-navigation">
    <nav class="blue darken-3 navbar-fixed">
      <div class="nav-wrapper">
        <a href="#" data-activates="mobile-nav" class="button-collapse"><i class="material-icons">menu</i></a>

        <div class="container">
          <router-link to="/" class="brand-logo">Christoph Stach</router-link>

          <ul class="right hide-on-med-and-down">
            <router-link tag="li" active-class="active" to="/" exact>
              <a>Curriculum Vitae</a>
            </router-link>
            <router-link tag="li" active-class="active" to="/projects" exact>
              <a>Projects</a>
            </router-link>
          </ul>

        </div>

        <ul class="side-nav" id="mobile-nav">
          <router-link tag="li" active-class="active" to="/" exact>
            <a>Curriculum Vitae</a>
          </router-link>
          <router-link tag="li" active-class="active" to="/projects" exact>
            <a>Projects</a>
          </router-link>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'app-navigation',
  created () {
    $(document).ready(() => {
      $('.button-collapse').sideNav()
    })
  }
}
</script>


<style>
  #sidenav-overlay {
    z-index: 1;
  }
</style>
