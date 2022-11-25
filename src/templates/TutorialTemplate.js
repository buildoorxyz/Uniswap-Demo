import { Typography } from "antd";
import BasicButton from "../atoms/BasicButton";
import BasicCard from "../atoms/BasicCard";

const TutorialTemplate = ({ data, currentStep, setCurrentStep }) => {
  const stepData = data.steps.find((step) => step.id === currentStep);

  return (
    <div style={{ position: "fixed" }}>
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
                innerContent={<Typography.Text>{`Skip`}</Typography.Text>}
              />
              <BasicButton
                className="mr-4"
                onClick={() => setCurrentStep(currentStep + 1)}
                type="primary"
                innerContent={<Typography.Text>{`Next ->`}</Typography.Text>}
              />
            </div>
          </div>
        }
      />
    </div>
  );
};

export default TutorialTemplate;
