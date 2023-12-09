import SidebarLink from "@/components/Docs/SidebarLink";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Docs Page - Solid SaaS Boilerplate",
  description: "This is Docs page for Solid Pro",
  // other metadata
};

export default function Chat() {
  return (
    <div className="pb-20 pt-40">
      <div className="flex h-5/6 text-gray-800 antialiased dark:text-white">
        <div className="flex h-full w-full flex-row overflow-x-hidden">
          <div className="flex w-64 flex-shrink-0 flex-col bg-white py-8 pl-6 pr-2 dark:bg-black">
            <div className="mt-8 flex flex-col">
              <div className="flex flex-row items-center justify-between text-xs">
                <span className="font-bold">Active Conversations</span>
                <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-300 dark:bg-gray-600">
                  4
                </span>
              </div>
              <div className="-mx-2 mt-4 flex h-full flex-col space-y-1 overflow-y-auto">
                <button className="flex flex-row items-center rounded-xl p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-200">
                    H
                  </div>
                  <div className="ml-2 text-sm font-semibold">Henry Boyd</div>
                </button>
                <button className="flex flex-row items-center rounded-xl p-2 hover:bg-gray-100 dark:hover:bg-gray-600">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
                    M
                  </div>
                  <div className="ml-2 text-sm font-semibold">Marta Curtis</div>
                  <div className="ml-auto flex h-4 w-4 items-center justify-center rounded bg-red-500 text-xs leading-none text-white">
                    2
                  </div>
                </button>

              </div>
            </div>
          </div>
          <div className="flex h-full flex-auto flex-col p-6">
            <div className="flex h-full flex-auto flex-shrink-0 flex-col rounded-2xl bg-gray-100 p-4 dark:bg-gray-900">
              <div className="mb-4 flex h-full flex-col overflow-x-auto">
                <div className="flex h-full flex-col">
                  <div className="grid grid-cols-12 gap-y-2">
                    <div className="col-start-1 col-end-8 rounded-lg p-3">
                      <div className="flex flex-row items-center">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500">
                          A
                        </div>
                        <div className="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow dark:bg-black">
                          <div>Hey How are you today?</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-start-1 col-end-8 rounded-lg p-3">
                      <div className="flex flex-row items-center">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500">
                          A
                        </div>
                        <div className="relative ml-3 rounded-xl bg-white px-4 py-2 text-sm shadow dark:bg-black">
                          <div>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Vel ipsa commodi illum saepe numquam maxime
                            asperiores voluptate sit, minima perspiciatis.
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-start-6 col-end-13 rounded-lg p-3">
                      <div className="flex flex-row-reverse items-center justify-start">
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-indigo-500">
                          A
                        </div>
                        <div className="relative mr-3 rounded-xl bg-indigo-100 px-4 py-2 text-sm shadow dark:bg-indigo-900">
                          <div>I'm ok what about you?</div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="flex h-16 w-full flex-row items-center rounded-xl bg-white px-4 dark:bg-black">
                <div className="flex-grow">
                  <div className="relative w-full">
                    <input
                      type="text"
                      className="flex h-10 w-full rounded-xl border pl-4 focus:border-indigo-300 focus:outline-none"
                    />
                    <button className="absolute right-0 top-0 flex h-full w-12 items-center justify-center text-gray-400 hover:text-gray-600">
                      <svg
                        className="h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="ml-4">
                  <button className="flex flex-shrink-0 items-center justify-center rounded-xl bg-indigo-500 px-4 py-1 text-white hover:bg-indigo-600">
                    <span>Send</span>
                    <span className="ml-2">
                      <svg
                        className="-mt-px h-4 w-4 rotate-45 transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        ></path>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
