import React from 'react';
import ReactDom from 'react-dom';

//css
import './index.css'

// stateless functioal componet
// always return JSX

const heading = 'This is a mobile list';
function Mobile(){
    // don't use div instead use React.Fragment or shorthand for this  <>
    return (
     <React.Fragment>
        <h1>{heading.toUpperCase()}</h1>
       <section className="mobilelist">
       <Item brand="Xiomi"/>
       <Item brand="Oppo"/>
       <Item brand="Reno"/>
       <Item brand="MI"/>
       <Item brand="None"/>
       <Item brand="X">
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
    // console.log(props);
    const {brand} = props
    return (
        <article className="item">
        {/* <Title brand={props.brand}/> */}
        <Title brand={brand} color="red"/>
        {/* // children prop for componet */}
        {props.children} 
        <Image />
         </article>
    )
}

const Image = () => {
    return <img src="https://images-eu.ssl-images-amazon.com/images/I/71fumGFEU%2BL._AC_UL115_.jpg" alt="mobile" />
    
}

// const Title = (props) => {
//     return <p>{props.brand} Mobile</p>
// }

// we can also do destructuring of props like this 


const Title = ({brand, color}) => {

    return (
        <p>{brand} Mobile and color is {color}</p>)
}

ReactDom.render(<Mobile/>, document.getElementById('root'));