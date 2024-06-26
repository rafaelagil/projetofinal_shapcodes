import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
  imports: [FooterComponent, CommonModule],
})
export class AdminComponent {
  constructor(private rota: Router) {}

  saldoVisivel: boolean = true;
  olho: boolean = true;
  nome: any = localStorage.getItem('nomeLogado')?.split(' ');
  nome2: any = this.nome;

  alternarSaldo() {
    this.saldoVisivel = !this.saldoVisivel;
    this.olho = !this.olho;
    console.log(this.nome[0]);
  }
  sair(): any {
    this.rota.navigateByUrl('/inicio');
    localStorage.removeItem('email');
    localStorage.removeItem('senha');
  }
}
