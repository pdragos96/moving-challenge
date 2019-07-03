import { TrackInfo } from "./trackInfo";

export interface TracksResponse {
  content: TrackInfo[];
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  size: number;
  sort: string[];
  totalElements: number;
  totalPages: number;
}
