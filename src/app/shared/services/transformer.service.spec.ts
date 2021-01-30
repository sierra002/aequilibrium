import {TransformerService} from './transformer.service';
import {Transformer} from "../models/transformer";

describe('TransformerService', () => {
  let service: TransformerService;
  let autobots, decepticons;
  let transformerA, transformerB;

  beforeEach(() => {
    service = new TransformerService();
    /*autobots = [new Transformer('sebas', 10, 10, 10, 10, 10, 10, 10, 10),
      new Transformer('sebas1', 10, 10, 10, 10, 9, 10, 10, 10),
      new Transformer('sebas2', 10, 10, 10, 10, 8, 10, 10, 10),
      new Transformer('sebas3', 10, 10, 10, 10, 7, 10, 10, 10)];*/
    /*decepticons = [new Transformer('villa', 5, 5, 5, 5, 6, 5, 5, 5)]*/
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('only one fighter', () => {
    it('should set sebas as winner', () => {
      transformerA = new Transformer('Sebas', 6, 6, 6, 6, 6, 6, 6, 6)
      transformerB = new Transformer('SebasB', 3, 6, 6, 6, 6, 2, 6, 6)
      expect(service.transformerVs(transformerA, transformerB)).toEqual(jasmine.objectContaining({}))
    });
  });
});
