<template>
  <div class="app-educational-background">
    <h3>Educational background</h3>

    <div class="row" v-for="e in educationalBackground" :key="e">
      <div class="col s12 m3">
        <strong>
          <span>{{ e.startDate | date('MMM YYYY') }}</span>
          <span v-if="e.endDate"> - </span>
          <span v-if="typeof(e.endDate) === 'string'">{{ e.endDate }}</span>
          <span v-if="e.endDate instanceof Date">{{ e.endDate | date('MMM YYYY') }}</span>
        </strong>
      </div>
      <div class="col s12 m9">
        <span>{{ e.name }}, {{ e.location }}</span><span v-if="e.program">: </span>
        <span v-if="e.program">{{ e.program }}</span>
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
