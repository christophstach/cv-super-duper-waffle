<template>
  <div class="app-certificates">
    <h3>Certificates</h3>

    <div class="row" v-for="c in certificates" :key="c">
      <div class="col s12 m3">
        <strong>{{ c.date | date('YYYY') }}</strong>
      </div>
      <div class="col s12 m9">
        <strong>{{ c.name }}:</strong>
        <span>{{ c.description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app-certificates',
  computed: {
    ...mapState(['certificates'])
  }
}
</script>
