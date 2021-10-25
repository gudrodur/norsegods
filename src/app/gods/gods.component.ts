import { Component, OnInit } from '@angular/core';
import { God } from '../god';
import { GodService } from '../god.service';
@Component({
  selector: 'app-gods',
  templateUrl: './gods.component.html',
  styleUrls: ['./gods.component.css']
})
export class GodsComponent implements OnInit {
  gods: God[] = [];
  selectedGod?: God;

  constructor(private godService: GodService) { }

  ngOnInit(): void {
    this.getGods();
  }
  onSelect(god: God): void {
    this.selectedGod = god;
  }
  /**
   * getGods waits for the Observable to emit the array of gods. The subscribe() method passes the emitted array to the callback, which sets the component's gods property.
   */
  public getGods() {
    this.godService.getGods()
      .subscribe(gods => this.gods = gods);
  }
}
