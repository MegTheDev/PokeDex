import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const pokeUrl = 'https://pokeapi.co/api/v2/pokemon';

@Injectable({ providedIn: 'root' })
export class PokemonHttpService {
    constructor(private http: HttpClient) { }


    getPokemonByName(name) {
        return this.http.get(`${pokeUrl}/${name}`);
    }
}