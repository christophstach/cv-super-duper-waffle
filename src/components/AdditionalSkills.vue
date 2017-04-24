<template>
  <div class="app-additional-skills">
    <h3>Additional skills</h3>

    <div class="row" v-for="(a, index) in additionalSkills">
      <div class="col s12 m3">
        <strong>{{ a.category }}</strong>
      </div>
      <div class="col s12 m9">
        <ul v-if="a.items && a.items.length">
          <li v-for="(item, index) in a.items">{{ item.name }} ({{ item.level }})</li>
        </ul>

        <div v-for="(sub, index) in a.subCategories">
          <div class="section sub-category">
            <strong>{{ sub.category }}</strong>
            <br>

            <span v-for="(skill, index) in sub.items">
              {{ skill }}<span v-if="index < sub.items.length - 1">, </span>
            </span>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'app-additional-skills',
  computed: {
    ...mapState(['additionalSkills'])
  }
}
</script>


<style scoped>
  .sub-category {
    padding-top: 0;
  }

  ul {
    margin: 0;
  }
</style>
