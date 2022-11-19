import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from ".."
import { ApiFilter } from "../../types/interface.homedata"

const initialState:ApiFilter = {
    sortby: 'Date Added',
    type: '',
    searchTerm: '',
}

export const searchFilterSlice = createSlice({
    name: 'searchfilter',

    initialState,
    reducers: {
      changeType: (state, action: PayloadAction<string>) =>{
        state.type = action.payload
      },
      changeSort: (state, action: PayloadAction<string>) =>{
        state.sortby = action.payload
      },
      changeSearchTerm: (state, action: PayloadAction<string>) =>{
        state.searchTerm = action.payload
      },
    }
  })

  export const { changeType, changeSort, changeSearchTerm } = searchFilterSlice.actions

  export const selectSearchFilter = (state: RootState) => state.searchFilter
  export default searchFilterSlice.reducer