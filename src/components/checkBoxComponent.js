import React, { Component } from 'react';

class CheckBoxComponent extends Component{
    constructor(props){
        super(props)
        this.checkBoxHandler = this.checkBoxHandler.bind(this)
    }

    checkBoxHandler(e){
        let element = e.target
        let value = element.id

        var url = new URL("http://localhost:3000/api/add"),
        params = {value: value}
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

        
        fetch(url, { query: JSON.stringify({value: value})})
            .then(res => console.log(res));
      }

    render() {
        let TOTAL_COUNT=12
        this.checkBoxHandler.bind(this)
        let rows =[]
        for (let i=0; i< TOTAL_COUNT; i++){
            rows.push(<tr> <td><input type='CheckBox' id={i} onClick={this.checkBoxHandler}/>{i}</td></tr>)
        }
    return (
        <div>
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