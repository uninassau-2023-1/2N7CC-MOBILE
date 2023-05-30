import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Exame {

  atendido: any;
  id: string;
  data_exame: Date;
  hora_atendimento: string;
  senha_atual: string;
  senha_anterior: string;
}

@Injectable({
  providedIn: 'root'
})
export class ExameService {

  private url = 'http://localhost:8050/retirada_exame';

  constructor(private http: HttpClient) { }

  create(exame: Exame) {

    return this.http.post(this.url, exame);
  }

  getAll() {

    return this.http.get<[Exame]>(this.url);
  }

  remove(id:any){

    return this.http.delete(this.url + '/' + id);
  }

  update(exame: Exame, id: any) {

    return this.http.put(this.url + '/' + id, exame);

  }
}
