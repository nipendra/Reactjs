import React from 'react'
import './githubcard.css'
const axios = require('axios').default;

const CardList = (props) =>{
    return (
    <div>
        {props.profiles.map((profile) => <GithubCard key={profile.id} {...profile}/>)}
    </div>
    )
}

class GithubCard extends React.Component {

    render(){
        const profile= this.props;
        return (
            <div className='github-profile'>
                <img width="75" height="75" src={profile.avatar_url} alt='' /> 
                <div className='info'>
                    <div>{profile.name}</div>
                    <div> {profile.company}</div>
                </div>
            </div>
        )
    }
}
class Form extends React.Component{
    state= {userName: ''};

     handleSubmit = async (event) => {
         event.preventDefault();
          const resp= await  axios.get(`https://api.github.com/users/${this.state.userName}`);
          console.log(resp.data);
          this.props.onSubmit(resp.data);
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <input 
                    type='text' 
                    placeholder='Github User Name'
                    value={this.state.userName}
                    onChange={event => this.setState({userName: event.target.value})} />
                <button>Add Card</button>
            </form>
        )
    }
}
//props and states are manged by instances of class component -> "this" 
class App extends React.Component {
    // in class component states are managed on the in-memory instance of 
    // that react associates with every mounted component.
    // to initialise state in  class compoenent we need to use class constructor method
    // constructor 
    // this 
    // class Component must have a render function
    constructor(props){
        super(props);
        this.state = {
            profiles: [],
        };
    }
    addNewProfile = (profileData) => {
        this.setState(prevState => ({
            profiles:[...prevState.profiles, profileData],
        }));
    }
    render (){
        //must return 
        return (
            <>
            <div className='header'>
                <h1>{this.props.title}</h1>
            </div>
            <Form onSubmit={this.addNewProfile}/>
            <CardList profiles={this.state.profiles}/>
            </>
        )
    }
}

export default App;