import { MatTableModule, MatPaginator, MatPaginatorModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { APP_BASE_HREF } from '@angular/common';
import { UserTableComponent } from '@app/features/users/table/table.component';
import { TestBed, async } from '@angular/core/testing';
import { UserService } from '@app/core';
import { AppSharedModule } from '@app/shared';
import { AppCoreModule } from '@app/core/core.module';

describe('User Component', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [
        UserTableComponent
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' },
        UserService
      ],
      imports: [
        MatTableModule,
        AppCoreModule,
        MatPaginatorModule,
        AppSharedModule,
        RouterTestingModule.withRoutes([])
      ]
    }).compileComponents();
  });

  it('should render', async(() => {
    const fixture = TestBed.createComponent(UserTableComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('should have users', async(() => {
    const fixture = TestBed.createComponent(UserTableComponent);
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(fixture.componentInstance.dataSource.data.length).toBe(10);
    });
  }));
});
