import './FinishPage.scss'
import {Link} from "react-router-dom";

const FinishPage = props => {
    const {name, number, counter} = props


    return (
        <div className='finish-page'>
            <h2 className='finish-page__title'>Поздравляем!</h2>
            <h4 className='finish-page__text'>{name} нашел {number} животных за {counter} попыток!</h4>
            <Link to='/' className='finish-page__link'>Вернуться на главную</Link>
        </div>
    );
};

export default FinishPage;
