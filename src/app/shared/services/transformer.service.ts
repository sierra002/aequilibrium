import {Injectable} from '@angular/core';
import {specialNames, Transformer} from "../models/transformer";


@Injectable({
  providedIn: 'root'
})
export class TransformerService {

  constructor() {
  }

  transformerBattle(autobots: Transformer[], decepticons: Transformer[]) {
    autobots.sort(this.sortTransformerGroup)
    decepticons.sort(this.sortTransformerGroup)
    const winners = {
      autobots: [],
      decepticons: []
    }
    const losers = {
      autobots: [],
      decepticons: []
    }
    const dontFight = {
      autobots: [],
      decepticons: []
    }

    for (let i = 0; i < autobots.length; i++) {
      if (decepticons.length === i) {
        this.pushDontFight(dontFight.autobots, autobots, i);
        break;
      }
      if (this.transformerVs(autobots[i], decepticons[i])) {
        winners.autobots.push(autobots[i]);
        losers.decepticons.push(decepticons[i])
      }
      if (this.transformerVs(autobots[i], decepticons[i]) === false) {
        winners.decepticons.push(decepticons[i]);
        losers.autobots.push(autobots[i]);
      } else {
        losers.autobots.push(autobots[i]);
        losers.decepticons.push(decepticons[i]);
      }
    }

    if (decepticons.length > autobots.length) {
      this.pushDontFight(dontFight.decepticons, decepticons, autobots.length)
    }
    return {winners, losers, dontFight}
  }

  private pushDontFight(dontFight: Transformer[], transformers: Transformer[], index) {
    for (let i = index; i < transformers.length; i++) {
      dontFight.push(transformers[i])
    }
  }

  private sortTransformerGroup(a: Transformer, b: Transformer) {
    if (a.rank > b.rank) {
      return 1;
    }
    if (a.rank < b.rank) {
      return -1;
    }
    return 0;
  }


  transformerVs(transformerA: Transformer, transformerB: Transformer): boolean {
    let winner = this.specialRulesValidation(transformerA, transformerB)
    if (winner !== undefined) return winner;
    return this.checkRules(transformerA, transformerB)
  }

  private checkRules(a: Transformer, b: Transformer): boolean {
    const courageDifference = 3;
    const strengthDifference = 2;
    const skillDifference = 2;
    if (b.courage - courageDifference > a.courage && b.strength - strengthDifference > a.strength) {
      return false;
    }

    if (a.courage - courageDifference > b.courage && a.strength - strengthDifference > b.strength) {
      return true;
    }
    if (b.skill - skillDifference > a.skill) {
      return false;
    }
    if (a.skill - skillDifference > b.skill) {
      return true;
    }
    return a.overallRating() > b.overallRating() ? true : b.overallRating() > a.overallRating() ? false : null;
  }

  private specialRulesValidation(a: Transformer, b: Transformer): boolean {
    let {aName, bName} = {aName: a.name.toLowerCase(), bName: b.name.toLowerCase()}
    if (specialNames[aName] && specialNames[bName]) {
      throw new Error('All competitors destroyed')
    }
    if (specialNames[aName]) {
      return true;
    }
    if (specialNames[bName]) {
      return false;
    }
    return undefined;
  }
}
