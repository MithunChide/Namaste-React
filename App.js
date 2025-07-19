
import React from 'react'
import ReactDOM from 'react-dom/client'
// const heading = document.createElement('h2')

// heading.innerHTML = 'Hello World using Javascript'

// const divElement = document.getElementById('root')

// divElement.appendChild(heading)


   const heading = React.createElement("div", {id:'parent'}, [
        React.createElement('div', {id: 'child'}, [
        React.createElement('h1', {id:'heading1'}, "Hello Heading 1"),
        React.createElement('h2', {id:'heading2'}, "Hello Heading 2"),
        React.createElement('h2', {id:'heading2'}, "Hello Heading 2")

        ]),
        React.createElement('div', {id: 'child2'}, [
        React.createElement('h1', {id:'heading1'}, "Hello Heading 1"),
        React.createElement('h2', {id:'heading2'}, "Hello Heading 2")
        ])
    ])
    const root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(heading)

