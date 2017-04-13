<template>
  <div class="navbar-fixed app-navigation">
    <nav class="blue darken-3 navbar-fixed">
      <div class="nav-wrapper">
        <a href="#" data-activates="mobile-nav" class="button-collapse"><i class="material-icons">menu</i></a>

        <div class="container">
          <router-link to="/" class="brand-logo">
            <i class="fa fa-code nav-logo" aria-hidden="true"></i>
            Christoph Stach
          </router-link>

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
          <li class="side-nav-logo-wrapper">
            <div class="side-nav-logo blue-text text-darken-4 center-align" to="/">
              <i class="fa fa-code" aria-hidden="true"></i>
            </div>
          </li>

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
      $('.button-collapse').sideNav({
        closeOnClick: true
      })
    })
  }
}
</script>


<style>
  #sidenav-overlay {
    z-index: 1;
  }

  .brand-logo > .nav-logo {
    float: none;
    margin: 0;
  }

  .side-nav-logo-wrapper {
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .side-nav-logo {
      font-size: 4em;
  }
</style>
