import { Component, OnInit } from '@angular/core';
import{Router} from '@angular/router'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  isLogged = (localStorage.getItem('access_role') ? true : false)
  constructor(private router:Router) { }

  ngOnInit(): void {
    console.log(this.isLogged)
  }
  logout(){
    console.log('logout')
    localStorage.removeItem('user_token')
    localStorage.removeItem('access_role')
    this.router.navigateByUrl('/')
  }

}
