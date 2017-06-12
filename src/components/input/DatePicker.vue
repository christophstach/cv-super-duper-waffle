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
    min: {
      type: Date
    },
    max: {
      type: Date
    },
    placeholder: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      picker: null
    }
  },
  watch: {
    min (value) {
      if (this.picker) {
        this.picker.set('min', value)
        this.picker.render()
      }
    },
    max (value) {
      if (this.picker) {
        this.picker.set('max', value)
        this.picker.render()
      }
    }
  },
  mounted () {
    let vm = this
    let date = this.value

    let $input = $(this.$refs.input).pickadate({
      closeOnSelect: true,
      editable: false,
      selectMonths: false,
      selectYears: false,
      format: 'dd.mm.yyyy',
      clear: false,
      onStart () {
        this.set('select', date)
      },
      onSet (context) {
        if (context.select) {
          let date = new Date(context.select)
          vm.$emit('input', date)
        }
      }
    })

    this.picker = $input.pickadate('picker')
  }
}
</script>


<style scoped>
input[type=date]::-webkit-inner-spin-button,
input[type=date]::-webkit-outer-spin-button {
  -webkit-appearance: none;
}
</style>
