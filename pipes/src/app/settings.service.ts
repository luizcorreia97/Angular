import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {

  constructor() { }

  getLocal(){
    return 'pt-BR';
  }

}
