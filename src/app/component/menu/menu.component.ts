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
    this.router.navigateByUrl('/contact', { skipLocationChange: true });
  }

  public weather() {
    this.router.navigateByUrl('/weather', { skipLocationChange: true });
  }

  public webcamOpen(){
    this.router.navigateByUrl('/webcam');
  }

}
