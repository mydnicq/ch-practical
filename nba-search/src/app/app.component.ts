import { Component } from "@angular/core";
import { Player } from "./player";
import { NbaService } from "./nba.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [NbaService]
})
export class AppComponent {
  title = "app";
  players: Player[];
  private searchTerms: string;

  constructor(private nbaService: NbaService) {}

  async search(term: string): Promise<any> {
    this.players = await this.nbaService.search(term);
  }
}
