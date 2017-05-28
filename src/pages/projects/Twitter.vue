<template>
  <div class="app-projects-twitter">

    <div class="container">
      <h3>Twitter Datascience Project</h3>

      <section class="row">
        <div class="col s6">
          <h4>Tweets per weekday</h4>

          <app-tweets-per-weekday-chart/>
        </div>
      </section>

      <section class="row">
        <div class="col s12">


          <h4>Tagcloud of most used hashtags</h4>

          <div v-if="twitterHashTags.length === 0">
            <div key="preloader" class="center-align">
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
          </div>

          <div v-if="twitterHashTags.length > 0">
              <div class="tagcloud"></div>

              <div class="divider"></div>

              <table class="striped taglist">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Text</th>
                    <th>Occurrence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(hashTag, index) in twitterHashTags">
                    <td>{{ index + 1 }}</td>
                    <td>{{ hashTag.text }}</td>
                    <td>{{ hashTag.count }}</td>
                  </tr>
                </tbody>
              </table>

          </div>

        </div>
      </section>

    </div>

  </div>
</template>

<style scoped>

</style>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import jQuery from 'jquery'
import 'jqcloud2/dist/jqcloud'
import 'jqcloud2/dist/jqcloud.css'
import AppTweetsPerWeekdayChart from '@/components/charts/TweetsPerWeekdayChart'

export default {
  name: 'app-projects-twitter',
  components: {
    AppTweetsPerWeekdayChart
  },
  head: {
    title: {
      inner: 'Projects - Twitter'
    }
  },
  created () {
    this.fetchTwitterHashTags().then((value) => {
      jQuery('.tagcloud').jQCloud(this.twitterHashTags, {
        height: 350
      })
    })
  },
  destroyed () {
    this.clearTwitterHashTags()
  },
  computed: {
    ...mapState(['twitterHashTags'])
  },
  methods: {
    ...mapActions(['fetchTwitterHashTags']),
    ...mapMutations({
      clearTwitterHashTags: 'CLEAR_TWITTER_HASHTAGS'
    })
  }
}
</script>
