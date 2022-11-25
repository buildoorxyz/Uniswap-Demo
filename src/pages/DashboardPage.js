import { useState } from "react";
import { data as commonData } from "../data/commonData";
import { data } from "../data/dashboardData";
import DashboardTemplate from "../templates/DashboardTemplate";

const DashboardPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [showAnswer, setShowAnswer] = useState({
    visible: false,
    questionKey: null,
  });

  return (
    <DashboardTemplate
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      showAnswer={showAnswer}
      setShowAnswer={setShowAnswer}
      data={data}
      commonData={commonData}
      isSideBarOpen={isSideBarOpen}
      setIsSideBarOpen={setIsSideBarOpen}
    />
  );
};

export default DashboardPage;
