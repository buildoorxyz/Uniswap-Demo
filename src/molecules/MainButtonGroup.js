import { Image } from "antd";
import BasicButton from "../atoms/BasicButton";

const MainButtonGroup = ({ buttonsData, selectedDapp, setSelectedDapp }) => {
  const selectedButtonStyles = {
    height: "7rem",
    boxShadow:
      "-1px 1px 0px rgba(255,182,193,0.7),-2px 2px 0px rgba(255,182,193,0.7),-3px 3px 0px rgba(255,182,193,0.7),-4px 4px 0px rgba(255,182,193,0.7),-5px 5px 0px rgba(255,182,193,0.7),-6px 6px 0px rgba(255,182,193,0.7)",
    border: "4px solid rgb(255,192,203)",
    background: "black",
  };
  return buttonsData.map((buttonData, i) => (
    <BasicButton
      className={`buttonAll`}
      key={buttonData.id || i}
      innerContent={
        <div style={{ display: "inline-block", padding: "2rem 0" }}>
          <Image
            style={{ width: "166px", height: "33px" }}
            preview={false}
            src={buttonData.image.src}
            alt={buttonData.image.alt}
          />
        </div>
      }
      onClick={() => setSelectedDapp(buttonData.id)}
      {...buttonData}
      style={
        selectedDapp === buttonData.id
          ? selectedButtonStyles
          : { height: "7rem" }
      }
    />
  ));
};

export default MainButtonGroup;
