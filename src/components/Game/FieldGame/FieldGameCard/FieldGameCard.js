import './FieldGameCard.scss'

import cow from '../../../../images/animals/Cow.jpg'
import chicken from '../../../../images/animals/Chicken.jpg'
import dog from '../../../../images/animals/Dog.jpg'
import frog from '../../../../images/animals/Frog.jpg'
import goat from '../../../../images/animals/Goat.jpg'
import goose from '../../../../images/animals/Goose.jpg'
import horse from '../../../../images/animals/Horse.jpg'
import mule from '../../../../images/animals/Mule.jpg'
import pig from '../../../../images/animals/Pig.jpg'
import sheep from '../../../../images/animals/Sheep.jpg'
import tiger from '../../../../images/animals/Tiger.jpg'
import cat from '../../../../images/animals/Cat.jpg'

const FieldGameCard = props => {
    const {name, isActive, isDone} = props.animal

    const classStyle = ['field-game__card']
    if (isActive) classStyle.push('_active')
    if (isDone) classStyle.push('_done')

    let image
    if (name === 'cat') {image = <img style={(isActive) ? {visibility : 'visible'} :null} className='field-game__card-img' src={cat} alt=""/>}
    if (name === 'cow') {image = <img style={(isActive) ? {visibility : 'visible'} : null} className='field-game__card-img' src={cow} alt=""/>}
    if (name === 'chicken') {image = <img style={(isActive) ? {visibility : 'visible'} : null} className='field-game__card-img' src={chicken} alt=""/>}
    if (name === 'dog') {image = <img style={(isActive) ? {visibility : 'visible'} : null} className='field-game__card-img' src={dog} alt=""/>}
    if (name === 'frog') {image = <img style={(isActive) ? {visibility : 'visible'} : null} className='field-game__card-img' src={frog} alt=""/>}
    if (name === 'goat') {image = <img style={(isActive) ? {visibility : 'visible'} : null} className='field-game__card-img' src={goat} alt=""/>}
    if (name === 'goose') {image = <img style={(isActive) ? {visibility : 'visible'} : null} className='field-game__card-img' src={goose} alt=""/>}
    if (name === 'horse') {image = <img style={(isActive) ? {visibility : 'visible'} : null} className='field-game__card-img' src={horse} alt=""/>}
    if (name === 'mule') {image = <img style={(isActive) ? {visibility : 'visible'} : null} className='field-game__card-img' src={mule} alt=""/>}
    if (name === 'pig') {image = <img style={(isActive) ? {visibility : 'visible'} : null} className='field-game__card-img' src={pig} alt=""/>}
    if (name === 'sheep') {image = <img style={(isActive) ? {visibility : 'visible'} : null} className='field-game__card-img' src={sheep} alt=""/>}
    if (name === 'tiger') {image = <img style={(isActive) ? {visibility : 'visible'} : null} className='field-game__card-img' src={tiger} alt=""/>}
    return (
        <div
            className={classStyle.join(' ')}
            onClick={props.onChangeAnimal}
            style={(isDone) ? {
                backgroundColor: 'coral',
                pointerEvents: 'none'
            } : null}
        >
            {image}
        </div>
    );
};

export default FieldGameCard;
