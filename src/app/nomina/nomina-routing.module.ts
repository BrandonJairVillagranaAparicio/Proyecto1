import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrativosComponent } from './administrativos/administrativos.component';
import { DocentesComponent } from './docentes/docentes.component';
import { MenuNominaComponent } from './menu-nomina/menu-nomina.component';

const routes: Routes = [
  {path:'Docentes', component: DocentesComponent},
  {path:'Administrativos', component: AdministrativosComponent},
  {path:'MenuNomina', component: MenuNominaComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NominaRoutingModule { }
