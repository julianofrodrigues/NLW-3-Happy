import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import CreateOrphanage from './pages/CreateOrphanage';



function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Landing} exact />
                <Route path="/app" component={OrphanagesMap} />
                <Route path="/orphanages/:id" component={Orphanage}  exact/>
                <Route path="/create" component={CreateOrphanage} exact/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;