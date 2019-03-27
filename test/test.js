/**
 * Standard Library For MagmaScript Language
 * Copyright 2019 - Phoenix Arts (Paweł Karaś)
 */

function log(...content) {
    console.log(...content)
}

function random(min = 0, max = 1) {
    return (Math.random() * max) + min
}

function sqrt(number) {
    return Math.sqrt(number)
}

Array.prototype.last = function() {
    return this[this.length - 1]
}

String.prototype.lower = function() {
    return this.toLowerCase()
}

String.prototype.upper = function() {
    return this.toUpperCase()
}

String.prototype.firstLower = function() {
    return this[0].toLowerCase() + this.substring(1)
}

String.prototype.firstUpper = function() {
    return this[0].toUpperCase() + this.substring(1)
}

if (typeof(document) != 'undefined') {
    function element(query) {
        return document.querySelector(query)
    }

    function elements(query) {
        return new Array(...document.querySelectorAll(query))
    }

    HTMLElement.prototype.css = function(key, val) {
        let newKey = ''

        for (let i = 0; i < key.length; i++) {
            if (key[i] == '-')
                newKey += key[++i].toUpperCase()
            else
                newKey += key[i]
        }

        this.style[newKey] = val
    }

    HTMLElement.prototype.magmaEvents = {}

    HTMLElement.prototype.on = function(event, callback, options = false) {
        let stateList = this.magmaEvents[event]

        this.magmaEvents[event] = (stateList == null) ? [] : stateList
        this.magmaEvents[event].push([callback, options])

        this.addEventListener(event, callback, options)

        return (this.magmaEvents[event].length - 1)
    }

    HTMLElement.prototype.detach = function(event, id = null) {
        if (isNaN(id)) {
            for (let index = 0; index < this.magmaEvents[event].length; index++) {
                this.removeEventListener(event, ...this.magmaEvents[event][index])
            }
        } else {
            this.removeEventListener(event, ...this.magmaEvents[event][id])
        }
    }

    HTMLElement.prototype.parent = function(up = 1) {
        let el = this

        for (; up > 0; up--) {
            el = el.parentElement
        }

        return el
    }
}

/**
 * The Actual Code
 */

'use strict';

const Godsent = (() => {
    const render = (() => {
        return function(data) {

            // Check if coder requested other languages than HTML
            if (data[1] && data[1].lower() != `html`)
                log(`Other languages than HTML are not supported yet.`)

            // Interpret Virtual DOM
            const dom = document.implementation.createHTMLDocument(`virtual-dom`)
            dom.body.innerHTML = data[0]

            // Get Virtual DOM of the component
            let renderContent = dom.body.children

            // Check if there is one enclosing element
            if (renderContent.length != 1)
                log(`Content must be enclosed in one element`)

            let tagName = renderContent[0].tagName

        }
    })()

    const Godsent = {
            data: {}

        },

        Godsent.Element: class {
            constructor(id, content) {

                // Validation check
                if (!content.render) throw (`God: Render Method is required`)
                if (typeof(id) != `string`) throw (`God: ID must be a string`)

                render(content.render)

            }
        }

    return Godsent
})()

new Godsent.Element(`App`, {
    render = [`
    
        <div>
            Hello
        </div>
    `]
})

/*

export new Godsent.Element(`App`, {
    
    render = [`
        <div onclick={getAge}>
            <h1> Hello World </h1>
            <a> Click Me! </a>
        </div>
    `, `html`]

    tree data {
        age = 18 // This value is going to be updated here by default
        battery = Godsent.Subscribe(`battery-state`, `battery`) // It`s going to be updated on each change

        getAge(event) {
            log(this.age)
        }
    }

    onMount() {
        log(`Mounted!`)
    }

    onUnmount() {
        log(`Unmounted!`)
    }

    style(`
        div
            width : 100px
        h1
            color: red
    `, `sass`)
})

*/