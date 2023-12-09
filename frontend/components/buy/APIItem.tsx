"use client";
import { API } from "@/types/api";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import SingleBlogPage from "@/app/(site)/buy/[id]/page";

const BlogItem = ({ blog }: { blog: API }) => {
  const { name, _id, desc, mainImage } = blog;
  // const router = useRouter();

  // const handleTitleClick = () => {
  //   let title= blog.title;
  //   // router.push(`/blog/?id=${_id}`);
  // };

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
        className="animate_top rounded-lg bg-white p-4 pb-9 shadow-solid-8 dark:bg-blacksection"
      >
        {/* <Image src={mainImage} alt={name} fill /> */}
        <Link href={`/blog/`} className="relative block aspect-[368/239]">
          <Image src={mainImage} alt={name} fill />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2">
            <Link
              href={{
                pathname: `/blog/${blog._id}`,
                query: { data: JSON.stringify(blog) },
              }}
            >
              {`${name.slice(0, 40)}...`}
            </Link>
          </h3>
          <p className="line-clamp-3">{desc}</p>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
