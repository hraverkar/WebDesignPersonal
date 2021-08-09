import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  public constructor(private router: Router) { }

  public ngOnInit(): void {
  }

  public contactUs() {
    this.router.navigate(['/contact']);
  }

  public weather() {
    this.router.navigate(['/weather']);
  }

  public webcamOpen(){
    this.router.navigate(['/webcam']);
  }

  public mapOpen(){
    this.router.navigate(['/maps']);
  }

  public userResume(){
    this.router.navigate(['/userResume']);
  }

}
