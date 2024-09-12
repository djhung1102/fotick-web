import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const FooterDefault = () => {
  return (
    <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
      <div className="max-w-screen-xl mx-auto text-center">
        <Link
          href="#"
          className="flex items-center justify-center text-2xl font-semibold text-gray-900 dark:text-white"
        >
          <Image
            src="/Anh2.png"
            width={20}
            height={20}
            alt="Flowbite Logo"
            className="mr-3 h-6 sm:h-9 w-9 rounded-lg"
          />
          FoTick
        </Link>
        <p className="my-6 text-gray-500 dark:text-gray-400">
          FoTick To-do-list
        </p>
        {/* <ul className="flex flex-wrap items-center justify-center mb-6 text-gray-900 dark:text-white"> */}
        {/* <li>
            <Link
              href={'/terms-of-use'}
              className="mr-4 hover:underline md:mr-6 "
            >
              Terms of use
            </Link>
          </li>
          <li>
            <Link
              href={'/privacy-policy'}
              className="mr-4 hover:underline md:mr-6"
            >
              Privacy policy
            </Link>
          </li> */}
        {/* </ul> */}
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{' '}
          <Link href="#" className="hover:underline">
            FoTick
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default FooterDefault;
