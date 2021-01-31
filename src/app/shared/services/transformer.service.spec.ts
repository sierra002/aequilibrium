import {TransformerService} from './transformer.service';
import {Transformer} from '../models/transformer';

describe('Transformer Service', () => {
  let service: TransformerService;
  // tslint:disable-next-line:one-variable-per-declaration
  let transformerA, transformerB: Transformer;

  beforeEach(() => {
    service = new TransformerService();
  });

  it('should exist', () => {
    expect(service).toBeTruthy();
  });

  describe('transformerVs', () => {
    beforeEach(() => {
      transformerA = new Transformer('sebas', 4, 4, 4, 4, 4, 4, 4, 4);
      transformerB = new Transformer('sebas2', 1, 4, 4, 4, 4, 0, 4, 4);
    });
    it('a fighter has more than 4 courage points and 3 more strength he win', () => {
      expect(service.transformerVs(transformerA, transformerB)).toEqual(true);
    });
    it('should win if one has more overall rating', () => {
      transformerB.strength = 5;
      transformerB.courage = 4;
      expect(service.transformerVs(transformerA, transformerB)).toEqual(false);
    });
    it('should win if has 3 more points of skill', () => {
      transformerB.skill = 7;
      transformerB.strength = 4;
      transformerB.courage = 4;
      expect(service.transformerVs(transformerA, transformerB)).toEqual(false);
    });
    it('should set a tie (null) if both transformers have the same stats', () => {
      transformerB.strength = 4;
      transformerB.courage = 4;
      expect(service.transformerVs(transformerA, transformerB)).toEqual(null);
    });
    describe('special rules', () => {
      // tslint:disable-next-line:one-variable-per-declaration
      let transformerC, transformerD;
      beforeEach(() => {
        transformerC = new Transformer('Optimus Prime', 0, 0, 0, 0, 0, 0, 0, 0);
        transformerD = new Transformer('predaking', 0, 0, 0, 0, 0, 0, 0, 0);
      });
      it('should win if name is optimus prime or predaking', () => {
        expect(service.transformerVs(transformerC, transformerA)).toEqual(true);
        expect(service.transformerVs(transformerD, transformerB)).toEqual(true);
      });

      it('should throw an exception if 2 super transformers fight', () => {
        try {
          service.transformerVs(transformerC, transformerD);
        } catch (e) {
          expect(e.message).toEqual('All competitors were destroyed');
        }
      });
    });
  });


  describe('transformerBattle', () => {
    // tslint:disable-next-line:one-variable-per-declaration
    let a, b, c, d, e: Transformer;
    // tslint:disable-next-line:one-variable-per-declaration
    let autobots, decepticons;
    beforeEach(() => {
      autobots = [];
      decepticons = [];
      a = new Transformer('sebas', 4, 4, 4, 4, 4, 4, 4, 4);
      b = new Transformer('sebas2', 1, 4, 4, 4, 4, 0, 4, 4);
      c = new Transformer('Optimus Prime', 10, 6, 8, 8, 8, 9, 8, 10);
      d = new Transformer('sebas3', 1, 4, 4, 4, 4, 0, 4, 4);
      e = new Transformer('loser', 0, 0, 0, 0, 10, 0, 0, 0);
    });

    it('should return autobots with more wins', () => {
      autobots.push(a, c);
      decepticons.push(d, e, b);
      const results = {
        dontFight: {
          autobots: [],
          decepticons: [
            {
              courage: 0,
              endurance: 4,
              firePower: 4,
              intelligence: 4,
              name: 'sebas2',
              rank: 4,
              skill: 4,
              speed: 4,
              strength: 1
            }
          ]
        },
        losers: {
          autobots: [],
          decepticons: [
            {
              courage: 0,
              endurance: 0,
              firePower: 0,
              intelligence: 0,
              name: 'loser',
              rank: 10,
              skill: 0,
              speed: 0,
              strength: 0
            },
            {
              courage: 0,
              endurance: 4,
              firePower: 4,
              intelligence: 4,
              name: 'sebas3',
              rank: 4,
              skill: 4,
              speed: 4,
              strength: 1
            }
          ]
        },
        winners: {
          autobots: [
            {
              courage: 9,
              endurance: 8,
              firePower: 8,
              intelligence: 6,
              name: 'Optimus Prime',
              rank: 8,
              skill: 10,
              speed: 8,
              strength: 10
            },
            {
              courage: 4,
              endurance: 4,
              firePower: 4,
              intelligence: 4,
              name: 'sebas',
              rank: 4,
              skill: 4,
              speed: 4,
              strength: 4
            }
          ],
          decepticons: []
        }
      };
      expect(service.transformerBattle(autobots, decepticons)).toEqual(results);
    });
  });
});
