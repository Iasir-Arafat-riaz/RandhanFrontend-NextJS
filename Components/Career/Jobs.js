import Job from "./Job";

const Jobs = ({allJobs}) => {
    return <div className="p-5">
     
    {
       
        allJobs.map((job,index)=><Job key={index} {...job}></Job>)
    }
    </div>;
}
 
export default Jobs;