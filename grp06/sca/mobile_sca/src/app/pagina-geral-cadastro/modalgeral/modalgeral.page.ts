
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { Geral, GeralService } from 'src/app/servico-geral/geral.service';

@Component({
  selector: 'app-modalgeral',
  templateUrl: './modalgeral.page.html',
  styleUrls: ['./modalgeral.page.scss'],
})
export class ModalgeralPage implements OnInit {

  @Input()
  g!: Geral;

  atualizar = false;
  dados :{

    data_geral: DateConstructor;
    hora_atendimento: string;
    senha_atual: string;
    senha_anterior: string;

  } = {

	  data_geral: Date,
    hora_atendimento: '',
    senha_atual: '',
    senha_anterior: ''
  };
gerais: any;

  constructor(private modalCtrl: ModalController , private service: GeralService) { }

  ngOnInit() {

    if(this.g) {

      //console.log("Atualizar");
      this.atualizar = true;
      
	    this.dados = {
        data_geral: Date,
        hora_atendimento: this.g.hora_atendimento,
        senha_atual: this.g.senha_atual,
        senha_anterior: this.g.senha_anterior
      };

    }
  }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

  enviando(form: NgForm) {

    console.log(form.value);

    const geral = form.value;

    if(this.atualizar) {

      this.service.update(geral, this.g.id).subscribe(response =>{

        this.modalCtrl.dismiss(response);
      })

    } else {

      this.service.create(geral).subscribe(response => {
        this.modalCtrl.dismiss(response);
      })
    }
  }
}
