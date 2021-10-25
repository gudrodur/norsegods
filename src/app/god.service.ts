import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { God } from './god';
import { GODS } from './mocke-gods';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GodService {

  constructor(private messageService: MessageService) { }

  /**
   * getGods of(GODS) returns an Observable<God[]> that emits a single value, the array of mock gods.
   */
  getGods(): Observable<God[]> {
    const gods = of(GODS);
    this.messageService.add('GodService: fetched')
    return gods;
  }
  // getHeroes(): Observable<Hero[]> {
  //   const heroes = of(HEROES);
  //   this.messageService.add('HeroService: fetched heroes');
  //   return heroes;
  // }
}
