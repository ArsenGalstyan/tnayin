import React, { Component } from 'react'
import Context from '../contexts/maincontext'
import Info from './Info'

export default class text extends Component {
    constructor(props){
        super(props)

        this.state = {
            mod: [`en`,`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, rerum?` ]
        }


        this.chengLeng = this.chengLeng.bind(this)
    }
    chengLeng(e){
        if(this.state.mod[0] === `en`)
        this.setState({mod: [`am`,`Lorem ipsum գազարն ուժեղացրեց զեղչերը: Ամեն ինչից առավել:`]})
        else{ this.setState({mod: [`en`,`Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, rerum?`]})}
    }

    render() {
        return (
            <div className="maintextdiv">
                <Context.Provider value={this.state.mod}>
                 <button onClick={this.chengLeng}>{this.state.mod[0]}</button>
                <Info />
                </Context.Provider>
            </div>
        )
    }
}

