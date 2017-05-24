<template>
  <div class="app-projects-twitter">

    <div class="container">

      <div class="row">
        <div class="col s12">

          <h3>Twitter Datascience Project</h3>
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
      </div>

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
// import cloud from 'd3-cloud'

export default {
  name: 'app-projects-twitter',
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
      /*
      let fill = (v) => v
      let layout = cloud()
        .size([500, 500])
        .words(this.twitterHashTags)
        .padding(5)
        .rotate(() => ~~(Math.random() * 180))
        .font('Impact')
        .fontSize((d) => d.size)
        .on('end', (words) => {
          d3.select('#wordcloud')
            .append('svg')
            .attr('width', layout.size()[0])
            .attr('height', layout.size()[1])
            .append('g')
            .attr('transform', 'translate(' + layout.size()[0] / 2 + ',' + layout.size()[1] / 2 + ')')
            .selectAll('text')
            .data(words)
            .enter().append('text')
            .style('font-size', (d) => d.size + 'px')
            .style('font-family', 'Impact')
            .style('fill', (d, i) => fill(i))
            .attr('text-anchor', 'middle')
            .attr('transform', (d) => {
              return 'translate(' + [d.x, d.y] + ')rotate(' + d.rotate + ')'
            })
            .text((d) => d.text)
        })

      layout.start()
      */
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
