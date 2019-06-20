/*
 * Created by Roland Szecsenyi <roland.sze@gmail.com>
 * This file is part of the INSCALE technical challenge.
 */

import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {routesConfig} from 'config/routes';
import IndexContainer from 'containers/Index';
import CampaignsContainer from 'containers/Campaigns';

/**
 * @description
 * Wired-in routes.
 */
export const routes = (
    <Switch>
        {/* Index */}
        <Route exact path={routesConfig.index} component={IndexContainer}/>

        {/* Campaigns */}
        <Route exact path={routesConfig.campaigns} component={CampaignsContainer}/>
    </Switch>
);
