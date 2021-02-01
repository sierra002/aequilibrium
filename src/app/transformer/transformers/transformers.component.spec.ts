import {TransformersComponent} from './transformers.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {TransformerService} from '../../shared/services/transformer.service';

describe('transformerComponent', () => {
  let component;
  let modalService: NgbModal | any;
  let transformerService: TransformerService | any;

  beforeEach(() => {
    modalService = {
      open: () => {
      }
    };
    transformerService = {
      transformerBattle: () => {
      }
    };

    component = new TransformersComponent(modalService, transformerService);
  });

  describe('openModal', () => {
    it('should save depending on type autobot', () => {
      spyOn(modalService, 'open').and.returnValue({
        result: {
          then: (fn) => {
            fn({type: 'autobot', transformer: {}});
            return {
              catch: () => {
              }
            };
          }
        }
      });
      component.openModal();
      expect(component.autobots.length).toEqual(1);
    });
    it('should save depending on type decepticon', () => {
      spyOn(modalService, 'open').and.returnValue({
        result: {
          then: (fn) => {
            fn({type: 'decepticon', transformer: {}});
            return {
              catch: () => {
              }
            };
          }
        }
      });
      component.openModal();
      expect(component.decepticons.length).toEqual(1);
    });
  });

  describe('fight', () => {
    it('should set autobots as winners', () => {
      spyOn(transformerService, 'transformerBattle').and.returnValue({winners: {autobots: [{}], decepticons: []}});
      component.fight();
      expect(component.fightWinner).toEqual('Autobots');
    });
    it('should set decepticons as winners', () => {
      spyOn(transformerService, 'transformerBattle').and.returnValue({winners: {autobots: [], decepticons: [{}]}});
      component.fight();
      expect(component.fightWinner).toEqual('Decepticons');
    });
    it('should set a tie and show results if are hidden', () => {
      component.hideFightStats = true;
      spyOn(transformerService, 'transformerBattle').and.returnValue({winners: {autobots: [], decepticons: []}});
      component.fight();
      expect(component.fightWinner).toEqual('It was a tie');
      expect(component.hideFightStats).toBeFalsy();
    });
    it('should handle error', () => {
      spyOn(transformerService, 'transformerBattle').and.callFake(() => {
        throw new Error('test');
      });
      component.fight();
      expect(component.fightWinner).toEqual('test');
      expect(component.hideFightStats).toBeTruthy();
    });
  });
});
