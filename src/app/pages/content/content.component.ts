import { Component,Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { sampleData } from '../../data/sampleData';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent  implements OnInit{
  private id:string| null = "0";
  image:string='';
  title:string='';
  content:string='';

  constructor(private route:ActivatedRoute){
  }
  ngOnInit(){
    this.route.paramMap.subscribe(value=>this.id=value.get("id"))
    this.setValues(this.id);
  }

  setValues(id:string| null){
    const result=sampleData.filter(element=>element.id==id)[0];
    this.title=result.title;
    this.content=result.content;
    this.image=result.img;
  }

}
