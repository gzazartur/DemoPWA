import { Component } from '@angular/core';
import { TestClass } from './TestClass';
import { UserServiceService } from './user-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend';
  text: TestClass;

  constructor(private userService: UserServiceService) {
  }

  test():void{
    this.userService.testBack().subscribe(data => this.text = data);
  }
  
}
