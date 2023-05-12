import { Component } from '@angular/core';
// lesson 2- Step 2 - Add the new component to your app's layout
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  // lesson 2 -step 2-3 In app.component.ts, in @Component, 
  //update the imports array property and add HomeComponent.
  imports: [ 
     HomeComponent,
  ],
  //lesson 2 step 2-4 in app.component.ts, in @Component, 
  //update the template property to include the following HTML code.
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
    </header>
    <section class="content">
      <app-home></app-home>
    </section>
  </main>
`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Homes';
}
