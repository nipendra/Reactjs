import React from 'react'
import './githubcard.css'

class GithubCard extends React.Component {

    render(){
        return (
            <div className='github-profile'>
                <img width="75" height="75" src='https://bit.ly/3o1fzIr' alt='' /> 
                <div className='info'>
                    <div> Name here ...</div>
                    <div> Company here ...</div>
                </div>
            </div>
        )
    }
}
//props and states are manged by instances of class component -> "this" 
class App extends React.Component {
    // constructor 
    // this 
    // class Component must have a render function
    render (){
        //must return 
        return (
            <>
            <div className='header'>
                <h1>{this.props.title}</h1>
            </div>
            <GithubCard/>
            </>
        )
    }
}

export default App;