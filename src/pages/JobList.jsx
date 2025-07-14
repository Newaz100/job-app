import { useEffect, useState } from "react";
import { getJobList } from "../services/api";

export default function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await getJobList();
        setJobs(res.data.results);
      } catch (err) {
        console.error("Failed to fetch jobs");
      }
    };
    fetchJobs();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Job Listings</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-5 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-blue-700">{job.title}</h3>
            <p className="text-gray-600 text-sm">{job.company_name}</p>
            <p className="text-sm">{job.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
