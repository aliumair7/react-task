import { Input,Select,Button,DatePicker } from "antd"
import React from 'react';
import { setApplicationId,setApplicationType,setDate,setLogID,setClearFilter } from "../redux/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";

const {Option}=Select
const { RangePicker } = DatePicker;
const FilteHeader=({handleSearch,handleRefreshData})=>{
    const { logId, applicationId, creationDate, applicationType } = useSelector(
        (state) => state.loggerFilters.filter
      );
    const dispatch=useDispatch()
    console.log("creationDate",creationDate)
    return(
        <div className="filters-wrapper draft-assessments-filters">
        <div className="filters">
          <div className="search-field filters-field">
            <label className="label-style">Log ID</label>
            <Input
              className="filters-input-style"
              placeholder="Search"
              value={logId}
              onChange={(e) => {
                dispatch(setLogID(e.target.value));
              }}
            />
          </div>
          <div className="search-field filters-field">
            <label className="label-style">Application ID</label>
            <Input
              className="filters-input-style"
              placeholder="Search"
              value={applicationId}
              onChange={(e) => {
                dispatch(setApplicationId(e.target.value));
              }}
            />
          </div>
          <div className="range-picker-filters-field filters-field">
            <label className="label-style">Date Range</label>
            <RangePicker
              className="filters-input-style"
              format={'YYYY-MM-DD'}
              
              value={
                creationDate?.startDate && creationDate?.endDate
                  ? [moment(creationDate.startDate), moment(creationDate.endDate)]
                  : []
              }
              onChange={(dates) => {
                console.log("Dates",dates)
                if(dates?.length){
                dispatch(
                  setDate({
                    startDate: dates && dates[0].format('YYYY-MM-DD'),
                    endDate: dates && dates[1].format('YYYY-MM-DD'),
                  }),
                )}
              }}
            />
          </div>

         
          <div className="asd-type-field-filters-btn">
            <div className="select-field filters-field asd-type-filters-field">
              <label className="label-style">Action Type</label>
              <Select
                placeholder="Select"
                value={applicationType}
                onChange={(value) => {
                  dispatch(setApplicationType(value));
                }}
                className="filters-select-style"
                showArrow
                showSearch
                
                dropdownMatchSelectWidth={false}
                maxTagCount={'responsive'}
              ><Option value="CERT_TITLE_DEED_PLOT">CERT_TITLE_DEED_PLOT</Option>
              <Option value="LEASE_REGISTRATION">LEASE_REGISTRATION</Option>
              <Option value="ADD_POA">ADD_POA</Option>
              <Option value="ADD_COMPANY_EMPLOYEE">ADD_COMPANY_EMPLOYEE</Option>
           
              </Select>
            </div>
            <div className="filters-btn-field filters-field">
              <Button
                onClick={() => {
                    dispatch(setClearFilter());
                    handleRefreshData()
                }}
              >
                <i className="icon-filters"></i>
              </Button>
            </div>
          </div>
        </div>
        <div className="buttons-wrapper">
          <div className="select-field filters-field">
           
              <Button
                type="primary"
                className="download-all-btn"
                onClick={handleSearch}
              >
                Search Logger
              </Button>
          </div>
        </div>
      </div>
      
    )
}
export default FilteHeader