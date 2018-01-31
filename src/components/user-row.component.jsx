import React, {Component} from 'react';

class UserRow extends Component {

    render() {

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