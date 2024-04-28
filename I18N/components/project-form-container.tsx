import type { NextPage } from "next";
import SourceCodeFieldset from "./source-code-fieldset";
import LanguageFieldset from "./language-fieldset";

const ProjectFormContainer: NextPage = () => {
  return (
    <div
      className="self-stretch box-border flex flex-col items-end justify-start py-[1.25rem] px-[0rem] gap-[0.625rem] w-auto h-auto text-left text-[1rem] text-darkslateblue font-inter border-b-[1px] border-solid border-carrier-color-guide-light-gray hover:flex hover:self-stretch hover:w-auto hover:h-auto hover:flex-col hover:gap-[10px] hover:items-end hover:justify-start hover:py-5 hover:px-0 hover:box-border lg:self-stretch lg:w-auto lg:h-auto lg:flex-col lg:gap-[0.313rem] lg:items-end lg:justify-between lg:py-[1%] lg:px-[0rem] lg:box-border lg:min-h-[20%] md:self-stretch md:w-auto md:min-h-[40%]"
      id="createProjectContainer"
    >
      <div className="self-stretch flex flex-row items-end justify-end lg:flex-1">
        <fieldset
          className="flex-1 h-[5.063rem] flex flex-col items-start justify-start text-center text-[1.125rem] text-darkslateblue font-inter lg:flex-1 lg:h-auto lg:gap-[0.063rem] lg:items-start lg:justify-center lg:pb-[0rem] lg:box-border lg:max-h-[30%]"
          id="projectNameContainer"
        >
          <label
            className="cursor-pointer self-stretch flex flex-row items-center justify-start p-[0.625rem]"
            htmlFor="projectName"
          >
            <div className="relative lg:text-[0.875rem]">Project Name</div>
          </label>
          <input
            className="[outline:none] font-inter text-[0.875rem] bg-carrier-color-guide-white self-stretch flex flex-row items-center justify-start p-[0.625rem] text-carrier-color-guide-light-gray border-[1px] border-solid border-carrier-color-guide-light-gray lg:h-auto lg:gap-[0.625rem] lg:max-h-[2rem]"
            name="projectName"
            id="projectName"
            placeholder="Enter Project Name"
            type="text"
          />
        </fieldset>
      </div>
      <div
        className="self-stretch flex flex-row items-end justify-end gap-[0.312rem] lg:flex-1"
        id="dropdownFieldset"
      >
        <SourceCodeFieldset
          translationTargetTool="targetTool"
          sourceCodeKey="Source Code"
          codeIdentifier="sourcCode"
          codeUploadLabel="Upload source code"
        />
        <button
          className="cursor-pointer p-[0.625rem] bg-carrier-color-guide-white rounded-8xs flex flex-row items-center justify-center gap-[0.625rem] border-[1px] border-solid border-darkslateblue"
          id="sourceCodeButton"
        >
          <img
            className="w-[1.125rem] relative h-[1.125rem]"
            alt=""
            src="/uploadicon.svg"
          />
          <div className="relative text-[1rem] font-inter text-darkslateblue text-left lg:text-[0.875rem]">
            Browse
          </div>
        </button>
        <SourceCodeFieldset
          translationTargetTool="targetLang"
          sourceCodeKey="Key"
          codeIdentifier="key"
          codeUploadLabel="Upload key"
        />
        <button
          className="cursor-pointer p-[0.625rem] bg-carrier-color-guide-white rounded-8xs flex flex-row items-center justify-center gap-[0.625rem] border-[1px] border-solid border-darkslateblue"
          id="sourceCodeButton"
        >
          <img
            className="w-[1.125rem] relative h-[1.125rem]"
            alt=""
            src="/uploadicon.svg"
          />
          <div className="relative text-[1rem] font-inter text-darkslateblue text-left lg:text-[0.875rem]">
            Browse
          </div>
        </button>
      </div>
      <div
        className="self-stretch flex flex-row items-end justify-end gap-[0.312rem] lg:flex-1"
        id="dropdownFieldset"
      >
        <LanguageFieldset
          translationSettings="targetTool"
          translationLanguage="Language"
          translationConfigurations="targetTool"
        />
        <LanguageFieldset
          translationSettings="targetLang"
          translationLanguage="Target Lang"
          translationConfigurations="targetLang"
        />
      </div>
      <div className="rounded-8xs bg-carrier-color-guide-white flex flex-row items-center justify-center py-[0.625rem] px-[2.375rem] border-[1px] border-solid border-darkslateblue">
        <div className="relative">Generate</div>
      </div>
    </div>
  );
};

export default ProjectFormContainer;
