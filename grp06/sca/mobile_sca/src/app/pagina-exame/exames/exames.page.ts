import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { ModalexamePage } from 'src/app/pagina-exame-cadastro/modalexame/modalexame.page';
import { Exame, ExameService } from 'src/app/servico-exame/exame.service';

@Component({
  selector: 'app-exames',
  templateUrl: './exames.page.html',
  styleUrls: ['./exames.page.scss'],
})
export class ExamesPage implements OnInit {

  exames!: Exame[];
  proximoAtendimento: Exame[] = [];

  constructor(private service: ExameService, private modalCtrl: ModalController,
    private toastCtrl: ToastController) { }

  ngOnInit() {
    this.service.getAll().subscribe((response) => {
      this.exames = response;
      this.proximoAtendimento = this.exames.filter((g) => !g.atendido);
    });
  }

  remover(id: any) {
    this.service.remove(id).subscribe(() => {
      this.service.getAll().subscribe((response) => {
        this.exames = response;
      });

      this.toastCtrl
        .create({
          message: 'Senha Retirada de exame excluido com sucesso',
          duration: 2000,
        })
        .then((toast) => {
          toast.present();
        });
    });
  }

  novaSenhadeExame() {
    this.modalCtrl.create({
      component: ModalexamePage,
    })
      .then((modal) => {
        modal.present();
        return modal.onDidDismiss();
      })
      .then(({ data }) => {
        this.service.getAll().subscribe((response) => {
          this.exames = response;
        });

        this.toastCtrl
          .create({
            message: 'Senha de Exame realizado com sucesso',
            duration: 2000,
          })
          .then((toast) => {
            toast.present();
          });
      });
  }

  atualizar(e: Exame) {
    this.modalCtrl
      .create({
        component: ModalexamePage,
        componentProps: { e },
      })
      .then((modal) => {
        modal.present();
        return modal.onDidDismiss();
      })
      .then(({ data }) => {
        this.service.getAll().subscribe((response) => {
          this.exames = response;
        });

        this.toastCtrl
          .create({
            message: 'Senha de Exame atualizado com sucesso',
            duration: 2000,
          })
          .then((toast) => {
            toast.present();
          });
      });
  }

  ordenarSenhas() {
    this.exames.sort((a, b) => {
      // Ordena por data geral de forma crescente
      if (a.data_exame < b.data_exame) {
        return -1;
      } else if (a.data_exame > b.data_exame) {
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
