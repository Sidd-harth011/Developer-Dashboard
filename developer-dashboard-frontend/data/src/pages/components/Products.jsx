
import { Card } from "flowbite-react";
import { BsThreeDotsVertical } from "react-icons/bs";

export function Products() {
  return (
    <Card className="p-5 flex flex-col gap-2 rounded-2xl shadow-sm"
                style={{ border: "2px solid #ebebeb" }}>
      <div className="mb-4 flex items-center justify-between">
        <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Latest Products</h5>
        <a href="#" className="text-sm font-medium text-cyan-600 hover:underline dark:text-cyan-500">
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img
                  alt="Neil image"
                  height="32"
                  src="/images/people/profile-picture-1.jpg"
                  width="32"
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Neil Sims</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white cursor-pointer h-full">
              <BsThreeDotsVertical style={{color:'#667085',fontSize:'18px'}}/>
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img
                  alt="Bonnie image"
                  height="32"
                  src="/images/people/profile-picture-3.jpg"
                  width="32"
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Bonnie Green</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white cursor-pointer h-full">
              <BsThreeDotsVertical style={{color:'#667085',fontSize:'18px'}}/>
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img
                  alt="Michael image"
                  height="32"
                  src="/images/people/profile-picture-2.jpg"
                  width="32"
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Michael Gough</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white cursor-pointer h-full">
              <BsThreeDotsVertical style={{color:'#667085',fontSize:'18px'}}/>
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img
                  alt="Lana image"
                  height="32"
                  src="/images/people/profile-picture-4.jpg"
                  width="32"
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Lana Byrd</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white cursor-pointer h-full">
              <BsThreeDotsVertical style={{color:'#667085',fontSize:'18px'}}/>
              </div>
            </div>
          </li>
          <li className="pb-0 pt-3 sm:pt-4">
            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <img
                  alt="Thomas image"
                  height="32"
                  src="/images/people/profile-picture-5.jpg"
                  width="32"
                  className="rounded-full"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900 dark:text-white">Thomes Lean</p>
                <p className="truncate text-sm text-gray-500 dark:text-gray-400">email@windster.com</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white cursor-pointer h-full">
              <BsThreeDotsVertical style={{color:'#667085',fontSize:'18px'}}/>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </Card>
  );
}
