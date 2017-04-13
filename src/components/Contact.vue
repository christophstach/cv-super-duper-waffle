<template>
  <div class="app-contact">

    <form @submit="submit($event)">

      <div class="row">
        <div class="s12">
          <h3>Contact</h3>

          <div class="row">
            <div class="input-field col s12 m6">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                class="validate"
                v-model.trim="name"
                v-bind:class="{ invalid: hasError('name') }"
                v-validate="{ rules: { required: true } }">

              <div class="error" v-show="hasError('name')">The Name field is required.</div>
            </div>

            <div class="input-field col s12 m6">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-Mail"
                class="validate"
                v-model.trim="email"
                v-bind:class="{ invalid: hasError('email') }"
                v-validate="{ rules: { required: true, email: true } }">

              <div class="error" v-show="hasError('email')">The E-Mail field is required and needs to be a valid E-Mail address.</div>
            </div>

            <div class="input-field col s12">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Subject"
                class="validate"
                v-model.trim="subject"
                v-bind:class="{ invalid: hasError('subject') }"
                v-validate="{ rules: { required: true } }">

              <div class="error" v-show="hasError('subject')">The Subjectfield is required.</div>
            </div>

            <div class="input-field col s12">
              <textarea
                id="message"
                name="message"
                placeholder="Message"
                class="materialize-textarea validate"
                v-model.trim="message"
                v-bind:class="{ invalid: hasError('message') }"
                v-validate="{ rules: { required: true } }"></textarea>

              <div class="error textarea" v-show="hasError('message')">The Message field is required.</div>
            </div>

          </div>

          <div class="row">
            <div class="col s12">
              <button v-bind:disabled="!formValid" class="btn waves-effect waves-light" type="submit" name="action">Submit
                <i class="material-icons right">send</i>
              </button>
            </div>
          </div>

        </div>
      </div>

    </form>

  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'app-contact',
  created () {

  },
  data () {
    return {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  },
  computed: {
    formValid () {
      return (
        this.errors.errors.length === 0 &&
        this.name &&
        this.email &&
        this.subject &&
        this.message
      )
    },
    ...mapState([])
  },
  methods: {
    submit (event) {
      event.preventDefault()

      if (this.formValid) {
        this.sendEmail({
          to: 'christoph.stach@gmail.com',
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message
        })
      }
    },
    hasError (field) {
      return this.errors.errors.filter((e) => e.field === field).length > 0
    },
    ...mapActions(['sendEmail'])
  }
}
</script>

<style scoped>
  .error {
    font-size: .8rem;
    margin-top: -15px;
    color: #F44336;
  }

  .error.textarea {
    margin-top: -20px;
  }
</style>
