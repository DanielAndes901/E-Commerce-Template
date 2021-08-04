import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ECTEMPLATE-Rating',
  templateUrl: './Rating.component.html',
  styleUrls: ['./Rating.component.scss']
})
export class RatingComponent implements OnInit {

   @Input() rate : any;

   constructor() { }

   ngOnInit() {
   }

}
