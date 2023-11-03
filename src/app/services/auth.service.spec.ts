import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';

import { TestBed } from '@angular/core/testing';
import { AuthService } from './auth.service';
import { mockToken,mockUser } from '../mock-data/token.data';
import { Token } from '../models/token.model';
import { Role } from '../models/role.model';


describe('AuthService', () => {
  let service: AuthService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports:[HttpClientTestingModule]
    });
    service = TestBed.inject(AuthService);
    testingController = TestBed.inject(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return token', () => {
    service.getToken(mockUser).subscribe((response:Token) => {
        expect(response).toEqual(mockToken);
    });
    const req = testingController.expectOne('/api/auth/login');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(mockUser);

    req.flush(mockToken);

  });
  

  it('should send a GET request to /api/home/login/role/{username} and get trainee as role', () => {
    const mockUsername = 'testUser';
    localStorage.setItem('username', mockUsername);
  
    service.getRole().subscribe((response: Role) => {
      expect(response).toEqual({ role: 'trainee' }); 
    });
  
    const req = testingController.expectOne(`/api/home/login/role/${mockUsername}`);
    expect(req.request.method).toBe('GET');
 
    req.flush({ role: 'trainee' }); 
  });

  it('should change the password')
});
