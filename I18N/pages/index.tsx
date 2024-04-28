import type { NextPage } from "next";
import { LinearProgress, Box } from "@mui/material";
import Header from "../components/header";
import ProjectFormContainer from "../components/project-form-container";
import FileTableContainer from "../components/file-table-container";

const I18N: NextPage = () => {
  return (
    <div className="w-[120rem] h-[67.5rem] relative bg-whitesmoke overflow-hidden flex flex-col items-center justify-between gap-[-120rem] hover:bg-whitesmoke hover:flex hover:w-[1920px] hover:h-[1080px] hover:flex-col hover:gap-[-1920px] hover:items-center hover:justify-between lg:w-auto lg:[align-self:unset] lg:h-auto lg:flex-col lg:items-start lg:justify-start lg:pt-[0rem] lg:pb-[0rem] lg:box-border lg:min-w-full lg:max-w-full lg:min-h-full lg:max-h-full md:w-full md:h-full md:flex-col sm:h-auto sm:flex-col sm:items-center sm:justify-center sm:max-w-[6.25rem]">
      <Header />
      <main
        className="w-[120rem] flex-1 flex flex-col items-center justify-start py-[1.25rem] px-[3.125rem] box-border gap-[1.25rem] max-h-[991] h-full hover:flex hover:w-[1920px] hover:h-full hover:flex-col hover:gap-[20px] hover:items-center hover:justify-start hover:py-5 hover:px-[50px] hover:box-border hover:max-h-[991] lg:self-stretch lg:w-auto lg:h-full lg:flex-col lg:gap-[1.25rem] lg:pt-[0.625rem] lg:pb-[0.625rem] lg:box-border md:self-stretch md:w-auto md:h-full md:flex-col md:gap-[0.625rem] md:p-[0.625rem] md:box-border md:min-h-[92%] sm:self-stretch sm:w-auto sm:h-full sm:flex-row sm:flex-wrap"
        id="mainBodyContaier"
      >
        <ProjectFormContainer />
        <Box className="self-stretch relative" sx={{ width: "100%" }}>
          <LinearProgress variant="determinate" value={80} />
        </Box>
        <FileTableContainer />
      </main>
      <footer
        className="self-stretch h-[2.125rem] shadow-[0px_-4px_4px_rgba(0,_0,_0,_0.25)] bg-carrier-color-guide-white overflow-hidden shrink-0 flex flex-col items-center justify-center max-h-[34] w-auto gap-[0rem] text-center text-[0.75rem] text-carrier-color-guide-black font-roboto hover:bg-carrier-color-guide-white hover:flex hover:self-stretch hover:w-auto hover:h-[34px] hover:flex-col hover:gap-[0px] hover:items-center hover:justify-center hover:shadow-[0px_-4px_4px_rgba(0,_0,_0,_0.25)] hover:max-h-[34] lg:self-stretch lg:w-auto lg:h-full lg:flex-row lg:items-center lg:justify-center lg:pl-[0rem] lg:pr-[0rem] lg:box-border lg:max-h-[1.563rem] md:self-stretch md:w-auto md:h-[3%] md:flex-row md:flex-wrap md:items-center md:justify-center sm:hidden sm:w-[26.25rem]"
        id="utgFooter"
      >
        <div className="relative md:text-[0.5rem]">Copy Rights ©</div>
      </footer>
    </div>
  );
};

export default I18N;
