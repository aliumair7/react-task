import {useQuery} from 'react-query'
import { Table } from 'antd';
import FilteHeader from './FilterHeader';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { filterDataHelper } from '../utilities/filtersHelpers';



const fetchServerData = async () => {
    const res = await fetch("https://run.mocky.io/v3/a2fbc23e-069e-4ba5-954c-cd910986f40f");
    return res.json();
  };

  const columns = [
    {
      title: 'Log ID',
      dataIndex: 'logId',
      sorter:(a,b) => a?.logId - b.logId
    
    },
    {
      title: 'Application Type',
      dataIndex: 'applicationType',
      sorter:(a,b) => a?.actionType?.localeCompare(b?.actionType)
   
    },
    {
      title: 'Application ID',
      dataIndex: 'applicationId',
      sorter:(a,b) => a?.logId - b.logId

    
    },
    {
      title: 'Action',
      dataIndex: 'actionType',
      sorter:(a,b) => a?.actionType?.localeCompare(b.actionType)
     
    },
    {
        title: 'Action Details',
        dataIndex: 'actionDetails',
        sorter:(a,b) => a?.actionDetails?.localeCompare(b.actionDetails)

      
      },
      {
        title: 'Date:Time',
        dataIndex: 'creationTimestamp',
        sorter:(a,b) => a?.creationTimestamp?.localeCompare(b.creationTimestamp)

        
      },
  ];
const TableComponnet=()=>{
    const { data:serverData, isLoading,isError } = useQuery("serverData", fetchServerData, {
        staleTime: Infinity
      });
    const[filterData,setFilterData]=useState()
   
     
     
      const { logId, applicationId, creationDate, applicationType } = useSelector(
        (state) => state.loggerFilters.filter
      );
      const handleSearchLogger=()=>{
        console.log("Redux datta",logId,applicationId,creationDate,applicationType)
        let filtersData=filterDataHelper(serverData?.result?.auditLog,{logId,applicationId,creationDate,applicationType})
     setFilterData(filtersData)
      }
      const handleRefreshData=()=>{
        setFilterData(serverData?.result?.auditLog)
      }
      useEffect(()=>{
setFilterData(serverData?.result?.auditLog)
      },[isLoading])
    return (
        <>
        <FilteHeader handleSearch={handleSearchLogger} handleRefreshData={handleRefreshData}/>
<Table columns={columns} loading={isLoading} dataSource={filterData}  />        </>
    )
}
export default TableComponnet