import {APP_BASE_HREF} from '@angular/common';
import {Component} from '@angular/core';
import {TestBed} from '@angular/core/testing';
import {async} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {Route} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

import {AdminComponent} from './admin/admin.component';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {ToolbarComponent} from './shared/toolbar/toolbar.component';

export function main() {
  describe('App component', () => {

    let config: Route[] = [
      {path: '', component: HomeComponent},
      {path: 'admin', component: AdminComponent}
    ];
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [FormsModule, RouterTestingModule.withRoutes(config)],
        declarations: [
          TestComponent, ToolbarComponent, NavbarComponent, AppComponent,
          HomeComponent, AdminComponent
        ],
        providers: [{provide: APP_BASE_HREF, useValue: '/'}]
      });
    });

    it('should build without a problem', async(() => {
         TestBed.compileComponents().then(() => {
           let fixture = TestBed.createComponent(TestComponent);
           let compiled = fixture.nativeElement;

           expect(compiled).toBeTruthy();
         });
       }));
  });
}

@Component({selector: 'test-cmp', template: '<sd-app></sd-app>'})

class TestComponent {
}
