import './App.scss';
import Start from "./components/start/Start";
import Game from "./components/Game/Game";
import FinishPage from "./components/FinishPage/FinishPage";
import {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {

    const [number, setNumber] = useState('')
    const [name, setName] = useState('')

    const onChangeNumber = e => {
        setNumber(e.target.value)
    }

    const onChangeName = e => {
        setName(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault()
        console.log(e)
    }

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path='/'>
                        <Start
                            onChangeNumber={onChangeNumber}
                            onChangeName={onChangeName}
                            onSubmit={onSubmit}
                            name={name}
                            number={number}
                        />
                    </Route>
                    <Route exact path='/game'>
                        <Game
                            name={name}
                            number={number}
                        />
                    </Route>
                    <Route exact path='/finish'>
                        <FinishPage/>
                    </Route>
                </Switch>

            </div>
        </Router>
    );
}

export default App;
