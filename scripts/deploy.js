const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: https://github.com/gerrygoo/fuchi.git,
        user: {
            name: 'ggo',
            email: 'gerrygoable@outlook.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)