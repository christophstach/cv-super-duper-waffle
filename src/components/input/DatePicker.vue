<template>
  <div class="app-input-date-picker">
    <input
      type="text"
      ref="input"
      class="datepicker"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'app-input-date-picker',
  props: {
    value: {
      type: Date,
      required: true
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  mounted () {
    let date = this.value

    $(this.$refs.input).pickadate({
      selectMonths: false,
      selectYears: false,
      onStart () {
        this.set('select', [date.getFullYear(), date.getMonth() + 1, date.getDate()])
      },
      onSet: (context) => {
        let date = new Date(context.select)

        this.$emit('input', date)
      }
    })
  }
}
</script>


<style scoped>
input[type=date]::-webkit-inner-spin-button,
input[type=date]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
</style>
