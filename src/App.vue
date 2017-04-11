<template>
  <div id="app">

    <header>
      <app-navigation/>

      <div class="section row blue accent-5">
        <div class="col offset-s4 s4 m2 offset-m5">
          <img src="./assets/me.jpg" alt="" class="circle responsive-img">
        </div>
      </div>
    </header>

    <main>
      <div class="section">
        <div class="container">
          <router-view/>
        </div>
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

import AppNavigation from '@/components/Navigation'
import AppFooter from '@/components/Footer'
import AppWorkExperience from '@/components/WorkExperience'
import AppEducationalBackground from '@/components/EducationalBackground'
import AppCertificates from '@/components/Certificates'
import AppAdditionalSkills from '@/components/AdditionalSkills'

export default {
  name: 'app',
  components: {
    AppNavigation,
    AppFooter,
    AppWorkExperience,
    AppEducationalBackground,
    AppCertificates,
    AppAdditionalSkills
  }
}
</script>

<style>

</style>
