import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BurguerService {

  burguers = [];

  constructor(private http: HttpClient) { 
    this.getBurguers()
  }

  addBurguer(burguer) {
    this.burguers.push(burguer);

    this.http.post('http://localhost:3000/burguers', burguer).subscribe(
      (res: any[]) => alert('Burguer was saved!'),
      (err) => console.error(err)
    )
  }

  getBurguers() {
    this.http.get('http://localhost:3000/burguers').subscribe(
      (res: any[]) => this.burguers = res,
      (err) => console.error(err)
    )
  }

  removeBurguer() {
    // TODO: implement
  }
}
