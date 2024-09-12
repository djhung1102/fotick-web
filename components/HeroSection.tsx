import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-white dark:bg-gray-900 antialiased scroll-smooth"
    >
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="text-center">
          <div>
            <h2 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
              FoTick
            </h2>
            <span className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl md:block">
              Efficient every day, accomplish every goal
            </span>
            <p className="mt-4 text-base font-normal text-gray-500 dark:text-gray-400 md:max-w-3xl md:mx-auto sm:text-xl">
              FoTick is not just a task management tool but your partner in
              optimizing your life. With a user-friendly interface and smart
              reminders, every task from the smallest to the most important will
              be organized systematically, allowing you to focus on what matters
              most.
            </p>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8 max-w-sm mx-auto">
            <Link
              href="#"
              title=""
              className="inline-flex items-center justify-center w-full px-2 sm:px-4 py-3 text-left text-white bg-gray-900 rounded-lg sm:w-auto hover:bg-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300"
              role="button"
            >
              <svg
                aria-hidden="true"
                className="h-8 w-8 sm:w-10 sm:h-10"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19.665 16.811a10.316 10.316 0 0 1-1.021 1.837c-.537.767-.978 1.297-1.316 1.592-.525.482-1.089.73-1.692.744-.432 0-.954-.123-1.562-.373-.61-.249-1.17-.371-1.683-.371-.537 0-1.113.122-1.73.371-.616.25-1.114.381-1.495.393-.577.025-1.154-.229-1.729-.764-.367-.32-.826-.87-1.377-1.648-.59-.829-1.075-1.794-1.455-2.891-.407-1.187-.611-2.335-.611-3.447 0-1.273.275-2.372.826-3.292a4.857 4.857 0 0 1 1.73-1.751 4.65 4.65 0 0 1 2.34-.662c.46 0 1.063.142 1.81.422s1.227.422 1.436.422c.158 0 .689-.167 1.593-.498.853-.307 1.573-.434 2.163-.384 1.6.129 2.801.759 3.6 1.895-1.43.867-2.137 2.08-2.123 3.637.012 1.213.453 2.222 1.317 3.023a4.33 4.33 0 0 0 1.315.863c-.106.307-.218.6-.336.882zM15.998 2.38c0 .95-.348 1.838-1.039 2.659-.836.976-1.846 1.541-2.941 1.452a2.955 2.955 0 0 1-.021-.36c0-.913.396-1.889 1.103-2.688.352-.404.8-.741 1.343-1.009.542-.264 1.054-.41 1.536-.435.013.128.019.255.019.381z"></path>
              </svg>

              <div className="ml-2.5">
                <span className="block text-xs font-normal leading-none">
                  Download on
                </span>
                <span className="block text-lg font-bold leading-tight">
                  AppStore
                </span>
              </div>
            </Link>
          </div>
        </div>

        <div className="my-8 sm:my-16">
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
            <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
            <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
            <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
            <div className="rounded-[2.5rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
              <Image
                src="/Anh3.png"
                alt=""
                width={272}
                height={572}
                className="dark:hidden w-[272px] h-[572px]"
              />
              <Image
                src="/Anh3.png"
                alt=""
                width={272}
                height={572}
                className="hidden dark:block w-[272px] h-[572px]"
              />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 sm:gap-6 sm:mt-8">
          <div className="flex -space-x-3 overflow-hidden">
            <Image
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/neil-sims.png"
              alt=""
              width={32}
              height={32}
              className="inline-block w-8 h-8 border border-white rounded-full dark:border-gray-900"
            />
            <Image
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt=""
              width={32}
              height={32}
              className="inline-block w-8 h-8 border border-white rounded-full dark:border-gray-900"
            />
            <Image
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gough.png"
              alt=""
              width={32}
              height={32}
              className="inline-block w-8 h-8 border border-white rounded-full dark:border-gray-900"
            />
            <Image
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png"
              alt=""
              width={32}
              height={32}
              className="inline-block w-8 h-8 border border-white rounded-full dark:border-gray-900"
            />
          </div>

          <div className="w-px h-8 bg-gray-200 dark:bg-gray-700"></div>

          <div>
            <div className="flex items-center gap-1.5">
              <div className="flex items-center gap-0.5">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-yellow-300"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className="text-base font-normal text-gray-500 dark:text-gray-400">
                5.0
              </span>
            </div>
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
              Rated Best Over{' '}
              <span className="font-semibold text-gray-900 dark:text-white">
                1.7k
              </span>{' '}
              Reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
