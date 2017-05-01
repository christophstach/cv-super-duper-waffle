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
        id: 'meta-application-name',
        name: 'application-name',
        content: 'Website of Christoph Stach'
      },
      {
        id: 'meta-description',
        name: 'description',
        content: 'I\'m a full stack web engineer who is studying at the university of applied sciences HTW Berlin. My focus is on developing single page frontend applications.'
      }
    ],
    script: [
      {
        type: 'application/ld+json',
        inner: JSON.stringify(
          {
            '@Context': 'http://schema.org',
            '@Type': 'Person',
            name: 'Christoph Stach',
            jobTitle: 'Frontend Software Engineer',
            height: '185 cm',
            birthPlace: 'Düsseldorf, Germany',
            gender: 'male',
            nationality: 'German',
            birthDate: new Date(1988, 2, 15),
            url: 'http://christophstach.github.io',
            sameAs: [
              'https://github.com/christophstach',
              'https://www.xing.com/profile/Christoph_Stach',
              'https://de.linkedin.com/in/christoph-stach-7586b958'
            ]
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
