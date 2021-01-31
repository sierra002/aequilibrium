import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fight-result',
  templateUrl: './fight-result.component.html',
  styleUrls: ['./fight-result.component.scss']
})
export class FightResultComponent implements OnInit {

  @Input() title;
  @Input() results;

  constructor() {
  }

  ngOnInit(): void {
  }

}
