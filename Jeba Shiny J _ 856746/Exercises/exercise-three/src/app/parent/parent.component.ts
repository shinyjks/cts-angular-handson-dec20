import { Component} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{

  likes : number = undefined;
  dislikes : number = undefined;
  
  handleClear(){
    this.likes = 0;
    this.dislikes = 0;
  }
}
