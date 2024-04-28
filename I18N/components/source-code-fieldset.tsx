import type { NextPage } from "next";

export type SourceCodeFieldsetType = {
  translationTargetTool?: string;
  sourceCodeKey?: string;
  codeIdentifier?: string;
  codeUploadLabel?: string;
};

const SourceCodeFieldset: NextPage<SourceCodeFieldsetType> = ({
  translationTargetTool,
  sourceCodeKey,
  codeIdentifier,
  codeUploadLabel,
}) => {
  return (
    <fieldset
      className="flex-1 flex flex-col items-start justify-start text-center text-[1.125rem] text-darkslateblue font-inter lg:flex-1 lg:h-auto"
      id="targetTool"
    >
      <label
        className="cursor-pointer flex flex-row items-center justify-center p-[0.625rem]"
        htmlFor={translationTargetTool}
      >
        <div className="relative lg:text-[0.875rem]">{sourceCodeKey}</div>
      </label>
      <label
        className="cursor-pointer self-stretch bg-carrier-color-guide-white box-border h-[2.438rem] flex flex-row items-center justify-start p-[0.625rem] text-left text-[0.875rem] text-carrier-color-guide-dark-gray border-[1px] border-solid border-carrier-color-guide-light-gray lg:self-stretch lg:w-auto lg:h-auto lg:max-h-[2rem]"
        htmlFor={codeIdentifier}
      >
        <div className="relative lg:text-[0.875rem]">{codeUploadLabel}</div>
      </label>
    </fieldset>
  );
};

export default SourceCodeFieldset;
