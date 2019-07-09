import React from 'react';
import './App.css';

const App: React.FC = () => {
    return (
        <div className={"container-fluid"}>
            <div className="row">
                <div className="col-6"><h1>hola</h1></div>
                <div className="col-6"><h1>hola</h1></div>
                <div className="col-12 text-center">
                    <button className="col-4 btn btn-primary">Pulsa</button>
                </div>
            </div>
        </div>
    );
}

export default App;
