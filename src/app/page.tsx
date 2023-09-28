import Image from "next/image";
import Header from "./components/Header";
import Listing from "./components/LIsting";
import JobList from "./components/JobList";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-auto">
      <Header />
      <JobList />

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
  );
}
