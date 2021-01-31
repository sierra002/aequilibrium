export enum specialNames {
  'optimus prime' = 'optimus',
  'predaking' = 'predaking'
}


export class Transformer {
  constructor(public name: string, public strength: number,
              public intelligence: number,
              public speed: number, public endurance: number,
              public rank: number, public courage: number,
              public firePower: number, public skill: number) {
  }

  static TransformerFactory(data): Transformer {
    return new Transformer(data.name, data.strength, data.intelligence, data.speed,
      data.endurance, data.rank, data.courage, data.firePower, data.skill);
  }

  public overallRating(): number {
    return this.strength + this.intelligence + this.speed + this.endurance + this.firePower;
  }
}
