import React, {Fragment} from 'react';
import { BrowserRouter, Switch,Redirect } from 'react-router-dom';
import routes from './list';
import Public from './Public';
import Private from './Private';
import Admin from './Admin';
import Alert from 'react-s-alert';

import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';
import 'react-s-alert/dist/s-alert-css-effects/scale.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import 'react-s-alert/dist/s-alert-css-effects/flip.css';
import 'react-s-alert/dist/s-alert-css-effects/genie.css';
import 'react-s-alert/dist/s-alert-css-effects/jelly.css';
import 'react-s-alert/dist/s-alert-css-effects/stackslide.css';

class Routes extends React.Component{


    render() {
        return (
            <Fragment>
                <BrowserRouter>
                    <Switch>
                        {
                            routes.map((route, i) => {
                                if(route.admin === true){
                                    return <Admin key={i} {...route}  />;
                                }
                                if (route.auth === true) {
                                    return <Private key={i} {...route}  />;
                                }
                                return (
                                    <Public key={i} {...route}  />
                                );
                            })
                        }
                        <Redirect to={'/'} exact />
                    </Switch>
                </BrowserRouter>
                <Alert stack={{limit: 3}} />
            </Fragment>
        );
    }
}

export default Routes;
