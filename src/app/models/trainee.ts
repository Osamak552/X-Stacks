import { TrainerResponseDto } from "./trainer-response-dto";

export interface Trainee {
  firstName: string;
  lastName: string;
  email: string;
  dateOfBirth: string;
  address: string;
  trainerResponseDtoList: TrainerResponseDto[];
  active: boolean;
}