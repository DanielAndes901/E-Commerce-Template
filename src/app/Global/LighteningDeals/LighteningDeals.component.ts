import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ECTEMPLATE-LighteningDeals',
  templateUrl: './LighteningDeals.component.html',
  styleUrls: ['./LighteningDeals.component.scss']
})
export class LighteningDealsComponent implements OnInit {

   @Input() lighteningDeals : any;

   constructor() { }

   ngOnInit() {
   }

}
