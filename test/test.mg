import Godsent from '../src/main.mg'

new Godsent.Element('App', {
    render = ['
    
        <div>
            Hello
        </div>
    ', 'html']
})

/*

export new Godsent.Element('App', {
    
    render = ['
        <div onclick={getAge}>
            <h1> Hello World </h1>
            <a> Click Me! </a>
        </div>
    ', 'html']

    tree data {
        age = 18 // This value is going to be updated here by default
        battery = Godsent.Subscribe('battery-state', 'battery') // It's going to be updated on each change

        getAge(event) {
            log(this.age)
        }
    }

    onMount() {
        log('Mounted!')
    }

    onUnmount() {
        log('Unmounted!')
    }

    style('
        div
            width : 100px
        h1
            color: red
    ', 'sass')
})

*/