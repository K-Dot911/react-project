import React from 'react';
import { hot } from 'react-hot-loader/root';
import {Layout} from "./shared/Layout";
import './main.global.css'
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {generateId} from "./utils/react/generateRandomIndex";

const LIST = [
    {value: 'some'},
    {value: 'other some'},
    {value: 'some'},
].map(generateId) // Вынесена за пределы компонента что бы id были сгенерированы один раз и потом не менялись.



function AppComponent() {
    return (
       <Layout>
           <Header />
           <Content>
              <CardsList />
               <div>{LIST}</div>
           </Content>
       </Layout>
    );
}

export const App = hot(AppComponent)