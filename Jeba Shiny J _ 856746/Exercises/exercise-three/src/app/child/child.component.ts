import { Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent{

  @Input()
  clearLike: number = undefined;
  
  @Input()
  clearDislike: number = undefined;

  likeCount : number = 1;
  dislikeCount : number = 1;


  @Output()
  likeButton : EventEmitter<number> = new EventEmitter<number>();

  @Output()
  dislikeButton : EventEmitter<number> = new EventEmitter<number>();

  handleLike(){
    if(this.clearLike == 0){
      this.likeCount = 1;
      this.clearLike = undefined;
    }
    this.likeButton.emit(this.likeCount++);
  }

  handleDislike(){
    if(this.clearDislike == 0){
      this.dislikeCount = 1;
      this.clearDislike = undefined;
    }
    this.dislikeButton.emit(this.dislikeCount++);
  }

  
}
