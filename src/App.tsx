import React from 'react';
import './App.css';
import AppRouter from './AppRouter';

// Vision General de React con Typescript
// https://github.com/piotrwitek/react-redux-typescript-guide
// TODO INTEGRACION JS/TS
// TODO Navigation, pasar vista con jsx y filtrar para no pintar un Maplist
//

const App: React.FC = () => {
    return (
        <AppRouter/>
    );
};

export default App;
