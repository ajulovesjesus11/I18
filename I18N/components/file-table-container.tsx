import type { NextPage } from "next";

const FileTableContainer: NextPage = () => {
  return (
    <div
      className="self-stretch flex-1 flex flex-col items-center justify-start py-[0.625rem] px-[0rem] lg:self-stretch lg:w-auto lg:flex-1 lg:items-center lg:justify-start lg:pt-[1%] lg:pb-[1%] lg:box-border md:min-h-[40%]"
      id="table"
    >
      <table className="self-stretch rounded-3xs overflow-hidden">
        <thead>
          <tr className="bg-gainsboro text-carrier-color-guide-black">
            <th className="relative pb-[0rem]">
              <div className="bg-darkslateblue box-border h-[2.5rem] flex flex-row items-center justify-start w-full border-b-[1px] border-solid border-carrier-color-guide-light-gray bg-darkslateblue box-border h-[2.5rem] flex flex-row items-center justify-start w-full border-b-[1px] border-solid border-carrier-color-guide-light-gray">
                <div className="w-[27.5rem] relative inline-block shrink-0 lg:text-[0.875rem] w-[27.5rem] relative inline-block shrink-0 lg:text-[0.875rem]">
                  File Name
                </div>
              </div>
            </th>
            <th className="relative pb-[0rem]">
              <div className="bg-darkslateblue box-border h-[2.5rem] flex flex-row items-center justify-start w-full border-b-[1px] border-solid border-carrier-color-guide-light-gray">
                <div className="w-[20.813rem] relative text-[1rem] font-inter text-carrier-color-guide-white text-left inline-block shrink-0 lg:text-[0.875rem]">
                  Download
                </div>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="relative">
              <div className="bg-carrier-color-guide-white box-border h-[2.813rem] flex flex-row items-center justify-start w-full text-carrier-color-guide-dark-gray border-b-[1px] border-solid border-carrier-color-guide-light-gray bg-carrier-color-guide-white box-border h-[2.813rem] flex flex-row items-center justify-start w-full text-carrier-color-guide-dark-gray border-b-[1px] border-solid border-carrier-color-guide-light-gray">
                <div className="flex-1 relative lg:text-[0.875rem] flex-1 relative lg:text-[0.875rem]">{`File Name `}</div>
              </div>
            </td>
            <td className="relative">
              <div className="bg-carrier-color-guide-white box-border h-[2.813rem] flex flex-row items-center justify-start w-full border-b-[1px] border-solid border-carrier-color-guide-light-gray">
                <div className="flex-1 relative text-[1rem] font-inter text-carrier-color-guide-carrier-light-blue text-left lg:text-[0.875rem]">
                  Download link
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FileTableContainer;
