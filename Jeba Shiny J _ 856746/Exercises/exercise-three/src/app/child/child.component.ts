import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{

  @Input()
  clear: boolean = false;

  likeCount : number = 1;
  dislikeCount : number = 1;


  @Output()
  likeButton : EventEmitter<number> = new EventEmitter<number>();

  @Output()
  dislikeButton : EventEmitter<number> = new EventEmitter<number>();

  handleLike(){
    if(this.clear == true ){
      this.likeCount = 1;
      this.dislikeCount = 1;
      this.clear = false;
    }
    this.likeButton.emit(this.likeCount++);
  }

  handleDislike(){
    if(this.clear == true ){
      this.likeCount = 1;
      this.dislikeCount = 1;
      this.clear = false;
    }
    this.dislikeButton.emit(this.dislikeCount++);
  }

  
}
