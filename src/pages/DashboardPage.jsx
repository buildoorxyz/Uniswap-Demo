import { useEffect, useState } from "react";
import { data as commonData } from "../data/commonData";
import { data } from "../data/dashboardData";
import DashboardTemplate from "../templates/DashboardTemplate";
import { activityInt } from '../interface/appInterface';

const DashboardPage = ({ activityMap, accountAddress, timelineIcon, setTimelineIcon, confettiOpen, sideOpen, transactionLen, infoMap, activitySum }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [showAnswer, setShowAnswer] = useState({
    visible: false,
    questionKey: null,
  });

  useEffect(() => {
    if (sideOpen)
      setIsSideBarOpen(true);
  }, [sideOpen])
  return (
    <DashboardTemplate
      showAnswer={showAnswer}
      setShowAnswer={setShowAnswer}
      data={data}
      commonData={commonData}
      isSideBarOpen={isSideBarOpen}
      setIsSideBarOpen={setIsSideBarOpen}
      activityMap={activityMap}
      accountAddress={accountAddress}
      timelineIcon={timelineIcon}
      setTimelineIcon={setTimelineIcon}
      confettiOpen={confettiOpen}
      transactionLen={transactionLen}
      infoMap={infoMap}
      activitySum={activitySum}
    />
  );
};

export default DashboardPage;
