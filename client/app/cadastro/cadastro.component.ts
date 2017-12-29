import { Component } from '@angular/core';
import { Http , Headers } from '@angular/http';
import { FotoComponent } from '../foto/foto.component';

@Component({
	moduleId: module.id,
	selector: 'cadastro',
	templateUrl: './cadastro.component.html'
})
export class CadastroComponent {
	foto: FotoComponent = new FotoComponent();
	http: Http;

	constructor(http: Http) {
		this.http = http;
	}

	cadastrar(event) {
		event.preventDefault();

		let header = new Headers();

		header.append( 'Content-Type' , 'application/json' );

		this.http.post(
			'v1/fotos' ,
			JSON.stringify(this.foto) ,
			{ headers : header } )
		.subscribe(
			() => {
			this.foto = new FotoComponent();
			console.log( "Foto salva com sucesso." );
			}
			, erro => console.log( erro ) );
	}
}