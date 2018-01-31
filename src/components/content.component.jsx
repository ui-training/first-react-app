import React, {Component} from 'react';
import UserRow from './user-row.component';
import Calculator from './calculator.component';
import LifeCycle from "./life-cycle.component";

class Content extends Component {


    constructor(props) {
        super(props);

        this.counter = 1;
        this.state = {
            array: [
                {name: 'Prakash', age: 29},
                {name: 'Luffy', age: 19},
                {name: 'Zoro', age: 21}
            ]
        };
        this._handleMouseHover = this._handleMouseHover.bind(this);
    }

    componentWillMount() {

        this.setState({})
    }

    render() {

        var lifeCycleComponent = <LifeCycle/>;

        if(this.state.hideLifeCycle) {
            lifeCycleComponent = <div></div>;
        }

        return (
            <div className='content'>
                <Calculator/>
                {lifeCycleComponent}
                <table>
                    <thead>
                    <tr>
                        <th>S.no</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.array.map((record, index) => <UserRow data={record} key={index} id={index}/>)
                    }
                    </tbody>
                </table>
                <div onMouseOver={this._handleMouseHover}>On Hover kill the life cyle</div>
            </div>
        );
    }

    _handleMouseHover(e) {

        console.log('Mouse is hovered');
        var array = this.state.array;
        array[1].name += this.counter++;
        this.setState({
            hideLifeCycle: true,
            array:array
        });
    }
}

export default Content;