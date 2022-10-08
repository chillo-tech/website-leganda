import { SearchParams } from '../types';
import { Context,createContext, useMemo, useReducer, useCallback } from 'react'
import SearchReducer from './SearchReducer';
import { Param } from '../types/Param';
import { UPDATE_SEARCH_CRITERIA } from '../utils';
type Props = {
  children: JSX.Element,
};
export const SearchContext: Context<SearchParams> = createContext({});
function SearchContextProvider({children}: Props) {
  const [state, dispatch] = useReducer(SearchReducer, {});

  const update = useCallback(
    (data: Param) =>
      dispatch({
        type: UPDATE_SEARCH_CRITERIA,
        data
      }),
    [],
  );
  const value = useMemo(
    () => ({state, update }),
    [state,update],
  );
  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider;
