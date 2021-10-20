import './FieldGame.scss'
import FieldGameCard from "./FieldGameCard/FieldGameCard";

const FieldGame = props => {
    const {animals, onChangeAnimal, detected} = props
    return (
        <div className="field-game"
             style={detected ? {pointerEvents: 'none'} : null}>
            {animals.map((animal, idx) => {
                return (
                    <FieldGameCard
                        animal={animal}
                        key={idx}
                        onChangeAnimal={() => onChangeAnimal(idx)}
                    />
                )
            })}
        </div>
    );
};

export default FieldGame;
