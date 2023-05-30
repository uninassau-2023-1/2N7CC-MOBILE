import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  constructor(private alertController: AlertController, private http: HttpClient) {}

  async fazerChamadaAPI(guiche:string) {
    console.log(guiche);
    this.http.get<any>(`http://localhost:3000/api/senha/chamar/${guiche}`).subscribe(
      async response => {
        const senha = response.senha;

        const alert = await this.alertController.create({
          header: 'Senha Chamada:',
          message: senha,
          buttons: ['OK']
        });

        await alert.present();
      },
      async (error: HttpErrorResponse) => {
        if (error.status === 404) {
          const alert = await this.alertController.create({
            header: 'Erro',
            message: 'Não ha Senhas Disponiveis.',
            buttons: ['OK']
          });

          await alert.present();
        } else {
          const alert = await this.alertController.create({
            header: 'Erro',
            message: 'Ocorreu um erro na chamada da API.',
            buttons: ['OK']
          });

          await alert.present();
        }
      }
    );
  }
}