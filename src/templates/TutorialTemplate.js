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
      {!openModal && currentStep != 8 ? <div style={{ position: "absolute" }}>
        {stepData.icon}
        <div style={stepData.highlightStyles} />
        <BasicCard
          style={stepData.cardStyles}
          innerContent={
            <div>
              <Typography.Text style={{
                fontFamily: 'Space Grotesk',
              }}>{stepData.step}</Typography.Text>
              <Typography.Title
                level={2}
                style={{
                  marginTop: ".1rem",
                  marginBottom: ".1rem",
                  fontFamily: 'Space Grotesk',

                }}
              >
                {stepData.heading}
              </Typography.Title>
              {currentStep == 4 ? <ul style={{ listStyleType: 'circle' }}>
                <li>{stepData.info.ul1}</li>
                <li>{stepData.info.ul2}</li>
                <li>{stepData.info.ul3}</li>
              </ul> :
                <Typography.Text style={{
                  fontFamily: 'Space Grotesk',
                }}>{stepData.info}</Typography.Text>
              }
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '2%',
              }} className="flex justify-between mt-2">
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
                <button style={{
                  boxSizing: 'border-box',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  padding: '12px 25px',
                  width: '142px',
                  height: '44px',
                  background: '#FFFFFF',
                  border: '1px solid rgba(0, 0, 0, 0.1)',
                  boxShadow: '0px 0px 20px rgba(255, 0, 255, 0.2)',
                  borderRadius: '8px',
                  flex: 'none',
                  order: '1',
                  flexGrow: '0',
                  cursor: 'pointer'
                }}
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
                  }}>{`Next ->`}</button>

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
