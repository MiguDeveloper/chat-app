import {RouterModule, Routes} from '@angular/router';
import {ChatComponent} from './components/chat/chat.component';

const APP_ROUTES: Routes = [
  {path: 'chat', component: ChatComponent},
  {path: '', pathMatch: 'full', redirectTo: 'chat'},
  {path: '**', pathMatch: 'full', redirectTo: 'chat'}
];


export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
