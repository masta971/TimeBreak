import React, { Component} from  "react";
import Login from "./Login" //Always capital letter
import "./App.css" //My CSS
class App extends Component {
    render() {
        return(
            <div>
            <h1>Hi, You have access to your Avatar</h1>
            <p>Please enter your pseudo into the field</p>
                <Login/>
            </div>

        )
    }
}
export default App;
