<template>
  <div class="app-home">

    <div class="row">
      <div class="col s12">

        <app-work-experience/>
        <div class="divider"></div>

        <app-educational-background/>
        <div class="divider"></div>

        <app-certificates/>
        <div class="divider"></div>

        <app-additional-skills/>

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
