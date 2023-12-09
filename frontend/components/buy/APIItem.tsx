"use client";
import { API } from "@/types/api";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import SingleBlogPage from "@/app/(site)/buy/[id]/page";

const BlogItem = ({ blog }: { blog: API }) => {
  const { name, _id, desc, mainImage, price } = blog;
  // const router = useRouter();

  // const handleTitleClick = () => {
  //   let title= blog.title;
  //   // router.push(`/blog/?id=${_id}`);
  // };

  return (
    <>
      <div className="p-4 lg:w-1/3">
        <div className="relative h-full overflow-hidden rounded-3xl bg-blue-100 bg-opacity-75 px-8 pb-16  pt-16">
          {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
          <button className="mb-4 rounded bg-blue-800 px-2 py-0 font-bold text-white">
            Popular
          </button>
          <h1 className="title-font mb-3 text-xl font-medium text-gray-900 sm:text-2xl">
            {/* <Link
              href={{
                pathname: `/api/${blog._id}`,
                query: { data: JSON.stringify(blog) },
              }}
            > */}
            {/* {`${name.slice(0, 40)}...`} */}
            {name}
            {/* </Link> */}
          </h1>
          <p className="mb-3 leading-relaxed">{desc}</p>
          <hr className="my-8 h-px border-0 bg-gray-100 dark:bg-gray-700"></hr>

          {/* <a className="text-indigo-500 inline-flex ">Learn More
            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14"></path>
              <path d="M12 5l7 7-7 7"></path>
            </svg>

          </a> */}

          <div className=" flex flex-col">
            <div className="inline-flex items-center gap-x-8 leading-none">
              <span className="flex flex-grow flex-col pl-4">
                <span className="text-s mb-1 tracking-widest text-gray-400">
                  DURATION
                </span>
                <span className="title-font font-large font-semibold text-gray-900">
                  6 months
                </span>
              </span>

              <span className="flex flex-grow flex-col pl-4">
                <span className="text-s mb-1 tracking-widest text-gray-400">
                  RENT FROM
                </span>
                <span className="title-font font-large font-semibold text-gray-900">
                  January
                </span>
              </span>
            </div>
            {/* <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
            <span className="text-gray-400 mr-3 inline-flex  leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                <circle cx="12" cy="12" r="3"></circle>
              </svg>1.2K
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              <svg className="w-4 h-4 mr-1" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>6
            </span>
          </div> */}

           <div className="flex flex-row-reverse">
           <button className="w-1/2 mt-10 rounded bg-blue-700 px-4 py-2 font-bold text-white hover:bg-blue-900">
              Buy for ${price}
            </button>
           </div>
          </div>
        </div>
      </div>

    </>
    // <>
    //   <motion.div
    //     variants={{
    //       hidden: {
    //         opacity: 0,
    //         y: -20,
    //       },

    //       visible: {
    //         opacity: 1,
    //         y: 0,
    //       },
    //     }}
    //     initial="hidden"
    //     whileInView="visible"
    //     transition={{ duration: 1, delay: 0.5 }}
    //     viewport={{ once: true }}
    //     className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
    //   >
    //     <Link href={`/blog/`} className="relative block aspect-[368/239]">
    //       <Image src={mainImage} alt={name} fill />
    //     </Link>

    //     <div className="px-4">
    //       <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
    //         <Link
    //           href={{
    //             pathname: `/blog/${blog._id}`,
    //             query: { data: JSON.stringify(blog) },
    //           }}
    //         >
    //           {`${name.slice(0, 40)}...`}
    //         </Link>
    //       </h3>
    //       <p className="line-clamp-3">{desc}</p>
    //     </div>
    //   </motion.div>
    // </>
  );
};

export default BlogItem;
