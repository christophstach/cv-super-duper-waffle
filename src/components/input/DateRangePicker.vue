<template>
  <div class="app-input-date-range-picker">
    <input
      type="text"
      class="daterange"
      placeholder="DateRange"
    >
    <pre>{{ value }}</pre>
  </div>
</template>

<script>
export default {
  name: 'app-input-date-range-picker',
  props: {
    value: {
      type: DateRange,
      required: true
    }
  },
  components: {

  },
  mounted () {

  }
}

class DateRange {
  constructor (from, to) {
    this.from = from
    this.to = to
  }
}
</script>


<style scoped>
input[type=date]::-webkit-inner-spin-button,
input[type=date]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
</style>
