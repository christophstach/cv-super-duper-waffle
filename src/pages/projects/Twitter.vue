<template>
  <div class="app-projects-twitter">

    <div class="container">
      <h3>Twitter Datascience Project</h3>

      <section class="row">
        <div class="col s12 m5">
          <app-date-picker :value="fromDate" @input="setFromDate" placeholder="From"/>
        </div>
        <div class="col s12 m5">
          <app-date-picker :value="toDate" @input="setToDate" placeholder="To"/>
        </div>
        <div class="col s12 m2">
          <a class="waves-effect waves-light btn" @click="loadData"><i class="material-icons left">loop</i>Refresh</a>
        </div>

        <div class="col s12">
          <h4>Tweets per weekday</h4>

          <div v-if="tweetsPerWeekday.length === 0">
            <div key="preloader" class="center-align">
              <div class="preloader-wrapper big active">
                <div class="spinner-layer spinner-blue-only">
                  <div class="circle-clipper left">
                    <div class="circle"></div>
                  </div>
                  <div class="gap-patch">
                    <div class="circle"></div>
                  </div>
                  <div class="circle-clipper right">
                    <div class="circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="tweetsPerWeekday.length > 0">
            <app-tweets-per-weekday/>
          </div>
        </div>

        <div class="col s12">
          <h4>Tweets per hour</h4>


          <div v-if="tweetsPerHour.length === 0">
            <div key="preloader" class="center-align">
              <div class="preloader-wrapper big active">
                <div class="spinner-layer spinner-blue-only">
                  <div class="circle-clipper left">
                    <div class="circle"></div>
                  </div>
                  <div class="gap-patch">
                    <div class="circle"></div>
                  </div>
                  <div class="circle-clipper right">
                    <div class="circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="tweetsPerHour.length > 0">
            <app-tweets-per-hour/>
          </div>

        </div>
      </section>

      <section class="row">
        <div class="col s12">
          <h4>Tagcloud of most used hashtags</h4>

          <div v-if="mostUsedHashTags.length === 0">
            <div key="preloader" class="center-align">
              <div class="preloader-wrapper big active">
                <div class="spinner-layer spinner-blue-only">
                  <div class="circle-clipper left">
                    <div class="circle"></div>
                  </div>
                  <div class="gap-patch">
                    <div class="circle"></div>
                  </div>
                  <div class="circle-clipper right">
                    <div class="circle"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="mostUsedHashTags.length > 0">
              <div class="tagcloud" ref="tagcloud"></div>

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
                  <tr v-for="(hashTag, index) in mostUsedHashTags">
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
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
import $ from 'jquery'
import 'jqcloud2/dist/jqcloud'
import 'jqcloud2/dist/jqcloud.css'
import AppTweetsPerWeekday from '@/components/charts/TweetsPerWeekday'
import AppTweetsPerHour from '@/components/charts/TweetsPerHour'
import AppDatePicker from '@/components/input/DatePicker'

export default {
  name: 'app-projects-twitter',
  components: {
    AppTweetsPerWeekday,
    AppTweetsPerHour,
    AppDatePicker
  },
  head: {
    title: {
      inner: 'Projects - Twitter'
    }
  },
  mounted () {
    this.loadData()
  },
  destroyed () {
    this.clearMostUsedHashTags()
  },
  computed: {
    ...mapState(['projects']),
    ...mapGetters({
      mostUsedHashTags: 'twitterProjectMostUsedHashTags',
      tweetsPerHour: 'twitterProjectTweetsPerHour',
      tweetsPerWeekday: 'twitterProjectTweetsPerWeekday'
    }),
    ...mapGetters({
      fromDate: 'twitterProjectFromDate',
      toDate: 'twitterProjectToDate'
    })
  },
  methods: {
    ...mapActions(['fetchMostUsedHashTags', 'fetchTweetsPerHour', 'fetchTweetsPerWeekday']),
    ...mapMutations({
      clearMostUsedHashTags: 'CLEAR_MOST_USED_HASH_TAGS',
      clearTweetsPerHour: 'CLEAR_TWEETS_PER_HOUR',
      clearTweetsPerWeekday: 'CLEAR_TWEETS_PER_WEEKDAY',
      setFromDate: 'SET_TWITTER_PROJECT_FROM_DATE',
      setToDate: 'SET_TWITTER_PROJECT_TO_DATE'
    }),
    loadData () {
      this.clearMostUsedHashTags()
      this.fetchMostUsedHashTags({ fromDate: this.fromDate, toDate: this.toDate }).then(() => {
        $(this.$refs.tagcloud).jQCloud(this.mostUsedHashTags, {
          height: 350
        })
      })

      this.clearTweetsPerHour()
      this.fetchTweetsPerHour({ fromDate: this.fromDate, toDate: this.toDate }).then(() => {

      })

      this.clearTweetsPerWeekday()
      this.fetchTweetsPerWeekday({ fromDate: this.fromDate, toDate: this.toDate }).then(() => {

      })
    }
  }
}
</script>
