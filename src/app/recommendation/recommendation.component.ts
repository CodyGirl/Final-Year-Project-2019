import { Component, ViewChild, AfterViewInit, Input, OnInit } from '@angular/core';
import { AuthService, TokenPayload} from '../auth.service'

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit{

  // @Input() parentMessage: string;

  constructor(private auth: AuthService) { }
  message: string;
  ngOnInit() {
  //  this.auth.other();
   
   
 }
  
  
}
