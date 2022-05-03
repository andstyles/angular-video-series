import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }

  logMessage(msg: string): void {
    console.log(msg);
  }
}
