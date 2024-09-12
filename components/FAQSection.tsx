import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQSection = () => {
  return (
    <section id="faq" className="bg-white dark:bg-gray-900 scroll-smooth">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 ">
        <h2 className="mb-6 lg:mb-8 text-3xl lg:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Frequently asked questions
        </h2>
        <div className="mx-auto max-w-screen-md">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger className="py-5 w-full font-medium text-left text-gray-900 bg-white dark:bg-gray-900 dark:text-white text-lg">
                Can I use Flowbite in open-source projects?
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-5">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is an open-source library of interactive components
                    built on top of Tailwind CSS including buttons, dropdowns,
                    modals, navbars, and more.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out this guide to learn how to{' '}
                    <a
                      href="#"
                      className="text-primary-600 dark:text-primary-500 hover:underline"
                    >
                      get started
                    </a>{' '}
                    and start developing websites even faster with components on
                    top of Tailwind CSS.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="py-5 w-full font-medium text-left text-gray-900 bg-white dark:bg-gray-900 dark:text-white text-lg">
                Is there a Figma file available?
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-5">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Flowbite is first conceptualized and designed using the
                    Figma software so everything you see in the library has a
                    design equivalent in our Figma file.
                  </p>
                  <p className="text-gray-500 dark:text-gray-400">
                    Check out the{' '}
                    <a
                      href="#"
                      className="text-primary-600 dark:text-primary-500 hover:underline"
                    >
                      Figma design system
                    </a>{' '}
                    based on the utility classes from Tailwind CSS and
                    components from Flowbite.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="py-5 w-full font-medium text-left text-gray-900 bg-white dark:bg-gray-900 dark:text-white text-lg">
                What are the differences between Flowbite and Tailwind UI?
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-5">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    The main difference is that the core components from
                    Flowbite are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that
                    Flowbite relies on smaller and standalone components,
                    whereas Tailwind UI offers sections of pages.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    However, we actually recommend using both Flowbite, Flowbite
                    Pro, and even Tailwind UI as there is no technical reason
                    stopping you from using the best of two worlds.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Learn more about these technologies:
                  </p>
                  <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
                    <li>
                      <a
                        href="#"
                        className="text-primary-600 dark:text-primary-500 hover:underline"
                      >
                        Flowbite Pro
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-primary-600 dark:text-primary-500 hover:underline"
                      >
                        Tailwind UI
                      </a>
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="py-5 w-full font-medium text-left text-gray-900 bg-white dark:bg-gray-900 dark:text-white text-lg">
                What about browser support?
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-5">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    The main difference is that the core components from
                    Flowbite are open source under the MIT license, whereas
                    Tailwind UI is a paid product. Another difference is that
                    Flowbite relies on smaller and standalone components,
                    whereas Tailwind UI offers sections of pages.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    However, we actually recommend using both Flowbite, Flowbite
                    Pro, and even Tailwind UI as there is no technical reason
                    stopping you from using the best of two worlds.
                  </p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">
                    Learn more about these technologies:
                  </p>
                  <ul className="pl-5 list-disc text-gray-500 dark:text-gray-400">
                    <li>
                      <a
                        href="#"
                        className="text-primary-600 dark:text-primary-500 hover:underline"
                      >
                        Flowbite Pro
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="text-primary-600 dark:text-primary-500 hover:underline"
                      >
                        Tailwind UI
                      </a>
                    </li>
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
