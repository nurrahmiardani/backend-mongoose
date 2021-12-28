const monggose = require('mongoose')
async function openDBConnection (url_db) {
        return monggose.connect(url_db)
}

module.exports = openDBConnection