import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onLinkedinClick(){
    location.href="https://linkedin.com/in/hraverkar";
  }

  public onWhatsApp(){
    location.href="https://api.whatsapp.com/send?phone=919743420543&text=%20Hi%20Harshal";
  }

  public onInstaram(){
    location.href="https://instagram.com/i.am_Harshal";
  }

  public onGithubClick(){
    location.href="https://github.com/hraverkar";
  }
  public sendEmail(){
    location.href="mailto:harshal.raverkar@gmail.com";
  }
}
