import React from 'react';
import ReactDom from 'react-dom';

//css
import './index.css'

// stateless functioal componet
// always return JSX

function Mobile(){
    // don't use div instead use React.Fragment or shorthand for this  <>
    return (
     <React.Fragment>
        <h1>This is a mobile list</h1>
       <section className="mobilelist">
       <Item />
       <Item />
       <Item />
       <Item />
       <Item />
       <Item />
        <Item />
       <Item />
        </section>
    </React.Fragment>
    )   // return React.createElement('h1', {} , "hello") 
}

const Item  = () => {
    return <article className="item">
        <Title />
        <Image />
    </article>
}

const Image = () => {
    return <img src="https://images-eu.ssl-images-amazon.com/images/I/71fumGFEU%2BL._AC_UL115_.jpg" alt="mobile" />
}

const Title = () => {
    return <p>Xiaomi Mobile</p>
}

ReactDom.render(<Mobile/>, document.getElementById('root'));