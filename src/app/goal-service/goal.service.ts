import { Injectable } from '@angular/core';
import { Goals } from '../GoalList';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  getGoals(){
    return Goals
  }

  constructor() { }
}
