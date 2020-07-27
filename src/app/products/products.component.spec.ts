import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have ngOnInit lifecycle', () => {
    expect(component.ngOnInit).toBeDefined();
    spyOn(component, 'ngOnInit').and.callThrough();
    spyOn(document, 'querySelector').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
    expect(document.querySelector).toHaveBeenCalled();
  });
  it('should test gridView method', () => {
    expect(component.gridView).toBeDefined();
    spyOn(component, 'gridView').and.callThrough();
    component.gridView();
    expect(component.gridView).toHaveBeenCalled();
    expect(component.element.classList).toContain('gridView');
  });
  it('should test listView method', () => {
    expect(component.listView).toBeDefined();
    spyOn(component, 'listView').and.callThrough();
    component.listView();
    expect(component.listView).toHaveBeenCalled();
    expect(component.element.classList).toContain('listView');
  });
  it('should test filterPrice method', () => {
    expect(component.filterPrice).toBeDefined();
    expect(component.compareValues).toBeDefined();
    spyOn(component, 'filterPrice').and.callThrough();
    spyOn(component, 'compareValues').and.callThrough();
    component.filterPrice();
    expect(component.filterPrice).toHaveBeenCalled();
    expect(component.compareValues).toHaveBeenCalled();
  });
  it('should test compareValues method for asc and desc filters', () => {
    expect(component.compareValues).toBeDefined();
    spyOn(component, 'compareValues').and.callThrough();
    component.compareValues('Price', 'asc');
    expect(component.compareValues).toHaveBeenCalled();
  });
});
