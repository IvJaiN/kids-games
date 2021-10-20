import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

import FieldGame from "./FieldGame/FieldGame"

import './Game.scss'
import FinishPage from "../FinishPage/FinishPage";

const Game = props => {
    const data = [
        {name: 'cat', id: '1', isActive: false, isDone: false},
        {name: 'chicken', id: '2', isActive: false, isDone: false},
        {name: 'cow', id: '3', isActive: false, isDone: false},
        {name: 'dog', id: '4', isActive: false, isDone: false},
        {name: 'frog', id: '5', isActive: false, isDone: false},
        {name: 'goat', id: '6', isActive: false, isDone: false},
        {name: 'goose', id: '7', isActive: false, isDone: false},
        {name: 'horse', id: '8', isActive: false, isDone: false},
        {name: 'mule', id: '9', isActive: false, isDone: false},
        {name: 'pig', id: '10', isActive: false, isDone: false},
        {name: 'sheep', id: '11', isActive: false, isDone: false},
        {name: 'tiger', id: '12', isActive: false, isDone: false}
    ]
    const [animals, setAnimals] = useState([])
    const [detected, setDetected] = useState(false)
    const [current, setCurrent] = useState(0)
    const [sec, setSec] = useState('00')
    const [min, setMin] = useState('00')
    const [counter, setCounter] = useState(0)

    const {number, name} = props

    useEffect(() => {
        setAnimals(getRandomArray(number))
    }, [])

    useEffect(() => {
        doubleActive()
    }, [animals])

    function onChangeAnimal(idx) {
        const newObj = {
            name: animals[idx].name,
            id: animals[idx].id,
            isActive: !animals[idx].isActive,
            isDone: animals[idx].isDone
        }

        setAnimals(animal => [...animal.slice(0, idx), newObj, ...animal.slice(idx + 1)])
    }

    function doubleActive() {
        const sortArray = animals.filter(item => item.isActive)
        if (sortArray.length === 2) {
            setDetected(true)
            setTimeout(() => {
                if (sortArray[0].id === sortArray[1].id) {
                    const changeAnimals = animals.map(item => item.id === sortArray[0].id ? {
                        name: item.name,
                        id: item.id,
                        isActive: false,
                        isDone: true
                    } : item)
                    setAnimals(animals => changeAnimals)
                    setCurrent(current + 1)
                    setDetected(false)
                    setCounter(counter => counter + 1)
                } else {
                    const changeAnimals = animals.map(animal => ({
                        name: animal.name,
                        id: animal.id,
                        isActive: false,
                        isDone: animal.isDone
                    }))
                    setAnimals(animals => changeAnimals)
                    setDetected(false)
                    setCounter(counter => counter + 1)
                }
            }, 1000)
        }
    }

    function getRandomArray(i = 8) {
        const animalArr = new Set()
        while (animalArr.size < i) {
            animalArr.add(randomInteger())
        }
        return ([...animalArr, ...animalArr])
            .sort(() => Math.random() - 0.5)
            .map(i => data[i - 1])
    }

    function randomInteger(min = 1, max = 12) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }

    function repeatGame() {
        const oldArray = animals.map(animal => ({name: animal.name, id: animal.id, isActive: false, isDone: false}))
        setAnimals(animal => oldArray)
        setCurrent(0)
        setCounter(0)
    }

    return (
        <div className='game-screen screen'>
            <div className="game-screen__box">
                <h3 className='game-screen__title'>Найди все пары животных!</h3>
                {(current == props.number) ?
                    (<FinishPage
                        name={name}
                        sec={sec}
                        min={min}
                        number={number}
                        counter={counter}
                    />) : (
                        <>
                            <ul className="navigation">
                                <li>
                                    <div className="results">
                                        <div className="current">
                                            Верно найдено : {current}
                                        </div>
                                        <div className="other">
                                            Осталось : {number - current}
                                        </div>
                                        <div className="current">
                                            Попыток сделано: {counter}
                                        </div>
                                        {/*<Stopwatch*/}
                                        {/*    changeTime={changeTime}*/}
                                        {/*    finishGame={finishGame}*/}
                                        {/*/>*/}

                                    </div>
                                </li>
                                <li><span className='userName'>{name}</span></li>
                                <li>
                                    <button
                                        className="game-screen__repeat"
                                        onClick={repeatGame}
                                    >
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="640" height="640"
                                             viewBox="0 0 640 640">
                                            <title></title>
                                            <g id="icomoon-ignore">
                                            </g>
                                            <path
                                                d="M618.080 320h-75.904v-6.56c-3.456-141.888-119.168-255.872-261.408-255.872-144.48 0-261.568 117.504-261.568 262.432s117.088 262.368 261.568 262.368c60.736 0 116.64-20.8 161.056-55.616l-44.992-48.128c-32.512 23.936-72.64 38.176-116.064 38.176-108.352 0-196.192-88.128-196.192-196.8s87.84-196.8 196.192-196.8c106.144 0 192.576 84.576 196 190.24v6.56h-85.504l111.808 124.608 115.008-124.608z"></path>
                                        </svg>
                                    </button>
                                </li>
                                <li>
                                    <Link className='game-page__link' to='/'>Вернуться на главную</Link>
                                </li>
                            </ul>
                            <FieldGame
                                animals={animals}
                                onChangeAnimal={onChangeAnimal}
                                detected={detected}
                            />
                        </>
                    )}
            </div>
        </div>
    );
};

export default Game;
