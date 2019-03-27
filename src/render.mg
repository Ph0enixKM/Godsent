export fun (data) {

    // Check if coder requested other languages than HTML
    if (data[1] && data[1].lower() != 'html')
        log('Other languages than HTML are not supported yet.')

    // Interpret Virtual DOM
    const dom = document.implementation.createHTMLDocument('virtual-dom')
    dom.body.innerHTML = data[0]

    // Get Virtual DOM of the component
    let [el] renderContent = dom.body.children



    // Check if there is one enclosing element
    if(renderContent.length != 1) 
        log('Content must be enclosed in one element')

    let tagName = renderContent[0].tagName


}