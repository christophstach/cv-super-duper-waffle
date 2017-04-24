const ghpages = require('gh-pages')
const path = require('path')

ghpages.publish(path.join(__dirname, '../dist'), {
    user: {
        name: 'Christoph Stach',
        email: 'christoph.stach@gmail.com'
    },
    message: 'Auto-generated commit',
    repo: 'https://github.com/christophstach/christophstach.github.io.git',
    branch: 'master',
    logger: function(message) {
        console.log(message);
    }
}, (err) => {
    err && console.log(err);
})
