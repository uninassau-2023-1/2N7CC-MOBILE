import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ModalgeralPage } from 'src/app/pagina-geral-cadastro/modalgeral/modalgeral.page';
import { Geral, GeralService } from 'src/app/servico-geral/geral.service';

@Component({
  selector: 'app-gerais',
  templateUrl: './gerais.page.html',
  styleUrls: ['./gerais.page.scss'],
})
export class GeraisPage implements OnInit {
  

  gerais!: Geral[];
  proximoAtendimento: Geral[] = [];

  constructor(
    private service: GeralService,
    private modalCtrl: ModalController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.service.getAll().subscribe((response) => {
      this.gerais = response;
      this.proximoAtendimento = this.gerais.filter((g) => !g.atendido);
    });
  }

  remover(id: any) {
    this.service.remove(id).subscribe(() => {
      this.service.getAll().subscribe((response) => {
        this.gerais = response;
      });

      this.toastCtrl
        .create({
          message: 'Senha Geral excluido com sucesso',
          duration: 2000,
        })
        .then((toast) => {
          toast.present();
        });
    });
  }

  novaSenhaGeral() {
    this.modalCtrl.create({
      component: ModalgeralPage,
    })
      .then((modal) => {
        modal.present();
        return modal.onDidDismiss();
      })
      .then(({ data }) => {
        this.service.getAll().subscribe((response) => {
          this.gerais = response;
        });

        this.toastCtrl
          .create({
            message: 'Senha Geral realizado com sucesso',
            duration: 2000,
          })
          .then((toast) => {
            toast.present();
          });
      });
  }

  atualizar(g: Geral) {
    this.modalCtrl
      .create({
        component: ModalgeralPage,
        componentProps: { g },
      })
      .then((modal) => {
        modal.present();
        return modal.onDidDismiss();
      })
      .then(({ data }) => {
        this.service.getAll().subscribe((response) => {
          this.gerais = response;
        });

        this.toastCtrl
          .create({
            message: 'Senha Geral atualizado com sucesso',
            duration: 2000,
          })
          .then((toast) => {
            toast.present();
          });
      });
  }

  ordenarSenhas() {
    this.gerais.sort((a, b) => {
      // Ordena por data geral de forma crescente
      if (a.data_geral < b.data_geral) {
        return -1;
      } else if (a.data_geral > b.data_geral) {
        return 1;
      } else {
        // Ordena por hora de atendimento de forma crescente se a data geral for igual
        if (a.hora_atendimento < b.hora_atendimento) {
          return -1;
        } else if (a.hora_atendimento > b.hora_atendimento) {
          return 1;
        } else {
          return 0;
        }
      }
    });
  }

}
