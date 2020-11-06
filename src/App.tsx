import React from 'react';
import { hot } from 'react-hot-loader/root';
import {Layout} from "./shared/Layout";
import './main.global.css'
import {Header} from "./shared/Header";
import {Content} from "./shared/Content";
import {CardsList} from "./shared/CardsList";
import {generateId, generateRandomString} from "./utils/react/generateRandomIndex";
import {merge} from "./utils/js/merge";
import {GenericList} from "./shared/GenericList";

const LIST = [
    {As: 'li' as const, text: 'some'},
    {As: 'li' as const, text: 'other some'},
    {As: 'li' as const, text: 'some'},
].map(generateId) // Вынесена за пределы компонента что бы id были сгенерированы один раз и потом не менялись.

function AppComponent() {
    const [list, setList] = React.useState(LIST)

    const handleItemClick = (id: string) => {
        console.log(id)
        setList(list.filter((item) => item.id !== id));
    }

    const handleAdd = () => {
        setList(list.concat(generateId({text: generateRandomString(), As: 'li' as const})))
    }

    return (
       <Layout>
           <Header />
           <Content>
              <CardsList />
              <button onClick={handleAdd}>Add Element</button>
               <ul>
                   <GenericList list={list.map(merge({onClick: handleItemClick}))}/>
               </ul>
           </Content>
       </Layout>

    );
}

export const App = hot(() => <AppComponent/>);