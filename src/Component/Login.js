import React, { Component} from "react";

class Login extends Component{
    constructor(props){
        super(props);
        let avatar ="";
        this.state={avatar};
    }
    getAvatar =()=>{
        const pseudo = document.getElementById("pseudo").value;
        // console.log("https://api.github.com/search/users?q=" + pseudo);
        fetch("https://api.github.com/search/users?q=" + pseudo)
            .then((success)=> success.json())
            .then((success)=>{
               // console.log(success.items[0].avatar_url);
               this.setState({avatar: success.items[0].avatar_url});
            });
    };
    render() {
        return(
            <div>
               <input id="pseudo" type="text"/>
               <input type="button" value="Click Here" onClick={this.getAvatar}/>
               <img src={this.state.avatar} alt={""}/>
            </div>

        )
    }
}
export default Login;