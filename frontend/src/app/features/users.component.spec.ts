import { UsersComponent } from '@app/features';
import { APP_BASE_HREF } from '@angular/common';
import { TestBed, async } from '@angular/core/testing';
import { MatCardModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';



describe('User Component', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        UsersComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ],
      imports: [
        MatCardModule,
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();

  });

  it('should render', async(() => {
    const fixture = TestBed.createComponent(UsersComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have isBlue false', async(() => {
    const fixture = TestBed.createComponent(UsersComponent);
    fixture.detectChanges();
    expect(fixture.componentInstance.isBlue).toBe(false);
  }));

  it('should have CREATE button', async(() => {
    const fixture = TestBed.createComponent(UsersComponent);
    const createButton = fixture.debugElement.query(By.css('#create-button'));
    expect(createButton.attributes['color']).toBe('primary');

  }));
});


