import render from './render.mg'

tree Godsent {
    tree data {}
    
}

Godsent.Element = class {
    setup(id, content) {

        // Validation check
        if (!content.render) throw ('God: Render Method is required')
        if (typeof(id) != 'string') throw('God: ID must be a string')

        render(content.render)


    }
}

export Godsent