import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoringService {

  constructor() { }

  async store(storageKey:string,value:any){
    const encryptedValue = btoa(escape(JSON.stringify(value)));
    await localStorage.setItem(
      storageKey,
      encryptedValue
    );
    return true;
  }
  async get(storageKey: string){
    const ret=await localStorage.getItem(storageKey);
    if(ret){
      return JSON.parse(unescape(atob(ret)));
    }
    else{
      return false;
    }
  }
  async removeItem(storageKey: string){
    await localStorage.removeItem(storageKey);
  }
  async clear(){
    await localStorage.clear();
  }
}
