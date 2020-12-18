import { Component } from '@angular/core';
import { Torneo } from './torneo';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cuadrangular';
  torneo:Torneo=new Torneo();

  listaTeams=this.torneo.equipos;
  listaResultados=this.torneo.resultados;

  ejecutarTorneo(){
    this.torneo.jugarTorneo();
    (<HTMLInputElement> document.getElementById("botonSimular")).disabled = true;
  }

  reiniciarTorneo(){
    console.log('reiniciar todo')
    window.location.reload();
  }
 
}
