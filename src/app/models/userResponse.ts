import { ContestantCombined } from "./contestantCombined";

export interface UserResponse {
  content: ContestantCombined[];
  totalPages: number;
  totalElements: number;
  last: boolean;
  numberOfElements: number;
  first: boolean;
  sort: object;
  size: number;
  number: number;
}
