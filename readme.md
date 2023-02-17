# React

Basic concepts:
- React: To create the components
- React-dom: To add components to the page
- CDN: Content Delivery Network
- JSX: HTML like syntax to allow elements creation
- Babel: convert code to be readable by the browser
- Component: JavaScript function that returns a *jsx*

Importing React on common HTML file:
- ``<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>``
- ``<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>``

Importing Babel:
- ``<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>``

<hr />

## Using Node

1. Pre-req: *NodeJs* and *npm*
   - ``node -v``
   - ``npm -version``
2. Create a React app using Node:  
    ``npx create-react-app <app-name>``
3. Go to react app directory
4. Run app with command:  
    ```npm start```

React.StrictMode: package thar run aditional checks - but only in production

Array desctructure: assign a variable to a value on array based on its position:
``
const [fisrtCity, second] = ["Tokyo", "Tahoe City", "New York"]

console.log(fisrtCity)
console.log(second)
``
