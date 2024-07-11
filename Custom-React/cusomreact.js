function customRender(reactElement,container){
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)
    // container.appendChild(domElement);
    //lenthy
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children
    for(const prop in reactElement.props){
        if(prop==='children') continue;//for safety
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement);
}

const reactElement = {
    type:'a',
    props:{
        //jitna properties add karna ho karo
        href:'https://google.com',
        target:'_blank'
    },
    children: 'Click me to visit google'
}//custom react hai jo react karta ha internally
const mainContainer=document.getElementById('root')

customRender(reactElement,mainContainer)