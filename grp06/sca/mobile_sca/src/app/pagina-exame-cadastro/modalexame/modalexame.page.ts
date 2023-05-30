import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Exame, ExameService } from 'src/app/servico-exame/exame.service';

@Component({
  selector: 'app-modalexame',
  templateUrl: './modalexame.page.html',
  styleUrls: ['./modalexame.page.scss'],
})
export class ModalexamePage implements OnInit {

  @Input()
  e!: Exame;

  atualizar = false;

  dados_exames :{

    data_exame: DateConstructor;
    hora_atendimento: string;
    senha_atual: string;
    senha_anterior: string;

  } = {

	  data_exame: Date,
    hora_atendimento: '',
    senha_atual: '',
    senha_anterior: ''
  };

  gerais: any

  constructor(private modalCtrl: ModalController , private service: ExameService) { }

  ngOnInit() {

    if(this.e) {

      //console.log("Atualizar");
      this.atualizar = true;

	    this.dados_exames = {
        data_exame: Date,
        hora_atendimento: this.e.hora_atendimento,
        senha_atual: this.e.senha_atual,
        senha_anterior: this.e.senha_anterior
      };

    }
  }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

  enviando(form: NgForm) {

    console.log(form.value);

    const exame = form.value;

    if(this.atualizar) {

      this.service.update(exame, this.e.id).subscribe(response =>{

        this.modalCtrl.dismiss(response);
      })

    } else {

      this.service.create(exame).subscribe(response => {
        this.modalCtrl.dismiss(response);
      })
    }
  }
}
