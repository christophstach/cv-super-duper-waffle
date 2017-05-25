<template>
  <div class="app-projects">

    <div class="container">

      <div class="row">
        <div class="col s12">

          <h3>My Projects</h3>

        </div>
      </div>


      <div class="row">
        <div class="col s12 m4 l3">

          <div class="card">
              <div class="card-image">
                <img src="../assets/Twitter_Logo_White_On_Blue.png">

              </div>
              <div class="card-content">
                <span class="card-title">Data science with Twitter</span>
                <p>
                  A project we are currently doing at university.
                  It shows different analyses about Twitter.
                  <br>
                  <br>
                  <strong><em>Currently displaying fake data</em></strong>
                </p>
              </div>
              <div class="card-action">
                <router-link to="/projects/twitter/">GoTo</router-link>
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

<script>
export default {
  name: 'app-projects',
  head: {
    title: {
      inner: 'Projects'
    }
  }
}
</script>
