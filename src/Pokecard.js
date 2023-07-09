
import './Pokecard.css'

const address = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

function Pokecard({ id, name, type, baseExperience }) {
    
    let imageURL = `${address}${id}.png`
    
    return (
        <div className="pokecard">
            <h3 className='pokecard-name'>{name}</h3>
            <img className="pokecard-img"  src={imageURL} alt={name} width="95"  />
                <p>Type: {type}</p>
                <p>EXP: {baseExperience}</p>
        </div>
    )
}

export default Pokecard;