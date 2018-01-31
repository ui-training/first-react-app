import React, {Component} from 'react';
import UserRow from './user-row.component';
import Calculator from './calculator.component';

class Content extends Component {

    render() {

        var array = [
            {name: 'Prakash', age:29},
            {name: 'Luffy', age: 19},
            {name: 'Zoro', age: 21}
        ];

        return (
            <div className='content'>
                <Calculator/>
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
                        array.map(function(record, index) {
                            return <UserRow data={record} key={index} id={index}/>;
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Content;