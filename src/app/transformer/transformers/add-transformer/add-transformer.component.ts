import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Transformer} from '../../../shared/models/transformer';

@Component({
  selector: 'app-add-transformer',
  templateUrl: './add-transformer.component.html',
  styleUrls: ['./add-transformer.component.scss']
})
export class AddTransformerComponent implements OnInit {
  form: FormGroup;

  constructor(private modal: NgbActiveModal) {
    this.form = new FormGroup({
      name: new FormControl(''),
      strength: new FormControl(0),
      intelligence: new FormControl(0),
      speed: new FormControl(0),
      endurance: new FormControl(0),
      rank: new FormControl(0),
      courage: new FormControl(0),
      firePower: new FormControl(0),
      skill: new FormControl(0),
    });
  }

  ngOnInit(): void {
  }

  save(type: string): void {
    const transformer = Transformer.TransformerFactory(this.form.value);
    this.modal.close({transformer, type});
  }

}
