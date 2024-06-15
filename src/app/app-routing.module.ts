import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListaEventosComponent } from './pages/lista-eventos/lista-eventos.component';
import { DetalleEventoComponent } from './pages/detalle-evento/detalle-evento.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listadoEventos', component: ListaEventosComponent},
  {path: 'detalleEvento', component: DetalleEventoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
