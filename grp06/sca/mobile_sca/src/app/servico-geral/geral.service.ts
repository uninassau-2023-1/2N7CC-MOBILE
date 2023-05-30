import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Geral {
  atendido: any;

  id: string;
  data_geral: Date;
  hora_atendimento: string;
  senha_atual: string;
  senha_anterior: string;
}

@Injectable({
  providedIn: 'root'
})
export class GeralService {

  private url = 'http://localhost:8050/geral';

  constructor(private http: HttpClient) { }

  create(geral: Geral) {

    return this.http.post(this.url, geral);
  }

  getAll() {

    return this.http.get<[Geral]>(this.url);
  }

  remove(id:any){

    return this.http.delete(this.url + '/' + id);
  }

  update(geral: Geral, id: any) {

    return this.http.put(this.url + '/' + id, geral);

  }
}
