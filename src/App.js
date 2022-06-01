import './App.css';
import {ConfigureStore} from './redux/configureStore';
import {Component} from "react";
import {Provider} from 'react-redux';
import Main from "./components/MainComponent";
import BrowserRouter from "react-router-dom/BrowserRouter";


const store = ConfigureStore();

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div className="App">
                        <Main/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
