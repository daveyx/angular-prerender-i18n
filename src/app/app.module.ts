import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// avoid trailing slash
// https://github.com/angular/angular/issues/21003#issuecomment-504777969
@Injectable()
export class BaseHrefPathLocationStrategy extends PathLocationStrategy {
  override prepareExternalUrl(url: string) {
    const baseHref = this.getBaseHref();
    const extUrl = super.prepareExternalUrl(url);
    return baseHref === extUrl ? Location.stripTrailingSlash(extUrl) : extUrl;
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: BaseHrefPathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
