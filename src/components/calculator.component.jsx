import React, {Component} from 'react';

class Calculator extends Component {

    constructor(props) {
        super(props);

        this.state = {
            value1: 0,
            value2: 0
        };
    }

    render() {

        var result = this.state.value1 * this.state.value2;
        return (
            <div className='calculator'>
                <input type="text" name='input1' value={this.state.value1}
                       onChange={e => this.changeInput('value1', e.target.value)}/>
                <input type="text" name='input2' value={this.state.value2}
                       onChange={e => this.changeInput('value2', e.target.value)}/>
                <div>{result}</div>
            </div>
        );
    }

    changeInput(key, value) {

        var obj = {};
        obj[key] = value;

        this.setState(obj);
    }
}

export default Calculator;