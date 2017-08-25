import { Injectable } from "@angular/core";
import { Player } from "./player";
import * as _ from "lodash";

const PlayersData = [
  {
    firstName: "Stephan",
    lastName: "Curry",
    stats: {
      points: 10,
      rebounds: 3
    }
  },
  {
    firstName: "Lebron",
    lastName: "James",
    stats: {
      points: 4,
      rebounds: 5
    }
  },
  {
    firstName: "Goran",
    lastName: "Dragic",
    stats: {
      points: 55,
      rebounds: 35
    }
  }
];

@Injectable()
export class NbaService {
  search(term: string): Promise<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        let re = new RegExp(`${term}.*`, "i");
        resolve(_.filter(PlayersData, o => o.firstName.match(re)));
      }, 1000);
    });
  }
}
