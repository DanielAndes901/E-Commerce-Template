import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'ECTEMPLATE-MissionVision',
  templateUrl: './MissionVision.component.html',
  styleUrls: ['./MissionVision.component.scss']
})
export class MissionVisionComponent implements OnInit {

   @Input() data : any;
   
   constructor() { }

   ngOnInit() {
   }

}
