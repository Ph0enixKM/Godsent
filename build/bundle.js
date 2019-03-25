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

const Godsent = {
    data: {}

}

Godsent.Element = class {
    constructor(id, content) {

        if (!content.render) throw ('God: Render Method is required')
        if (typeof(id) != 'string') throw ('God: ID must be a string')

    }
}

module.exports = Godsent