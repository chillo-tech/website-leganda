import { UPDATE_SEARCH_CRITERIA } from './../utils/Data';
import { Action } from './../types/Action';
import { SearchParams } from "../types";

function SearchReducer (state: SearchParams, action: Action){
  switch(action.type){
    case UPDATE_SEARCH_CRITERIA: {
        return {
          ...state,
          [action.data.key]: action.data.value
        }
    }
  }
  return state;
}

export default SearchReducer;
