import { Component, OnInit, Input } from '@angular/core';
import { God } from '../god';

@Component({
  selector: 'app-gods-detail',
  templateUrl: './gods-detail.component.html',
  styleUrls: ['./gods-detail.component.css']
})
export class GodsDetailComponent implements OnInit {
  @Input() god?: God;

  constructor() { }

  ngOnInit(): void {
  }
}
