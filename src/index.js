import React from 'react';
import ReactDom from 'react-dom';

import {products} from './Items';
//css
import './index.css'

// stateless functioal componet
// always return JSX

const Products = products;
const heading = 'This is a mobile list';
function Mobile(){
    // don't use div instead use React.Fragment or shorthand for this  <>
    return (
     <React.Fragment>
        <h1>{heading.toUpperCase()}</h1>
       <section className="mobilelist">
        {
            Products.map((item, index) => {
                return <Item {...item} />
            })
        }
       

       <Item {...Products[0]}>
            {/* // given p tage will be children for Item componet */}
        <p>Lorem ipsum, or lipsum as it is sometimes known, 
            is dummy text used in laying out print, graphic or
            web designs. The passage is attributed to an unknown
            </p>

       </Item>
        </section>
    </React.Fragment>
    )   // return React.createElement('h1', {} , "hello") 
}

const Item  = (props) => {
    const {brand, img , name, price} = props
    return (
        <article className="item">
        {/* <Title brand={props.brand}/> */}
        <Title brand={brand} name={name}/>
        {/* // children prop for componet */}
        {props.children} 
        <Image img={img}/>
         </article>
    )
}

const Image = (img) => {
    return <img src={img} />
    
}

// const Title = (props) => {
//     return <p>{props.brand} Mobile</p>
// }

// we can also do destructuring of props like this 


const Title = ({brand, name}) => {
    return (
       <React.Fragment>
        <h3>Brand: {brand}  </h3>
        <p>Name: {name}</p>
       </React.Fragment>
        )
}

ReactDom.render(<Mobile/>, document.getElementById('root'));