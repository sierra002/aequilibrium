import {TransformerService} from "./transformer.service";
import {Transformer} from "../models/transformer";

describe('Transformer Service', () => {
  let service: TransformerService;
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
      expect(service.transformerVs(transformerA, transformerB)).toEqual(true)
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
          service.transformerVs(transformerC, transformerD)
        } catch (e) {
          expect(e.message).toEqual("All competitors destroyed");
        }
      });
    });
  });
});
