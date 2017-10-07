import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './about/about.component.html',
  styleUrls: ['./app.component.css']
})

export class LoginComponent {
  data = {};

  onSubmit() {
      console.log(this.data);
  }

  


}
