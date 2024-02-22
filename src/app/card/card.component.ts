import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css','../styles.css']
})
export class CardComponent {
  cards=[
    {id:1,img:'./assets/img/azul.jpg',title:'Lorem Ipsum',content:"lorem ipsum"},
    {id:2,img:'./assets/img/vermelho.jpg',title:'Lorem Ipsum',content:"lorem ipsum"},
    {id:3,img:'./assets/img/verde.jpg',title:'Lorem Ipsum',content:"lorem ipsum"},
    {id:4,img:'./assets/img/vermelho.jpg',title:'Undefined',content:"undefined"}
  ];

  @Input() id:number=0;
  index=this.cardExiste();
  img:string=this.cards[this.index].img;
  title:string=this.cards[this.index].title;
  content:string=this.cards[this.index].content;
  @Input() class:string="";

  cardExiste(){
    let index=0
    for(let i=0;i<this.cards.length;i++){
      if(this.id==this.cards[i].id){
        index=i;
      }
    }
    return index;
    
  }
}
