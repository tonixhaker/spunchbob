import React,{ Component } from 'react';
import {Provider} from 'react-redux';
import Routes from '../routes';
import {initializeStore} from '../store/index';
import '../style/index.css';

class App extends Component {
    render() {
        return (
            <Provider store={initializeStore()}>
                <Routes />
            </Provider>
        );
    }
}

export default App;
