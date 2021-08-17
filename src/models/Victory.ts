import { Player } from './Player';
import { Result } from './Result';
import { Entity } from './Entity';

export interface Victory extends Entity {
  type: string;
  result: Result;
  resultId: string;
  winner: Player;
  winnerId: string;
  loser: Player;
  loserId: string;
};
