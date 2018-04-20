import { UserService } from '@app/core';
import { of } from 'rxjs/observable/of';

let mockHttp;
let service: UserService;

describe('UserService', () => {

  beforeEach(() => {
    mockHttp = jasmine.createSpyObj('mockHttp', ['get', 'post']);
    service = new UserService(mockHttp);
  });

  it('should return users', () => {

    mockHttp.get.and.returnValue(of({
      username: 'test',
      password: 'test',
      firstName: 'test',
      lastName: 'test'
    }));

    service.find('test').subscribe(data => {
      expect(data.username).toBe('test');
      expect(mockHttp.get).toHaveBeenCalledTimes(1);
    });

    it('should be different ', () => {

    });
  });
});
