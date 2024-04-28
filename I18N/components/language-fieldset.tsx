import type { NextPage } from "next";

export type LanguageFieldsetType = {
  translationSettings?: string;
  translationLanguage?: string;
  translationConfigurations?: string;
};

const LanguageFieldset: NextPage<LanguageFieldsetType> = ({
  translationSettings,
  translationLanguage,
  translationConfigurations,
}) => {
  return (
    <fieldset
      className="flex-1 flex flex-col items-start justify-start text-center text-[1.125rem] text-darkslateblue font-inter lg:flex-1 lg:h-auto"
      id="targetTool"
    >
      <label
        className="cursor-pointer flex flex-row items-center justify-center p-[0.625rem]"
        htmlFor={translationSettings}
      >
        <div className="relative lg:text-[0.875rem]">{translationLanguage}</div>
      </label>
      <select
        className="self-stretch bg-carrier-color-guide-white box-border h-[2.438rem] flex flex-row items-center justify-between p-[0.625rem] font-inter text-[0.875rem] text-carrier-color-guide-dark-gray border-[1px] border-solid border-carrier-color-guide-light-gray lg:self-stretch lg:w-auto lg:h-auto lg:max-h-[2rem]"
        required={true}
        id={translationConfigurations}
      >
        <option value="English">English</option>
      </select>
    </fieldset>
  );
};

export default LanguageFieldset;
