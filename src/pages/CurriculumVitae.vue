<template>
  <div class="app-curriculum-vitae">

    <div class="container">

      <div class="row">
        <div class="col s12">

          <app-work-experience></app-work-experience>
          <div class="divider"></div>

          <app-educational-background></app-educational-background>
          <div class="divider"></div>

          <app-certificates></app-certificates>
          <div class="divider"></div>

          <app-additional-skills></app-additional-skills>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
import AppWorkExperience from '@/components/WorkExperience'
import AppEducationalBackground from '@/components/EducationalBackground'
import AppCertificates from '@/components/Certificates'
import AppAdditionalSkills from '@/components/AdditionalSkills'

export default {
  name: 'app-curriculum-vitea',
  head: {
    title: {
      inner: 'Curriculum Vitea'
    }
  },
  components: {
    AppWorkExperience,
    AppEducationalBackground,
    AppCertificates,
    AppAdditionalSkills
  }
}
</script>

<style scoped>
  .sub-header {
    margin-top: -20px;
  }
</style>
