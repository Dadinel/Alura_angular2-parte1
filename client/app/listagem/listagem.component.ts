import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	moduleId: module.id,
	selector: 'listagem',
	templateUrl: 'listagem.component.html'
})
export class ListagemComponent {
	fotos: Object[] = []; 

	constructor( http : Http ) {
		http
		.get('v1/fotos')
		.map( res => res.json() )
		.subscribe(
			fotos => {
				this.fotos = fotos;
				console.log( fotos );
			},
			erro => {
				console.log( erro );
			}
		);

		/*http
		.delete( 'v1/fotos/3a7o7wal825mrTet' )
		.subscribe( ok => { console.log( ok ) } ,
			erro => {
				console.log( erro );
			}
		);*/
	}
}