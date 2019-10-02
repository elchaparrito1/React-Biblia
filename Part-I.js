//Part I Notes:

//JSX
    /*Remember that even though JSX looks exactly like HTML, it is actually 
    just compoiled into JS. During runtime React takes care of rendering actual
    HTML in the browser for each component.*/

    /*This essentially is the virtual DOM. JSX shows us what will eventually be
    rendered in the DOM.*/

//SyntaxError
    /*This occurs when the JS engine encounters tokens or token order that doesn't
    conform to the syntax of the language when parsing code. It indicates some code
    is out of place or mistyped.*/

/*Again, code gets transpiled into JS in the browser. This is why we have to use
camelCasing for reserved JS words such as "class". When this element finally reaches
the page and becomes HTML, it will be transpiled by Babel to "class".*/

//We see this a lot in JSX:
    <h1>{product.url}</h1>
    //The braces ({}) around propertyvalues are a delimiter.
        //These signal to JSX that what resides in-between the braces is a JS expression.
    //The other delimiter is using quotes:
        id='1'
    //JSX attributes values must be delimited by either braces or quotes.

//Dealing with "this" and props:
    /*this is a special keyword in JS. The details of it are a bit nuanced, but for React
    this is bound to the React component class. So when we use this.props inside of a
    component, we're accessing the props property on that particular parent component. */