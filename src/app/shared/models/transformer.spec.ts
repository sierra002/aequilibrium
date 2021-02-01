import {Transformer} from './transformer';

describe('Transformer', () => {
  it('should return the expected overallRating', () => {
    const transformer = new Transformer('', 1, 1, 1, 1, 1, 1, 1, 1);
    expect(transformer.overallRating()).toEqual(5);
  });
});
