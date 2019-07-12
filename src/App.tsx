import React from 'react';
import './App.css';
import Button from "./components/Button";

// Vision General de React con Typescript
// https://github.com/piotrwitek/react-redux-typescript-guide
// TODO INTEGRACION JS/TS
// TODO Navigation, pasar vista con jsx y filtrar para no pintar un Maplist
// 

const App: React.FC = () => {
    return (
        <div className={"container-fluid"}>
            <div className="row">
                <div className="col-6"><h1>hola</h1></div>
                <div className="col-6"><h1>hola</h1></div>
                <div className="col-12 text-center">
                    <Button onClick={() => console.log("HOLA")}>PULSA</Button>
                </div>
            </div>
        </div>
    );
};

export default App;
