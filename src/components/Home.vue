<template>
  <div class="app-home">
    <app-work-experience/>
    <div class="divider"></div>

    <app-educational-background/>
    <div class="divider"></div>

    <app-certificates/>
    <div class="divider"></div>

    <app-additional-skills/>
  </div>
</template>

<script>
import AppWorkExperience from './WorkExperience'
import AppEducationalBackground from './EducationalBackground'
import AppCertificates from './Certificates'
import AppAdditionalSkills from './AdditionalSkills'

export default {
  name: 'app-home',
  components: {
    AppWorkExperience,
    AppEducationalBackground,
    AppCertificates,
    AppAdditionalSkills
  }
}
</script>


<style scoped>

</style>
