import { Routes } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page/front-page.component';
import { SagshippingComponent } from './posts/sagshipping/sagshipping.component';

export const routes: Routes = [
    { path: '', component: FrontPageComponent },
    { path: 'sagshipping', component: SagshippingComponent }
];
