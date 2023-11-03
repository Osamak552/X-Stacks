import { User } from '../models/user.model';
import { Token } from './../models/token.model';


export const mockToken:Token = {
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
};

export const mockUser:User = {
    username : "osama@gmail.com",
    password : "12345"

}