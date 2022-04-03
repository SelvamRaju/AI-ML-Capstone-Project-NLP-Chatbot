import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http: HttpClient) { }
  /* getMessage(){    
   return this.http.get("https://9ccf-34-139-142-56.ngrok.io/accident-prediction");
  } */

  postMessage(messageFromUser: any) {    
    this.http.post<any>('https://9ccf-34-139-142-56.ngrok.io/accident-prediction-post', { message: messageFromUser }).subscribe(data => {
      console.log("POST SUCCESS : ", data);
      return new Promise(resolve => {
        resolve(data.data.message);
    });
    })
   }

}

