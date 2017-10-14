import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransportDetails } from './transport-details';

@NgModule({
  declarations: [
    TransportDetails,
  ],
  imports: [
    IonicPageModule.forChild(TransportDetails),
  ],
})
export class TransportDetailsModule {}
