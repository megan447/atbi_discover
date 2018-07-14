import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-instruction',
  templateUrl: './instruction.component.html',
  styleUrls: ['./instruction.component.scss']
})
export class InstructionComponent implements OnInit {

  @Input()
  content: string;
  @Input()
  images: string[];
  //注入了detail page html里面的post.content &post.image

  array = [ 1, 2, 3, 4 ];

  constructor() { }

  ngOnInit() {
    document.getElementById('content').innerHTML = this.content;
  }



}
