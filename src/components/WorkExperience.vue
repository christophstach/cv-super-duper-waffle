<template>
  <div class="app-work-experience">
    <h3>Work experience</h3>

    <div class="row" v-for="w in workExperience">
      <div class="col s12 m3">
        <strong>
          <span>{{ w.startDate | date('%Y/%m') }}</span>
          <span v-if="w.endDate"> - </span>
          <span v-if="typeof(w.endDate) === 'string'">{{ w.endDate }}</span>
          <span v-if="w.endDate instanceof Date">{{ w.endDate | date('%Y/%m') }}</span>
        </strong>
      </div>
      <div class="col s12 m9">
        <strong>{{ w.employer }}, {{ w.location }}</strong>
        <ul class="browser-default" v-if="w.responsibilities && w.responsibilities.length > 0">
          <li v-for="responsibility in w.responsibilities">{{ responsibility }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app-work-experience',
  computed: {
    ...mapState(['workExperience'])
  }
}
</script>


<style scoped>

</style>
