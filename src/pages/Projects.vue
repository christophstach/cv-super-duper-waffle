<template>
  <div class="app-projects">

    <div class="container">

      <div class="row">
        <div class="col s12">

          <h3>My Projects</h3>

        </div>
      </div>


      <div class="row">
        <div class="col s12 m4 l4 xl3" v-for="(project, index) in projects">

          <div class="card">
              <div class="card-image">
                <img :src="'/img/projects/' + project.image">

              </div>
              <div class="card-content">
                <span class="card-title">{{ project.title }}</span>
                <p>
                  {{ project.description }}
                </p>
                <div v-if="project.hint" class="hint">
                  <small><strong><em>{{ project.hint }}</em></strong></small>
                </div>
              </div>
              <div class="card-action">
                <router-link :to="project.link">GoTo</router-link>
              </div>
            </div>
          </div>

        </div>
        <div class="col s12 m3">

        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
  .hint {
    padding-top: 15px;
  }
</style>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app-projects',
  head: {
    title: {
      inner: 'Projects'
    }
  },
  computed: {
    ...mapState(['projects'])
  }
}
</script>
