import React from 'react';
import ReactDom from 'react-dom';

// stateless functioal componet
// always return JSX

function Greeting(){
    // don't use div instread use React.Fragment or shorthand for this  <>
    return (
     <React.Fragment>
        <Person />
         <h4>Hello! this is first component</h4>
    </React.Fragment>
    )   // return React.createElement('h1', {} , "hello") 
}

const Person  = () => {
    return <h2>Nipendra Singh</h2>;
}

ReactDom.render(<Greeting/>, document.getElementById('root'));