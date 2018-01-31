import React, {Component} from 'react';

class UserRow extends Component {

    render() {

        console.log('Rendering in User Row');
        var record = this.props.data;
        var rowId = this.props.id;

        return (
            <tr className={this.getClassFromAge(record.age)}>
                <td>{rowId + 1}</td>
                <td>{record.name}</td>
                <td>{record.age}</td>
            </tr>
        );
    }

    componentWillUpdate() {
        console.log('User Row componentWillUpdate');
    }

    componentDidUpdate() {
        this.myName =  this.props.data.name;
        console.log('User Row componentDidUpdate');
    }

    componentDidMount() {
        this.myName =  this.props.data.name;
        console.log('User Row componentDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {

        if(this.myName === nextProps.data.name) {
            return false;
        }

        return true;
    }

    componentWillReceiveProps() {


        console.log('In User Row');
        console.log(arguments);
    }

    getClassFromAge(age) {

        if(age < 20) {
            return 'green-bg';
        }

        if(age < 25) {
            return 'yellow-bg';
        }

        return 'red-bg';
    }
}

export default UserRow;