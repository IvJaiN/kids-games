import './Start.scss'

import all from '../../images/all.png'
import {Link} from "react-router-dom";


const Start = props => {
    const {onChangeNumber, onChangeName, number, name, onSubmit} = props
    return (
        <div className='start screen'>
            <div className="start-screen__container">
                <img className='start-screen__image' src={all} alt=""/>
                <form onSubmit={onSubmit} className='start-screen__form'>
                    <input onChange={onChangeNumber} value={number} type="number" max='12' min='2'  className='start-screen__input' placeholder='Число животных от 2 до 12'/>
                    <input onChange={onChangeName} value={name} type="text" className='start-screen__input' placeholder='Ваше имя:'/>
                    <button className='start-screen__btn' style={(number < 2 || number > 12 || name === '') ? {pointerEvents: 'none'} : null}>
                        <Link to='/game' className='start-screen__link' disabled>Начать игру</Link>
                    </button>
                </form>

            </div>
        </div>
    );
};

export default Start;
