
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Prioritaria {

  id: string;
  data_prioritaria: Date;
  hora_atendimento: string;
  senha_atual: string;
  senha_anterior: string;
}

@Injectable({
  providedIn: 'root'
})
export class PrioritariaService {

  private url = 'http://localhost:8050/prioritaria';

  constructor(private http: HttpClient) { }

  create(prioritaria: Prioritaria) {

    return this.http.post(this.url, prioritaria);
  }

  getAll() {

    return this.http.get<[Prioritaria]>(this.url);
  }

  remove(id:any){

    return this.http.delete(this.url + '/' + id);
  }

  update(geral: Prioritaria, id: any) {

    return this.http.put(this.url + '/' + id, geral);

  }
}

