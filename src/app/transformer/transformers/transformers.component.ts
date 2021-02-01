import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddTransformerComponent} from './add-transformer/add-transformer.component';
import {TransformerService} from '../../shared/services/transformer.service';

@Component({
  selector: 'app-transformers',
  templateUrl: './transformers.component.html',
  styleUrls: ['./transformers.component.scss']
})
export class TransformersComponent implements OnInit {

  autobots = [];
  decepticons = [];
  fightResults: any;
  fightWinner: string;
  hideFightStats = false;

  constructor(private modalService: NgbModal,
              private transformerService: TransformerService) {
  }

  ngOnInit(): void {
  }

  openModal(): void {
    this.modalService.open(AddTransformerComponent)
      .result.then((result) => {
      if (result.type === 'autobot') {
        this.autobots.push(result.transformer);
      } else {
        this.decepticons.push(result.transformer);
      }
    }).catch(() => {
    });
  }

  fight(): void {
    this.hideFightStats = false;
    try {
      this.fightResults = this.transformerService.transformerBattle(this.autobots, this.decepticons);
      const winners = this.fightResults.winners;

      if (winners.autobots.length > winners.decepticons.length) {
        this.fightWinner = 'Autobots';
      } else if (winners.autobots.length < winners.decepticons.length) {
        this.fightWinner = 'Decepticons';
      } else {
        this.fightWinner = 'It was a tie';
      }
    } catch (e) {
      this.hideFightStats = true;
      this.fightWinner = e.message;
    }

  }

}
