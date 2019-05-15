import { Component, OnInit } from '@angular/core';
import { User } from 'msal';
import { MsalService } from '@azure/msal-angular';
import { ProfileImageService } from '../profile-image.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: User;
  public image = '';
  constructor(private msalService: MsalService, private imageService: ProfileImageService) { }

  ngOnInit() {
    this.imageService.getProfileImage().subscribe(x => this.image = x);
    this.user = this.msalService.getUser();
  }

}
