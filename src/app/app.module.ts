import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MsalModule, MsalInterceptor } from '@azure/msal-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MsalModule.forRoot({
      authority: 'https://login.microsoftonline.com/1f710e5f-5f6e-42ed-bba3-b9aac20fc32a',
      clientID: '9ae51f8a-394c-440c-b4fe-91b8090b486f',
      protectedResourceMap: [
        ['https://graph.microsoft.com', ['user.read']]
      ],
      redirectUri: window.location.origin + '/'
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
