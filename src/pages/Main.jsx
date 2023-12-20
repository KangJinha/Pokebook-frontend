import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import styled from "styled-components";

const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        const allPokeData = [];
        for (let i = 1; i <= 12; i++) {
            const response = await axios.get(
                `https://pokeapi.co/api/v2/pokemon/${i}`
            );
            const speciesResponse = await axios.get(
                `https://pokeapi.co/api/v2/pokemon-species/${i}`
            ); //한국어이름가져오기위해 일단 species데이터를 가져온다
            const koreanName = speciesResponse.data.names.find(
                (name) => name.language.name === "ko"
            ); //위에서 가져온 한국어데이터로 language.name이 ko인 데이터를 찾아온다
            allPokeData.push({
                ...response.data,
                korean_name: koreanName.name,
            });
        }
        setPokeData(allPokeData);
    };

    useEffect(() => {
        // 데이터를 받아오면 로딩을 false로 만들어줌
        setLoading(true);
        fetchData();
        setLoading(false);
    }, []);

    return (
        <>
        <StyledMain>
            <div id="container">
                <div className="sidebar">
                    <img
                        src="pokemon.png"
                        alt="Logo Pokédex"
                        width={250}
                        height={100}
                    />
                    {/* nav부분 포켓몬 속성정보 */}
                    <nav className="nav">
                        <li className="nav-item">
                            <button className="btn btn-sidebar" id="all">
                                all
                            </button>
                        </li>
                        <ul className="nav-list">
                            <li className="nav-item">
                                <button
                                    className="btn btn-sidebar normal"
                                    id="normal"
                                >
                                    normal
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="btn btn-sidebar fire"
                                    id="fire"
                                >
                                    fire
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="btn btn-sidebar water"
                                    id="water"
                                >
                                    water
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="btn btn-sidebar grass"
                                    id="grass"
                                >
                                    grass
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="btn btn-sidebar electric"
                                    id="electric"
                                >
                                    electric
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="btn btn-sidebar ice"
                                    id="ice"
                                >
                                    ice
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="btn btn-sidebar fighting"
                                    id="fighting"
                                >
                                    Fighting
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="btn btn-sidebar poison"
                                    id="poison"
                                >
                                    poison
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="btn btn-sidebar ground"
                                    id="ground"
                                >
                                    ground
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="btn btn-sidebar flying"
                                    id="flying"
                                >
                                    flying
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="btn btn-sidebar psychic"
                                    id="psychic"
                                >
                                    Psychic
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="btn btn-sidebar bug"
                                    id="bug"
                                >
                                    Bug
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="btn btn-sidebar rock"
                                    id="rock"
                                >
                                    rock
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="btn btn-sidebar ghost"
                                    id="ghost"
                                >
                                    ghost
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="btn btn-sidebar dark"
                                    id="dark"
                                >
                                    dark
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="btn btn-sidebar dragon"
                                    id="dragon"
                                >
                                    dragon
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="btn btn-sidebar steel"
                                    id="steel"
                                >
                                    steel
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="btn btn-sidebar fairy"
                                    id="fairy"
                                >
                                    fairy
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
                <main>
                    <div>
                    <StyledCard>
                        <div className="pokemon-all" id="readyPokemon">
                            <Card pokeData={pokeData} loading={loading} />
                        </div>
                    </StyledCard>
                    </div>
                </main>
            </div>
            </StyledMain>
        </>
    );
};

export default Main;

