import moment from "moment"
export const filterDataHelper=(data,filters)=>{


    const {logId,applicationId,creationDate,applicationType}=filters
 

    return data.filter(el => (logId && el.logId == logId) || (applicationId && el.applicationId == applicationId) 
    || (applicationType && el.applicationType == applicationType) 
    
    || (creationDate?.startDate && compareDates(el,creationDate)   ))

}
const compareDates=(el,creationDate)=>{
    if(moment(el?.creationTimestamp)?.format("YYYY-DD-MM") >= creationDate.startDate && moment(el?.creationTimestamp)?.format("YYYY-MM-DD") <= creationDate.endDate){
        return true
    }else{
        return false
    }

    // return (moment(el?.creationTimestamp)?.format("YYYY-DD-MM") >= creationDate.startDate && moment(el?.creationTimestamp)?.format("YYYY_MM_DD") <= creationDate.endDate)
}