import {TransformerService} from "./transformer.service";

describe('Transformer Service', () => {
  let service;

  beforeEach(() => {
    service = new TransformerService();
  });

  it('should exist', () => {
    expect(service).toBeTruthy();
  });
});
