
require('import-export')

const moment = require('moment')
const fs = require('fs')
const path = require('path')
const pdf = require('html-pdf');

const workExperience = require(path.join(__dirname, '../src/store/init/workExperience.js'))
const educationalBackground = require(path.join(__dirname, '../src/store/init/educationalBackground.js'))
const certificates = require(path.join(__dirname, '../src/store/init/certificates.js'))
const additionalSkills = require(path.join(__dirname, '../src/store/init/additionalSkills.js'))



let workExperienceHtml = workExperience.map((w) => {
  let date = moment(w.startDate).format('YYYY/MM')
  date += w.endDate ? ' - ' : ''
  date += w.endDate instanceof Date ? moment(w.endDate).format('YYYY/MM') : w.endDate

  return `
    <div class="row">
      <div class="col-4">
        ${date}
      </div>

      <div class="col-8">
        <strong>${w.employer}, ${w.location}</strong>
      </div>
    </div>
  `
}).join('')

const html = `
<!DOCTYPE html>
<html>
  <head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" rel="stylesheet">
    <!--
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap-reboot.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap-grid.min.css" rel="stylesheet">
    -->

    <style>
      html {
        font-size: 0.5rem;
      }

      h1 {
        border-bottom: 1px solid #000;
      }
    </style>
  </head>
  <body>

    <div class="container">

      <h1>Work Experience</h1>
      ${workExperienceHtml}

      <h1>Educational background</h1>

      <h1>Certificates</h1>

      <h1>Additional skills</h1>
    </div>

  </body>
</html>
`

pdf.create(html).toFile(
  path.join(__dirname, '../dist/Christoph Stach - Curriculum Vitae.pdf'),
  function(err, res) {
    console.log(res)
  }
);
