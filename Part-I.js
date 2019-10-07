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

/*Understanding the binding of "this" is one of the trickiest parts of learning JS programming.
In short, we want "this" inside any method to reference the local component just like it does
inside render(). BUT, inside render(), React binds "this" to the component automatically for
us. Inside a method, on the other hand, or when we declare our own custom methods, we have to bind
the methods manually through the constructor()*/

/*The constructor() is a special function in a JS class. JS invokes constructor() whenever an object
is created via a class. React invokes constructor() first thing when initializing the component
with the component's props.*/

//Further with props:
    //React favors the idea of one-way data flow.
    //This means that data changes come from the top of the app and are propagated downwards.

/*Every React component is rendered as a function of its this.props and this.state. This rendering is
deterministic. This means that given a set of props and a set of state, a React component will always 
render a single way. This is what makes for a powerful UI experience in React.*/

/*Remember that state gets updated only through the method attached to the class which is this.setState.
The state should never be modified outside of this.setState, b/c the state object should be thought of as
immutable. Part of the reason for this is b/c setState is actually asynchronous. There is no guarantee when
React will update the state and re-render the component.*/

//Changing methods to an arrow function eliminates the need for a constructor in the class:
class Comp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            state: ""
        }
        this.handleMethod = this.handleMethod.bind(this)
    }
} //This would change to:
class Comp extends React.Component {
        state = {
            state: ""
        }
        
        handleMethod = () => {

        }
}

//This again is because the arrow function will ensure that "this" is bound to the component, as expected

