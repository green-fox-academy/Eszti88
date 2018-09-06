
import { Pokemon } from "./pokemon";

'use strict';

let wildPokemon: Pokemon = new Pokemon('Oddish', 'leaf', 'water');
let pokemonOfAsh: Pokemon[] = initializePokemon();

function initializePokemon(): Pokemon[] {
  return [
    new Pokemon('Bulbasaur', 'leaf', 'water'),
    new Pokemon('Pikatchu', 'electric', 'water'),
    new Pokemon('Charizard', 'fire', 'leaf'),
    new Pokemon('Bulbasaur', 'water', 'fire'),
    new Pokemon('Kingler', 'water', 'fire')
  ];
}

function chooseMe(inputPokemon: Pokemon[]): string {
  let theOne: string = '';
  for (let i: number = 0; i < inputPokemon.length; i++) {
    if (inputPokemon[i]['effectiveAgainst'] === 'leaf') {
      theOne = inputPokemon[i]['name'];
    }
  }
  return theOne;
}

console.log(chooseMe(pokemonOfAsh) + ', I choose you!');
