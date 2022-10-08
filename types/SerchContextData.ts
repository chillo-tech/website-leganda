import { Param } from "./Param";
import { SearchParams } from "./SearchParams";

export interface SearchContextData {
  state: SearchParams,
  update?: (data: Param) => void
}