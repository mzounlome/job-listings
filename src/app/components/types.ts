// type= Position {
//   SeniorFrontendDev = "Senior Frontend Developer",
//   JuniorFrontendDev = "Junior Frontend Developer",
//   JuniorBackendDev = "Junior Backend Developer",
//   JuniorDev = "Junior Developer",
//   SoftwareEng = "Software Engineer",
//   FullstackDev = "Fullstack Developer",
//   FullstackEng = "Full Stack Engineer",
// }

// type Role= {
//   Frontend = "Frontend",
//   Fullstack = "Fullstack",
//   Backend = "Backend",
// }
// type Level ={
//   Senior = "Senior",
//   Midweight = "Midweight",
//   Junior = "Junior",
// }

// type Contract = {
//   FullTime = "Full Time",
//   PartTime = "Part Time",
// }

// type Location = {
//   UsaOnly = "USA Only",
//   Remote = "Remote",
//   Worldwide = "Worldwide",
//   UkOnly = "UK Only",
// }

export interface jobListing {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
}
