import React, {Component} from 'react';

class Form extends Component {
    render(){
        return (
            <main>
                <form method="POST">
                    <input type="email" placeholder="Email" name="inputEmail"></input>
                    <input type="password" placeholder="password" name="inputPassword"></input>
                    <button type="submit">Submit</button>
                </form>
            </main>
        );
    }
}

export default Form; 