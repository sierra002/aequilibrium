import {CastlesComponent} from './castles.component';
import {CastleService} from '../../shared/services/castle.service';

describe('castlesComponent', () => {
  let component: CastlesComponent;
  let castleService: CastleService | any;

  beforeEach(() => {
    castleService = {
      picksAndValleys: () => {}
    };
    component = new CastlesComponent(castleService);
  });

  describe('setValue', () => {
    it('should set the form value', () => {
      component.setValue([1]);
      expect(component.control.value).toEqual('[1]');
    });
  });

  describe('run', () => {
    it('should call picksAndValleys with expected args', () => {
      component.setValue([1]);
      spyOn(castleService, 'picksAndValleys').and.callThrough();
      component.run();
      expect(castleService.picksAndValleys).toHaveBeenCalledWith([1]);
    });
  });
});
