import React, { Component } from 'react';

class CheckBoxComponent extends Component{
    constructor(props){
        super(props)
        this.checkBoxHandler = this.checkBoxHandler.bind(this)
    }

    checkBoxHandler(e){
        let element = e.target
        alert ("Calling Back end for" +  element.id)
      }

    render() {
        let TOTAL_COUNT=12
        this.checkBoxHandler.bind(this)
        let rows =[]
        for (let i=0; i< TOTAL_COUNT; i++){
            rows.push(<tr> <td><input type='CheckBox' id={i} onClick={this.checkBoxHandler}/>{i}</td></tr>)
        }
    return (
        <div className="App">
        <header className="App-header">
            <p>MERN (Mongo Express React Node)</p><p>Example</p>
        </header>
        <table>
            <th>Select a check box</th>
            <tbody>
            {rows}
            </tbody>
        </table>
        </div>
    );
    }
}


    export default CheckBoxComponent