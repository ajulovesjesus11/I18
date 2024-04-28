import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <header
      className="self-stretch h-[3.438rem] shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] bg-carrier-color-guide-white overflow-hidden shrink-0 flex flex-row items-center justify-between py-[0.125rem] px-[0.625rem] box-border max-h-[55] w-auto gap-[96.812rem] text-left text-[1.375rem] text-darkslateblue font-roboto hover:bg-carrier-color-guide-white hover:flex hover:self-stretch hover:w-auto hover:h-[55px] hover:flex-row hover:gap-[1549px] hover:items-center hover:justify-between hover:py-0.5 hover:px-2.5 hover:box-border hover:shadow-[0px_2px_4px_rgba(0,_0,_0,_0.25)] hover:max-h-[55] lg:self-stretch lg:w-auto lg:h-full lg:flex-row lg:items-center lg:justify-between lg:gap-[0rem] lg:shadow-[0px_1px_4px_rgba(0,_0,_0,_0.1),_0px_0px_2px_rgba(0,_0,_0,_0.1)] lg:max-h-[1.875rem] md:self-stretch md:w-auto md:h-[6%] md:items-center md:justify-between md:gap-[0rem] sm:self-stretch sm:w-auto sm:flex-row sm:items-center sm:justify-between sm:gap-[0rem] sm:pl-[0.313rem] sm:pr-[0.313rem] sm:box-border"
      id="utgHeader"
    >
      <div className="flex flex-row items-center justify-start sm:flex">
        <div className="flex flex-row items-center justify-center p-[0.625rem] gap-[0.625rem] sm:flex">
          <img
            className="w-[1.5rem] relative h-[1.5rem]"
            alt=""
            src="/logo.svg"
          />
          <b className="relative leading-[140%] lg:text-[1.125rem] sm:hidden">
            I18N Accelerator
          </b>
        </div>
      </div>
      <div className="w-[5.625rem] flex flex-row items-center justify-between lg:flex sm:flex sm:items-center sm:justify-between sm:gap-[0rem]">
        <div className="w-[1.288rem] flex flex-row items-start justify-between relative md:flex sm:flex">
          <img
            className="w-[1.288rem] relative h-[1.5rem] z-[0]"
            alt=""
            src="/belloutline.svg"
          />
          <div className="w-[0.813rem] absolute !m-[0] top-[0.063rem] left-[0.688rem] rounded-[50%] bg-red h-[0.813rem] z-[1]" />
        </div>
        <div className="w-[3.313rem] flex flex-row items-center justify-between md:hidden sm:hidden">
          <img
            className="w-[1.5rem] relative rounded-21xl h-[1.5rem] overflow-hidden shrink-0 object-cover md:hidden"
            alt=""
            src="/profile-picture@2x.png"
          />
          <img
            className="w-[1.5rem] relative h-[1.5rem] md:hidden"
            alt=""
            src="/caretdown.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
