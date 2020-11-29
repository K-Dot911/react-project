import React from 'react';
import { hot } from 'react-hot-loader/root';
import {Layout} from "./shared/Layout";
import './main.global.css'
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {Text} from "./shared/Text";

function AppComponent() {
    return (
       <Layout>
           <Header />
           <Content>
              <CardsList />
              <br/>
              <Text size={20} mobileSize={28} bold={true}>Label 1</Text>
               <Text size={20}>Label 2</Text>
               <Text size={20} mobileSize={16}>Label 2</Text>
           </Content>
       </Layout>

    );
}

export const App = hot(() => <AppComponent/>);