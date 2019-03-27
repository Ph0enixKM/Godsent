const args = process.argv

import liveServer from 'live-server'

log(args)
log(process.cwd())

/*
 -port=7777


*/

'file://'

if (args[2] == 'watch') { 
    let params = {
        port = 7777 // Set the server port. Defaults to 8080.
        // root = '' // Set root directory that's being served. Defaults to cwd.
        open = true // When false, it won't load your browser by default.
        file = 'index.html' // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
        middleware = [(req, res, next) => {
            log(res)
            next()
        }]
    }
    liveServer.start(params)
}