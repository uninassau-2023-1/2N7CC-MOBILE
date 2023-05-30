import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from '@ionic/angular';
import { response } from 'express';
import { ModalprioritariaPage } from 'src/app/pagina-prioritaria-cadastro/modalprioritaria/modalprioritaria.page';
import { Prioritaria, PrioritariaService } from 'src/app/servico-prioritaria/prioritaria.service';

@Component({
  selector: 'app-prioritarias',
  templateUrl: './prioritarias.page.html',
  styleUrls: ['./prioritarias.page.scss'],
})
export class PrioritariasPage implements OnInit {

  prioritarias!: Prioritaria[];

  constructor(private service: PrioritariaService, private modalCtrl: ModalController, private toastCtrl: ToastController) { }

  ngOnInit() {

    this.service.getAll().subscribe(response => {

      this.prioritarias = response;
    })
  }

  remover(id: any) {

    this.service.remove(id).subscribe(() => {

      //this.gerais = this.gerais.filter(idgeral => idgeral.id ! == id);

      this.service.getAll().subscribe(response => {

        this.prioritarias = response;
      })

      this.toastCtrl.create({

        message: 'Senha Prioritária excluido com sucesso',
        duration: 2000

      }).then(toast => {

        toast.present();
      })
    })
  }

  novaSenhaPrioritaria() {

    this.modalCtrl.create({
      component: ModalprioritariaPage
     }).then(modal => {

      modal.present();
      return modal.onDidDismiss();

     }).then(({data}) => {

        //console.log(data);

        this.service.getAll().subscribe(response => {

          this.prioritarias = response;
        });
        this.toastCtrl.create({

          message: 'Senha Prioritária realizado com sucesso',
          duration: 2000

        }).then(toast => {

          toast.present();
        })
     })
  }

  atualizar(p: Prioritaria) {

    this.modalCtrl.create({

     component: ModalprioritariaPage,
     componentProps: {p}
    }).then(modal => {

   modal.present();
   return modal.onDidDismiss();

    }).then(({data}) => {

     this.service.getAll().subscribe(response => {

       this.prioritarias = response;
     })

     this.toastCtrl.create({

       message: 'Senha Prioritária atualizado com sucesso',
       duration: 2000

     }).then(toast => {

       toast.present();
     })

    })

   }

   ordenarSenhas() {
    this.prioritarias.sort((a, b) => {
      // Ordena por data geral de forma crescente
      if (a.data_prioritaria < b.data_prioritaria) {
        return -1;
      } else if (a.data_prioritaria > b.data_prioritaria) {
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
