import { HomeComponent } from './../home.component';
import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-Escena',
  templateUrl: './Escena.component.html',
  styleUrls: ['./Escena.component.css']
})
export class EscenaComponent  {
  @Input() frasesHistoria: string[] ;
  
  currentSentence: number = 0;

  constructor(){
    this.frasesHistoria = [];
    this.currentSentence = 0;
  }



  prev(): void {
    if (this.currentSentence >= 0){
    this.currentSentence --;
  }
   }
  
   next(): void {
     if(this.currentSentence < this.frasesHistoria.length-1){
      this.currentSentence ++;
     }
    
  }

 

}
