<template>
  <div id="app">

    <header>
      <app-navigation/>

      <div class="row blue accent-5">
        <div class="col offset-s4 s4 m2 offset-m5 profile-picture-wrapper">
          <img src="./assets/me.jpg" alt="Profile" class="circle responsive-img profile-picture">
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

<style scoped>
  .profile-picture {
    display: block;
    margin-top: 15px;
    margin-bottom: 15px;
  }
</style>
