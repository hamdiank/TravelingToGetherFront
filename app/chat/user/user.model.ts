import { uuid } from '../util/uuid';

/**
 * A User represents an agent that sends messages
 */
export class User {
  

  constructor(public name: string,
              public avatarSrc: string,public idUtilisateur:string) {
    
  }
}
