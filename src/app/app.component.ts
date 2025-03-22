import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FrontPageModule } from './front-page/front-page.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FrontPageModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kenryan-portfolio';
}
