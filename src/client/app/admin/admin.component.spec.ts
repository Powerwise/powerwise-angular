import {Component} from '@angular/core';
import {async, TestBed} from '@angular/core/testing';

import {AdminModule} from './admin.module';

export function main() {
  describe('Admin component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule(
          {declarations: [TestComponent], imports: [AdminModule]});
    });

    it('should work', async(() => {
         TestBed.compileComponents().then(() => {
           let fixture = TestBed.createComponent(TestComponent);
           let adminDOMEl = fixture.debugElement.children[0].nativeElement;

           expect(adminDOMEl.querySelectorAll('h2')[0].textContent)
               .toEqual('Features');
         });
       }));
  });
}

@Component({selector: 'test-cmp', template: '<sd-admin></sd-admin>'})
class TestComponent {
}
