const MagmaScript = require('magma-script')

new MagmaScript({
    input: __dirname + '/src/main.mg',
    output: __dirname + '/build/bundle.js'
})

new MagmaScript({
    input: __dirname + '/test/test.mg',
    output: __dirname + '/test/test.js'
})

new MagmaScript({
    input: __dirname + '/exec/run.mg',
    output: __dirname + '/exec/out.js',
    global: true
})