const StyledCard = styled.div`
    .pokemon-all {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
} 
.pokemon:hover{
    scale: 1.01;
    transition: all 0.2s;
}

@media screen and (min-width: 500px) {
    .pokemon-all {
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (min-width: 800px) {
    .pokemon-all {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

.pokemon {
    display: flex;
    padding-block: 2rem;
    border-radius: 1rem;
    background-color: rgb(251, 251, 251);
    box-shadow: 0 1rem 3rem -2rem rgba(0, 0, 0, 0.25);
    text-transform: uppercase;
    position: relative;
    isolation: isolate;
    overflow: hidden;
}

/* 번호를 배경효과를 주고 싶을때 isolation,
div 밖으로 넘치지 않도록 하고 싶을때 div밖으로가면 잘림 overflow */

.pokemon-id-back {
    position: absolute;
    top: 1rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 6rem;
    font-weight: 800;
    z-index: -1;
    color: var(--clr-gray);
}

.pokemon-image {
    padding-inline: 1rem;
    display: flex;
    justify-content: center;
}

.pokemon-image img {
    width: 100%;
    max-width: 6rem;
}

.pokemon-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding-inline: 1rem;
    align-items: center;
    text-align: center;
}

.name-contenedor {
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
}

.pokemon-id {
    background-color: var(--clr-gray);
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    font-size: 0.75rem;
    font-weight: 500;
}

.pokemon-name {
    font-size: 1.4rem;
}

.pokemon-types {
    display: flex;
    gap: 0.5rem;
    font-size: 0.75rem;
    font-weight: 500;
    flex-wrap: wrap;
    justify-content: center;
}

.type {
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
}

.pokemon-stats {
    display: flex;
    gap: 1rem;
    font-size: 0.85rem;
}

.stat {
    background-color: var(--clr-gray);
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
}
`
const StyledMain = styled.div`   

    --clr-black: #1c1c1c;
    --clr-gray: #ececec;
    --clr-white: #f7f7f7;
    --type-normal: #a8a878;
    --type-fire: #f08030;
    --type-water: #6890f0;
    --type-grass: #78c850;
    --type-electric: #f8d030;
    --type-ice: #98d8d8;
    --type-fighting: #c3504a;
    --type-poison: #a040a0;
    --type-ground: #e0c068;
    --type-flying: #a890f0;
    --type-psychic: #f76f98;
    --type-bug: #a8b820;
    --type-rock: #b8a038;
    --type-ghost: #705898;
    --type-dark: #705848;
    --type-dragon: #7a43fa;
    --type-steel: #b8b8d0;
    --type-fairy: #f0b6bc;

#all {
    width: 300px;
}
.normal {
    background-color: var(--type-normal);
    color: var(--clr-white);
}

.fire {
    background-color: var(--type-fire);
    color: var(--clr-white);
}

.water {
    background-color: var(--type-water);
    color: var(--clr-white);
}

.grass {
    background-color: var(--type-grass);
    color: var(--clr-white);
}

.electric {
    background-color: var(--type-electric);
    color: var(--clr-white);
}

.ice {
    background-color: var(--type-ice);
    color: var(--clr-white);
}

.fighting {
    background-color: var(--type-fighting);
    color: var(--clr-white);
}

.poison {
    background-color: var(--type-poison);
    color: var(--clr-white);
}

.ground {
    background-color: var(--type-ground);
    color: var(--clr-white);
}

.flying {
    background-color: var(--type-flying);
    color: var(--clr-white);
}

.psychic {
    background-color: var(--type-psychic);
    color: var(--clr-white);
}

.bug {
    background-color: var(--type-bug);
    color: var(--clr-white);
}

.rock {
    background-color: var(--type-rock);
    color: var(--clr-white);
}

.ghost {
    background-color: var(--type-ghost);
    color: var(--clr-white);
}

.dark {
    background-color: var(--type-dark);
    color: var(--clr-white);
}

.dragon {
    background-color: var(--type-dragon);
    color: var(--clr-white);
}

.steel {
    background-color: var(--type-steel);
    color: var(--clr-white);
}

.fairy {
    background-color: var(--type-fairy);
    color: var(--clr-white);
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
}
button {
    background-color: transparent;
    border: 0;
    border-radius: 0;
}
body {
    min-height: 100vh;
    /* background-color: white; */
}
div#container {
    display: flex;
}
.sidebar {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 90%;
    padding-block: 1rem;
    box-shadow: 0 0 1rem -1rem rgba(0, 0, 0, 0.5);
}

.nav {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* align-items: flex-start; */
    padding: 2rem;
}

.nav-list {
    gap: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-content: center;
}
.nav-item {
    margin: auto;
}

.btn-sidebar {
    padding: 1rem;
    width: 100px;
    border-radius: 100px;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 600;
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
    transition: 0.2s;
}

.btn-sidebar:hover {
    transform: scale(1.1);
    box-shadow: 0 0 2rem rgba(0, 0, 0, 0.25);
}

main {
    margin-left: 30%;
    padding: 2rem;
    max-width: 1000px;
    /* margin: 0 auto; */
}
`;