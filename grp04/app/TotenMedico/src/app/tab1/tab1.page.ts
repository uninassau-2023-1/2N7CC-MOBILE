import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { HttpResponse } from '@capacitor/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})



export class Tab1Page {
  constructor(private http: HttpClient,private alertController: AlertController) {}

  cadastrarSenha(tipoSenha: string) {
    const url = 'http://localhost:3000/api/senha';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    const data = { tipoSenha: tipoSenha };



    this.http.post<any>(url, data, { headers: headers })
      .subscribe(async response => {
        const senha = response.senha;

        const alert = await this.alertController.create({
          header: 'Senha Gerada:',
          message: senha,
          buttons: ['OK']
        });

        await alert.present();
      });
  }
}