import BlogData from "@/components/buy/apiData";
import BlogItem from "@/components/buy/APIItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "API listing - KeySwap",
  description: "Find the latest API listed for users to buy",
  // other metadata
};

const BlogPage = async () => {
  return (
    <>


{/* SEARCH INPUT */}
      <section className="body-font ml-50 mt-24 items-center overflow-hidden text-gray-600">
        {/* search bar */}
        <div className="mb-2  text-sm font-medium text-gray-900 sr-only dark:text-white"></div>
        <div className="relative mt-10 w-4/5">
          <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">
            <svg
              className="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 ps-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Search APIs, functionalities, etc..."
          />
          <button
            type="submit"
            className="absolute bottom-2.5 end-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </section>

{/* API listing */}
      <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
    
      </div>
      </div>
      </section>
    </>
  );
};

export default BlogPage;
