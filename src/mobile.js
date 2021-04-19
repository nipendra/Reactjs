import React from 'react'
import {Items} from './Items';
//css
import './index.css'

// stateless functioal componet
// always return JSX

const Products = Items;
const Mobile = () => {
    return (
        <div>
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
        </div>
    )
}

const Item  = (props) => {
    const {brand, img , name, price} = props
    return (
        <article className="item">
        {/* <Title brand={props.brand}/> */}
        <Title brand={brand} name={name} price= {price}/>
        {/* // children prop for componet */}
        {props.children} 
        <Image img={img}/>
         </article>
    )
}

const Title = ({brand, name, price}) => {
    return (
       <React.Fragment>
        <h3>Brand: {brand}  </h3>
        <p>Name: {name}</p>
        <p>Price: {price}</p>
       </React.Fragment>
        )
}

const Image = ({img}) => {
    return <img width='80' height='120' src={img} alt="mobile img"/>
    
}



export default Mobile
