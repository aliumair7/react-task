import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: {
    logId: null,
    applicationId: null,
    creationDate: null,
    applicationType:null,
  
  },
};

const loggersFiltersSlice = createSlice({
  name: 'loggerFilters',
  initialState,
  reducers: {
    setLogID: (state, action) => {
      state.filter.logId = action.payload;
    },
    setDate: (state, action) => {
      state.filter.creationDate = action.payload;
    },
    setApplicationId: (state, action) => {
        state.filter.applicationId = action.payload;
      },
    setApplicationType: (state, action) => {
      state.filter.applicationType = action.payload;
    },
    setClearFilter:(state,action)=>{
       state.filter.applicationId=null
       state.filter.applicationId=null

       state.filter.applicationType=null
       state.filter.creationDate=null



    }
   
  },
});

export const {
    setLogID,
    setDate,
    setApplicationType,
    setClearFilter,
    setApplicationId
} = loggersFiltersSlice.actions;

export default loggersFiltersSlice.reducer;
