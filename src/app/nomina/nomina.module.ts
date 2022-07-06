import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NominaRoutingModule } from './nomina-routing.module';
import { MenuNominaComponent } from './menu-nomina/menu-nomina.component';
import { DocentesComponent } from './docentes/docentes.component';
import { AdministrativosComponent } from './administrativos/administrativos.component';


@NgModule({
  declarations: [
    MenuNominaComponent,
    DocentesComponent,
    AdministrativosComponent
  ],
  imports: [
    CommonModule,
    NominaRoutingModule
  ]
})
export class NominaModule { }
