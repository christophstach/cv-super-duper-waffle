<template>
  <div class="app-educational-background">
    <h3>Educational background</h3>

    <div class="row" v-for="(e, index) in educationalBackground">
      <div class="col s12 m3">
        <strong>
          <span>{{ e.startDate | date('%Y/%m') }}</span>
          <span v-if="e.endDate"> - </span>
          <span v-if="typeof(e.endDate) === 'string'">{{ e.endDate }}</span>
          <span v-if="e.endDate instanceof Date">{{ e.endDate | date('%Y/%m') }}</span>
        </strong>
      </div>
      <div class="col s12 m9">
        <span>{{ e.name }}, {{ e.location }}</span><span v-if="e.programm">: </span>
        <span v-if="e.programm">{{ e.programm }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app-educational-background',
  computed: {
    ...mapState(['educationalBackground'])
  }
}
</script>


<style scoped>

</style>
