import React, {Component} from 'react';

class LifeCycle extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

        console.log('Component will mount');
    }
    componentDidMount() {

        console.log('Component Did mount');
    }

    componentWillUnmount() {

        console.log('Component will unmount')
    }

    componentDidRecieveProps() {}

    render() {
        console.log('Component Rendering');
        console.log(this.state, this.props);
        return (
            <div></div>
        );
    }
}

export default LifeCycle;

