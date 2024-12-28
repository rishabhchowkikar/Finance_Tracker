import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-50 flex items-center flex-col">
      <div className="mx-auto max-w-screen-lg px-4 py-32 lg:flex">
        <div className="mx-auto max-w-xl">
          <h1 className="font-extrabold text-center sm:text-5xl">
            Manage Your Expense
            <br />
            <strong className="font-extrabold text-primary sm:block">
              Increase Savings
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-center">
            Start Creating your Budget and save your Money and Future
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href={"/sign-in"}>
              <div className="block w-full rounded bg-primary px-12 py-3 text-sm text-center font-medium text-white shadow hover:bg-blue-900 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto">
                Get Started
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Image
        src={"/dashboard.png"}
        alt="dashboard"
        width={1000}
        height={800}
        className="mt-5 rounded-xl shadow-lg border-2"
      />
    </section>
  );
};

export default Hero;
