import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {

  constructor( private router: Router ) { }

  ngOnInit() {}

  goBack( evt ) {
    //this.router.navigate(['users']);

    //metodo equivalente a quello sopra
    this.router.navigateByUrl('users');
  }
}
