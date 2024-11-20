import react, {useEffect, useState} from 'react';
import Card from 'react-bootstrap/Card';
import Figure from 'react-bootstrap/Figure';
import ListGroup from 'react-bootstrap/ListGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getPokemon } from '../controller/getpokemon';
import { Pokemon } from '../models/pokemon.m';

const Listado = () => {

    const [pokemones, setPokemones] = useState<Pokemon[]>([]);
    const [query, setQuery] = useState("");

    useEffect(()=> {
      const ObtenerTodos = async () => {
        const allPokemones = await getPokemon();
        setPokemones(allPokemones);
      }
      ObtenerTodos();
    });

    const filtrarpokemon = pokemones?.slice(0,151).filter((pokemon) => {
      return pokemon.name.toLowerCase().match(query.toLowerCase());
    })

    return (
        <>
        <h1>Pokemon APP</h1>
        <header>
          <input 
          type="text"
          placeholder='Buscar Pokemon' 
          value={query} 
          onChange={(event) => setQuery(event.target.value.trim())} /> 
        </header>
        <div className='content-wrapper'>
          <div className="content">
            <div className="row gap-3">

            {filtrarpokemon?.slice(0,80).map((pokemon)=>(
                 <Card className='mx-auto' style={{ width: '18rem' }}>
                 <Card.Header><strong>Tipo: </strong>{pokemon.type} </Card.Header>
                 <Card.Img variant="top" className='d-block mx-auto w-50' src={pokemon.imggif} />
                 <Card.Body>
                 <Card.Title className='text-center'>{pokemon.name}</Card.Title>
                 <ListGroup variant="flush">
                 <ListGroup.Item>
                    <Figure.Image 
                    width={16}
                    height={16}
                    src='https://cdn-icons-png.flaticon.com/128/833/833472.png'
                    />
                    <strong> HP:</strong> {pokemon.hp} </ListGroup.Item>
                 <ListGroup.Item>
                 <Figure.Image 
                    width={16}
                    height={16}
                    src='https://cdn-icons-png.flaticon.com/512/3522/3522092.png'
                    />
                  <strong> Ataque:</strong>  {pokemon.attack} </ListGroup.Item>
                 <ListGroup.Item>
                 <Figure.Image 
                    width={16}
                    height={16}
                    src='https://cdn-icons-png.flaticon.com/512/929/929429.png'
                    />
                  <strong> Defense:</strong>  {pokemon.defense} </ListGroup.Item>
                 <ListGroup.Item>
                 <Figure.Image 
                    width={16}
                    height={16}
                    src='https://cdn-icons-png.flaticon.com/512/1671/1671062.png'
                    />
                  <strong> Ataque especial:</strong>  {pokemon.sp_atk} </ListGroup.Item>
                 <ListGroup.Item>
                 <Figure.Image 
                    width={16}
                    height={16}
                    src='https://cdn-icons-png.flaticon.com/512/1671/1671062.png'
                    />
                  <strong> Defensa especial:</strong>  {pokemon.sp_def} </ListGroup.Item>
                 <ListGroup.Item>
                 <Figure.Image 
                    width={16}
                    height={16}
                    src='https://cdn-icons-png.flaticon.com/512/8853/8853763.png'
                    />
                  <strong> Velocidad:</strong>  {pokemon.speed} </ListGroup.Item>
                 </ListGroup>
                 </Card.Body>
                 </Card>
                 
            ))};
          </div>
          </div>
        </div>
       
        </>
    )
}

export default Listado;


