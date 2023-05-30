import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Prioritaria, PrioritariaService } from 'src/app/servico-prioritaria/prioritaria.service';


@Component({
  selector: 'app-modalprioritaria',
  templateUrl: './modalprioritaria.page.html',
  styleUrls: ['./modalprioritaria.page.scss'],
})
export class ModalprioritariaPage implements OnInit {

  @Input()
  p!: Prioritaria;

  atualizar = false;

  dados_prioritaria :{

    data_prioritaria: DateConstructor;
    hora_atendimento: string;
    senha_atual: string;
    senha_anterior: string;

  } = {

	  data_prioritaria: Date,
    hora_atendimento: '',
    senha_atual: '',
    senha_anterior: ''
  };

  constructor(private modalCtrl: ModalController, private service: PrioritariaService) { }

  ngOnInit() {

    if(this.p) {

      console.log("Atualizar");
      this.atualizar = true;

      this.dados_prioritaria = {

        data_prioritaria: Date,
        hora_atendimento: this.p.hora_atendimento,
        senha_atual: this.p.senha_atual,
        senha_anterior: this.p.senha_anterior
      }
    }

  }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

  enviando(form: NgForm) {

    console.log(form.value);

    const prioritaria = form.value;

    if(this.atualizar) {

      this.service.update(prioritaria, this.p.id).subscribe(response => {

        this.modalCtrl.dismiss(response);
      })

    } else {

      this.service.create(prioritaria).subscribe(response => {

        this.modalCtrl.dismiss(response);
      })
    }

  }

}
