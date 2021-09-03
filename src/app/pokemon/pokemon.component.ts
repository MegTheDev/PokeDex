import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PokemonHttpService } from './pokemon-http.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
    constructor(private pokemonHttpService: PokemonHttpService) { }
    name = new FormControl('');
    pokeDetails;

    ngOnInit(): void {
        console.log('yolo');
    }

    retrievePokemonByName(pokeName) {
        this.pokemonHttpService.getPokemonByName(pokeName)
            .subscribe(res => this.pokeDetails = res);
    }

}
