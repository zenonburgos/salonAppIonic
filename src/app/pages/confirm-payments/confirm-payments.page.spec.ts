/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : Salon Locks & Lashes This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2023-present initappz.
*/
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConfirmPaymentsPage } from './confirm-payments.page';

describe('ConfirmPaymentsPage', () => {
  let component: ConfirmPaymentsPage;
  let fixture: ComponentFixture<ConfirmPaymentsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ConfirmPaymentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
