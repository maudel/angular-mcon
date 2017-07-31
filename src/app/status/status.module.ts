import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusRoutingModule } from './status-routing.module';
import { StatusComponent } from './status.component';
import { ReaderStatisticsComponent } from './reader-statistics/reader-statistics.component';
import { ENodesStatisticsComponent } from './e-nodes-statistics/e-nodes-statistics.component';
import { AleStatisticsComponent } from './ale-statistics/ale-statistics.component';
import { SensorsStatisticsComponent } from './sensors-statistics/sensors-statistics.component';
import {MdToolbarModule, MdTableModule, MdButtonModule, MdInputModule, MdSliderModule, MdSlideToggleModule,
  MdTabsModule, MdIconModule, MdSidenavModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    StatusRoutingModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdSidenavModule,
    MdTabsModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdInputModule,
    MdToolbarModule,
    MdButtonModule,
    MdIconModule,
    MdSidenavModule,
    MdSliderModule,
    MdSlideToggleModule,
    MdInputModule,
    MdTableModule

  ],
  declarations: [
    StatusComponent,
    ReaderStatisticsComponent,
    SensorsStatisticsComponent,
    AleStatisticsComponent,
    ENodesStatisticsComponent
  ]
})
export class StatusModule { }
