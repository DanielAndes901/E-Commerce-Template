import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ECTEMPLATE-PageTitle',
  templateUrl: './PageTitle.component.html',
  styleUrls: ['./PageTitle.component.scss']
})
export class PageTitleComponent implements OnInit {

   @Input() heading    : string;
   @Input() subHeading : string;

   constructor() { }

   ngOnInit() {
   }

}
