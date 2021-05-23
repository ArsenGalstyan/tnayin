import React, { Component } from 'react'
import Context from '../contexts/maincontext'

export default class Info extends Component {
    constructor(props){
        super(props)

        this.state = {
            mytext : `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, aliquid!`
        }
    }
    render() {
        let Consumer = Context.Consumer

        return (
            <div>
                <Consumer>
                    {
                        (value)=>{
                            this.setState({mytext: value})
                            console.log(value);
                        }    

                    }
                </Consumer>
            </div>
        )
    }
}
