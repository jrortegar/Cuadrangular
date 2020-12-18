import {Equipo} from './equipo'

export class Torneo {
    equipos: Equipo[]=[
        {name:'Colombia',points:0, goalFavor:0, goalContra:0},
        {name:'Grecia',points:0, goalFavor:0, goalContra:0},
        {name:'Costa de Marfil',points:0, goalFavor:0, goalContra:0},
        {name:'Japon',points:0, goalFavor:0, goalContra:0}
    ];
    resultados:String[]=[];

    getRandomInt(minimo,maximo) {
        return Math.floor(Math.random()*(maximo-minimo))+minimo;
    }


    jugarTorneo(){
        //fecha1
        this.partido(this.equipos[0],this.equipos[1]);
        this.partido(this.equipos[2],this.equipos[3]);
        //fecha2
        this.partido(this.equipos[0],this.equipos[2]);
        this.partido(this.equipos[1],this.equipos[3]);
        //fecha3
        this.partido(this.equipos[0],this.equipos[3]);
        this.partido(this.equipos[2],this.equipos[1]);
        this.equipos.sort(function(a,b){
            if(a.points>b.points){
                return -1;
            }
            if(b.points>a.points){
                return 1;
            }
            if((a.goalFavor-a.goalContra)>(b.goalFavor-b.goalContra)){
                return -1;
            }
            if((b.goalFavor-b.goalContra)>(a.goalFavor-a.goalContra)){
                return 1;
            }
            return 0;
        });
    }

    partido(team1:Equipo, team2:Equipo){
        let num1=this.getRandomInt(0,10);
        let num2=this.getRandomInt(0,10);
        console.log(team1.name+' '+num1+'-'+num2+' '+team2.name)
        this.resultados.push(team1.name+' '+num1+'-'+num2+' '+team2.name)
        team1.goalFavor=team1.goalFavor+num1;
        team2.goalContra=team2.goalContra+num1;
        team2.goalFavor=team2.goalFavor+num2;
        team1.goalContra=team1.goalContra+num2;
        if(num1>num2){
            team1.points=team1.points+3;
        }
        else{
            if(num2>num1){
                team2.points=team2.points+3;
            }
            else{
                team1.points=team1.points+1;
                team2.points=team2.points+1;
            }
        }
    }
}
