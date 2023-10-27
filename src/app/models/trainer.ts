import { TraineeResponseDto } from "./trainee-response-dto";

export interface Trainer {
    firstName: string;
    lastName: string;
    email: string;
    specialization: string;
    traineeResponseDtoList: TraineeResponseDto[];
    active: boolean;
  }