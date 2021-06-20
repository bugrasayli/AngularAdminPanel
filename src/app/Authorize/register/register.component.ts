import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Model/user';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  constructor(private auth : AuthService) {
  }
  ngOnInit(): void {
  }
  Register() {
    this.auth.Register(this.user).subscribe(x => {
      console.log('Register');
    });
  }

}
