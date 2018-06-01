import React, {Component} from 'react';
import Navigation from './components/Navigation/Navigation'
import Jumbo from './components/Jumbo/Jumbo'
import InformationSection from './components/InformationSection/InformationSection'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import './App.css';

const initialState = {
    route: 'Info'
};

class App extends Component {
    constructor() {
        super();
        this.state = initialState;
    }

    onRouteChange = (route) => {
        if (route === 'Contact') {
            this.setState(initialState)
        }

        this.setState({route:route});
    };

    render() {
        const { route } = this.state;

        return (
            <div>
                <Navigation onRouteChange={this.onRouteChange}/>
                {route === 'Info'
                    ? <div>
                        <Jumbo/>
                        <InformationSection/>
                        <Footer/>
                    </div>
                    : <Contact/>
                }
            </div>
        );
    }
}

export default App;
