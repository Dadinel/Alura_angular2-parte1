import { Component/*, Inject*/ } from '@angular/core';
import { Http } from '@angular/http';

@Component({
	moduleId: module.id,
	selector: 'app',
	templateUrl: './app.component.html'
})
export class AppComponent {
	/*constructor( @Inject(Http) http) {
		//let http = new Http();
	}*/

	//foto: Array<Object> = [];
	//fotos: Object[] = []; 

	/*constructor( http : Http ) {
		//Forma padrão
		//http
		//.get('v1/fotos')
		//.subscribe( res => {
		//	this.fotos = res.json();
		//});

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
	}*/
}