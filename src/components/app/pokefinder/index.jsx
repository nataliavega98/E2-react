import React, { useState } from 'react'

export default function Pokefinder() {

    const [form, setForm] = useState('')
    const [pokemon, setPokemon] = useState()

    async function buscarPokemon() {
        try{
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${form.toLowerCase()}`)
            const data = await response.json()
            setPokemon(data)
        } catch (error) {
            alert('Tu pokemon no existe. Por favor intentelo nuevamente.')
        }
    }

    return (
        <div>
            <label for='pokemon'>Buscá un Pokemon</label>
            <input type='text' name='pokemon' value={form} onChange={(event) => setForm(event.target.value)} />
            <button onClick={() => buscarPokemon()}>Buscar</button>

            {pokemon &&
                <div>
                    <img src={pokemon.sprites.other.home.front_default} />
                    <h4>{pokemon.name.toUpperCase()}</h4>
                </div>
            }
        </div>
    )
}
