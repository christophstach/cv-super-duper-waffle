<template>
  <div class="app-github">

    <div class="container">

      <div class="row">
        <div class="col s12">

          <h3>My Projects on GitHub</h3>

          <p>
            Here I am showing some projects I worked on recently.
            These projects can give you an impression of my skills.
            The reason for the weird names is, that I'm using a random project generator to make project names
            more distinct and fun &#x1F609;.
          </p>

          <div class="divider"></div>
        </div>
      </div>

      <div class="row">
        <div class="col s12">

          <div key="preloader" class="center-align" v-if="repos.length === 0">
            <div class="preloader-wrapper big active">
              <div class="spinner-layer spinner-blue-only">
                <div class="circle-clipper left">
                  <div class="circle"></div>
                </div><div class="gap-patch">
                  <div class="circle"></div>
                </div><div class="circle-clipper right">
                  <div class="circle"></div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="repos.length > 0">
            <table class="striped">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Last updated</th>
                  <th>Link</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(repo, index) in repos">
                  <td>{{ repo.name }}</td>
                  <td>{{ repo.description }}</td>
                  <td>{{ repo.updated_at | date('%Y/%m/%d') }} </td>
                  <td>
                    <a :href="repo.html_url" title="See code"><i class="material-icons">code</i></a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </div>
      </div>

    </div>

  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'app-github',
  head: {
    title: {
      inner: 'GitHub'
    }
  },
  created () {
    this.fetchRepos()
  },
  destroyed () {
    this.clearRepos()
  },
  computed: {
    ...mapState(['repos'])
  },
  methods: {
    ...mapActions(['fetchRepos']),
    ...mapMutations({
      clearRepos: 'CLEAR_REPOS'
    })
  }
}
</script>
