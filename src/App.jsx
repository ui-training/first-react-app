import React, {Component} from 'react';

import Header from './components/header.component';
import Content from './components/content.component';
import Footer from './components/footer.component';
import './App.css';

class App extends Component {

    render() {

        return (
            <div className='top-div'>
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

export default App;
