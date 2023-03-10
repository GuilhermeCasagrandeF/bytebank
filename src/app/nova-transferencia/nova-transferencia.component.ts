import { Router } from '@angular/router';
import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia-component.scss']
})

export class AppNovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor (private service: TransferenciaService, private router: Router) {}

  transferir() {
    const valorEmitir: Transferencia = {valor: this.valor, destino: this.destino};
    this.service.adicionar(valorEmitir)
    .subscribe(result => {
      console.log(result);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
      (error) => console.log(error)
    );

  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
