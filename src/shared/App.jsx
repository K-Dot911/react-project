import * as React from 'react';
import { hot } from 'react-hot-loader/root';
import {Layout} from './Layout';

function AppComponent() {
    return (
        <Layout>
            Example content
        </Layout>
    )
}


export const App = hot(AppComponent);