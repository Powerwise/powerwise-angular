import {APP_BASE_HREF} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import {EffectsModule} from '@ngrx/effects';
import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AdminModule} from './admin/admin.module';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeModule} from './home/home.module';
import {DeviceEffects} from './shared/effects/device.effects';
import {ResponseEffects} from './shared/effects/response.effects';
import {SheddingEffects} from './shared/effects/shedding.effects';
import {UserEffects} from './shared/effects/user.effects';
import {reducer} from './shared/reducers/index';
import {SharedModule} from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule, HttpModule, AppRoutingModule, AdminModule, HomeModule,
    StoreModule.provideStore(reducer), SharedModule.forRoot(),
    EffectsModule.run(UserEffects), EffectsModule.run(DeviceEffects),
    EffectsModule.run(SheddingEffects), EffectsModule.run(ResponseEffects),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  declarations: [AppComponent],
  providers: [{provide: APP_BASE_HREF, useValue: '<%= APP_BASE %>'}],
  bootstrap: [AppComponent]

})
export class AppModule {
}
