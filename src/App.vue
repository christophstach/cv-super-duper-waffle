<template>
  <div id="app">
    <app-material-layout></app-material-layout>
  </div>
</template>

<script>
import AppMaterialLayout from '@/layouts/material/Layout'

export default {
  name: 'app',
  head: {
    meta: [
      {
        id: 'app-name',
        name: 'application-name',
        content: 'Website of Christoph Stach'
      },
      {
        id: 'desc',
        name: 'description',
        content: 'I\'m a full stack web engineer who is studying at the university of applied sciences HTW Berlin. My focus is on developing single page frontend applications.'
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        inner: JSON.stringify(
          {
            '@Context': 'http://schema.org'
          }
        )
      }
    ]
  },
  components: {
    AppMaterialLayout
  }
}
</script>
