import { Typography } from "antd";
import { current } from "immer";
import { useEffect, useState } from "react";
import BasicButton from "../atoms/BasicButton";
import BasicCard from "../atoms/BasicCard";
import ModalTemplate from "./ModalTemplate";

const TutorialTemplate = ({ data, currentStep, setCurrentStep, accountAd, timelineIcon, setTimelineIcon, setConfettiOpen, setSideOpen, setNavDrop, setNavDropHistory }) => {
  const stepData = data.steps.find((step) => step.id === currentStep);
  var [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (openModal) {
      setTimeout(() => setSideOpen(true), 3000);
    }
  }, [openModal])

  useEffect(() => {
    if (currentStep == 6) {
      setNavDrop(true);
    }
    if (currentStep == 7) {
      setNavDropHistory(true);
    }
    if (currentStep == 8) {
      setNavDrop(false);
      setNavDropHistory(false);
    }
  }, [currentStep])

  useEffect(() => {
    if (accountAd.length > 0) {
      if (currentStep == 1) {
        timelineIcon.push(currentStep);
        setTimelineIcon(timelineIcon)
        setCurrentStep(currentStep + 1)
      }
    }
  }, [accountAd])

  return (
    <>
      {!openModal && currentStep != 8 ? <div style={currentStep == 1 ? { position: "absolute", zIndex: '1' } : { position: "absolute", zIndex: '100' }}>
        {stepData.icon}
        <div style={stepData.highlightStyles} />
        <BasicCard
          style={stepData.cardStyles}
          innerContent={
            <div>
              <Typography.Text>{stepData.step}</Typography.Text>
              <Typography.Title
                level={2}
                style={{
                  marginTop: ".1rem",
                  marginBottom: ".1rem",
                }}
              >
                {stepData.heading}
              </Typography.Title>
              <Typography.Text>{stepData.info}</Typography.Text>
              <div className="flex justify-between mt-2">
                <BasicButton
                  className="pl-0"
                  type="text"
                  // style={{ pointerEvents: 'none' }}
                  // onClick={setEnable()}
                  innerContent={<>
                    <Typography.Text>{`Skip`}</Typography.Text>
                  </>
                  }
                />
                <BasicButton
                  className="mr-4"
                  onClick={() => {


                    if (accountAd.length > 0 && currentStep < 7) {
                      setCurrentStep(currentStep + 1)
                    }

                    if (currentStep <= 7) {
                      timelineIcon.push(currentStep);
                      setTimelineIcon(timelineIcon)
                    }
                    if (currentStep == 7) {
                      openModal = true;
                      setOpenModal(openModal);
                      console.log(openModal);
                      setConfettiOpen(true);
                      setCurrentStep(currentStep + 1)

                    }

                    // if (currentStep == 6) {
                    //   setNavDrop(false);
                    // }
                  }}
                  type="primary"
                  innerContent={<Typography.Text>{`Next ->`}</Typography.Text>}
                />
              </div>
            </div>
          }
        />
      </div> : <ModalTemplate openModal={openModal} setOpenModal={setOpenModal} setConfettiOpen={setConfettiOpen} />
      }
    </>
  );
};

export default TutorialTemplate;
