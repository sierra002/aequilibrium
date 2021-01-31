import {CastleService} from './castle.service';

describe('Castle Service', () => {
  let service: CastleService;

  beforeEach(() => {
    service = new CastleService();
  });


  describe('picksAndValleys', () => {
    let array;
    it('should find one valley', () => {
      array = [6, 1, 4];
      expect(service.picksAndValleys(array)).toEqual({peak: 0, valley: 1});
    });

    it('should find one peak', () => {
      array = [2, 6, 6, 6, 3];
      expect(service.picksAndValleys(array)).toEqual({peak: 1, valley: 0});
    });

    it('should find one peak and one valley', () => {
      array = [2, 6, 6, 6, 3, 5];
      expect(service.picksAndValleys(array)).toEqual({peak: 1, valley: 1});
    });
  });
});
