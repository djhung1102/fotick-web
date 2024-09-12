/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="text-center text-white font-bold text-5xl">
            Privacy Policy
          </div>

          <div className="grid grid-cols-1 gap-8 mt-8 lg:gap-16 lg:grid-cols-1 lg:mt-16 lg:px-40">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                  Overview
                </h2>
                <p className="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                  At Xtify, one of our main priorities is the privacy of our
                  users. This Privacy Policy document describes how your
                  personal information is handled by Xtify.
                </p>
                <p className="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                  If you have additional questions or require more information
                  about our Privacy Policy, do not hesitate to contact us.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                  We collect no personal information in our applications
                </h3>
                <p className="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                  We do not collect, use, save or have access to any of your
                  personal data recorded in Xtify apps.
                </p>
                <p className="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Individual settings relating to the Xtify apps are not
                  personal and are stored only on your device and on your iCloud
                  account using Apple frameworks.
                </p>
                <p className="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Xtify includes{' '}
                  <Link
                    href={'https://appcenter.ms/'}
                    className="text-white font-semibold"
                  >
                    AppCenter
                  </Link>{' '}
                  to collect crash events and basic analytics events that can't
                  be used to track or identify you.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                  Consent
                </h3>
                <p className="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                  By using our app, you hereby consent to our Privacy Policy and
                  agree to its Terms and Conditions.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white">
                  Changes to this Privacy Policy
                </h3>
                <p className="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                  We may change this Privacy Policy at any time. All changes
                  will be published here.
                </p>
                <p className="mt-2 text-lg font-normal text-gray-500 dark:text-gray-400">
                  Any changes to this Privacy Policy will become effective when
                  we publish the revised Privacy Policy. Your use of our app
                  following these changes means that you accept the revised
                  Privacy Policy. Therefore, we ask you to{' '}
                  <b className="font-semibold text-white">
                    review our Privacy Policy from time to time.
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
