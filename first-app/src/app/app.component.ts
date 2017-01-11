import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <h1>Inline Template</h1>
      <fa-other></fa-other>
      <fa-another>
        <div>
          <h1>hello</h1>
          <p>world!</p>
        </div>
      </fa-another>
      <fa-another>
        <p>something else!</p>
      </fa-another>
    `,
  styles: [`
      h1{
        color: red;
      }
    `]
})
export class AppComponent {
  title = 'i changed it!';
}
