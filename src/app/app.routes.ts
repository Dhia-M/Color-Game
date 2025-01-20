import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { GameComponent } from './components/game/game.component';
import { RegisterComponent } from './register/register.component'; // Adjust path as needed


export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'game', component: GameComponent },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
