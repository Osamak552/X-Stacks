import { Pageable } from "./pageable.model";
import { TrainingSession } from "./training-session.model";

export interface Training {
    content: TrainingSession[];
    pageable: Pageable;
    last: boolean;
    totalElements: number;
    totalPages: number;
    size: number;
    number: number;
    sort: any[];
    first: boolean;
    numberOfElements: number;
    empty: boolean;
  }