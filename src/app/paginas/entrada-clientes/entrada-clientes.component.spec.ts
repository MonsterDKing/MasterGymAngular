import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntradaClientesComponent } from './entrada-clientes.component';

describe('EntradaClientesComponent', () => {
  let component: EntradaClientesComponent;
  let fixture: ComponentFixture<EntradaClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntradaClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntradaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
