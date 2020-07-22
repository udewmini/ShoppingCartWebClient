import { UserService } from './../shared/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  userDetails;

  constructor(private router: Router, private service: UserService) { }

  ngOnInit() {
    this.service.getUserProfile().subscribe(
      res => {
        this.userDetails = res;
      },
      err => {
        console.log(err);
      },
    );
  }


  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/user/login']);
  }
}

// import { Component, OnInit } from '@angular/core';
// import { first } from 'rxjs/operators';

// import { User } from '../models';
// import { UserService, AuthenticationService } from '../services';


// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent {
//   loading = false;
//   users: User[];

//   constructor(private userService: UserService) { }

//   ngOnInit() {
//       this.loading = true;
//       this.userService.getAll().pipe(first()).subscribe(users => {
//           this.loading = false;
//           this.users = users;
//       });
//   }
// }

