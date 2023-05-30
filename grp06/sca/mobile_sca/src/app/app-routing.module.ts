import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'gerais',
    loadChildren: () => import('./pagina-geral/gerais/gerais.module').then( m => m.GeraisPageModule)
  },
  {
    path: 'modalgeral',
    loadChildren: () => import('./pagina-geral-cadastro/modalgeral/modalgeral.module').then( m => m.ModalgeralPageModule)
  },
  {
    path: 'prioritarias',
    loadChildren: () => import('./pagina-prioritaria/prioritarias/prioritarias.module').then( m => m.PrioritariasPageModule)
  },
  {
    path: 'modalprioritaria',
    loadChildren: () => import('./pagina-prioritaria-cadastro/modalprioritaria/modalprioritaria.module').then( m => m.ModalprioritariaPageModule)
  },

  {
    path: 'exames',
    loadChildren: () => import('./pagina-exame/exames/exames.module').then( m => m.ExamesPageModule)
  },
  {
    path: 'modalexame',
    loadChildren: () => import('./pagina-exame-cadastro/modalexame/modalexame.module').then( m => m.ModalexamePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
