
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
        <strong>${date}</strong>
      </div>

      <div class="col-8">
        <strong>${w.employer}, ${w.location}</strong>
        ${w.responsibilities !== undefined && w.responsibilities.length > 0 ? `
          <ul>
            ${w.responsibilities.map((r) => `
              <li>${r}</li>
            `).join('')}
          </ul>
        ` : ``}
      </div>
    </div>
  `
}).join('')

let educationalBackgroundHtml = educationalBackground.map((e) => {
  let date = moment(e.startDate).format('YYYY/MM')
  date += e.endDate ? ' - ' : ''
  date += e.endDate instanceof Date ? moment(e.endDate).format('YYYY/MM') : e.endDate

  return `
    <div class="row">
      <div class="col-4">
        <strong>${date}</strong>
      </div>

      <div class="col-8">
        <span>${e.name}, ${e.location}${e.program ? `: ${e.program}` : ``}</span>
      </div>
    </div>
  `
}).join('')

let certificatesHtml = certificates.map((c) => `
  <div class="row">
    <div class="col-4">
        <strong>${moment(c.date).format('YYYY')}</strong>
    </div>

    <div class="col-8">
      <strong>${c.name}:</strong>
      <span>${c.description}</span>
    </div>
  </div>
`).join('')

let additionalSkillsHtml = additionalSkills.map((a) => `
  <div class="row">
    <div class="col-4">
      <strong>${a.category}</strong>
    </div>

    <div class="col-8">
      ${a.items !== undefined && a.items.length > 0 ? `
        <ul class="additional-skills">
          ${a.items.map((item) => `
            <li>${item.name} (${item.level})</li>
          `).join('')}
        </ul>
      ` : ``}

      ${a.subCategories !== undefined && a.subCategories.length > 0 ? a.subCategories.map((sub) => `
        <div class="sub-category">
          <strong>${sub.category}</strong>
          <br>
          ${sub.items.join(', ')}
        </div>
      `).join('') : ``}
    </div>
  </div>
`).join('')

const html = `
<!DOCTYPE html>
<html>
  <head>


    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap-reboot.min.css" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0-alpha.6/css/bootstrap-grid.min.css" rel="stylesheet">


    <style>
      html {
        font-size: 0.6rem;

      }

      .page {
        padding: 40px;
      }

      .container {

      }

      h1 {
        border-bottom: 1px solid #000;
        margin-bottom: 15px;
      }

      .row {
        padding-bottom: 5px;
      }

      .sub-category {
        padding-bottom: 5px;
      }

      ul.additional-skills {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .page-break {
        page-break-after: always;
      }
    </style>
  </head>
  <body>

    <div class="container">

      <div class="page">
        <h1>Work Experience</h1>
        ${workExperienceHtml}

        <h1>Educational background</h1>
        ${educationalBackgroundHtml}
      </div>

      <div class="page-break"></div>

      <div class="page">
        <h1>Certificates</h1>
        ${certificatesHtml}

        <h1>Additional skills</h1>
        ${additionalSkillsHtml}
      </div>

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
