import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  
  role: string = 'home';

  constructor(private navbarService: NavbarService) { }

  ngOnInit(): void {
    console.log(this.role);
    this.navbarService.currentRole$.subscribe(role => {
      this.role = role;
    });
  }


}
