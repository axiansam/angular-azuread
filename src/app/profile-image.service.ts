import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileImageService {

  constructor(private http: HttpClient) { }

  getProfileImage = (): Observable<string> => {
    const subject = new Subject<string>();

    this.http.get('https://graph.microsoft.com/beta/me/photo/$value', { responseType: 'blob' }).subscribe(blob => {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        subject.next(reader.result.toString());
        subject.complete();
      });

      reader.readAsDataURL(blob);
    });

    return subject;
  }
}