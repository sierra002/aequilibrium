import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {FormValidators} from "../../shared/form-validators/form-validators";
import {CastleService} from "../../shared/services/castle.service";
import {CastleLocation} from "../../shared/models/castle-location";

@Component({
  selector: 'app-castles',
  templateUrl: './castles.component.html',
  styleUrls: ['./castles.component.scss']
})
export class CastlesComponent implements OnInit {
  control = new FormControl([], [FormValidators.isArray])
  examples = [
    [2, 6, 6, 6, 3],
    [6, 1, 4],
    [6, 1, 4, 5, 1]
  ]
  possibleCastles: CastleLocation;

  constructor(private castleService: CastleService) {
  }

  ngOnInit(): void {
    this.control.valueChanges.subscribe((value) => {
      console.log(value);
    })
  }

  setValue(val) {
    this.control.setValue(JSON.stringify(val))
  }

  run() {
    this.possibleCastles = this.castleService.picksAndValleys(JSON.parse(this.control.value));
    console.log(this.possibleCastles)
  }

}
