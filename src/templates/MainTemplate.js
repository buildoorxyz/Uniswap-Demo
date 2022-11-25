import { Card, Image, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import MainHeading from "../atoms/MainHeading";
import BasicInput from "../atoms/BasicInput";
import MainSubHeading from "../atoms/MainSubHeading";
import MainButtonGroup from "../molecules/MainButtonGroup";
import BasicButton from "../atoms/BasicButton";

const MainTemplate = ({
  commonData,
  data,
  selectedDapp,
  setSelectedDapp,
  setIsDashboardPage,
}) => {
  const { logo } = commonData;
  const { heading, subHeading, dApps } = data;
  return (
    <Card
      bodyStyle={{ paddingRight: "0", paddingLeft: "35px" }}
      style={{
        background: "rgba(0, 0, 0, 0.6)",
        boxShadow: "0px 32px 70px rgba(0, 0, 0, 0.12)",
        borderRadius: "32px",
        marginTop: "150px",
        border: "0",
      }}
    >
      <div>
        <Image src={logo.src} alt={logo.alt} preview={false} className="my-4" />
      </div>
      <MainHeading heading={heading} />
      <div className="mb-6 text-md">
        <MainSubHeading subHeading={subHeading} />
      </div>

      <BasicInput
        placeholder={`Search your dapp here`}
        className={`searchInput`}
        style={{
          background: "#000",
          color: "#fff",
          borderRadius: "10px",
          width: "92%",
          marginBottom: "10px",
          border: "1px solid gray",
        }}
        prefix={<SearchOutlined />}
      />
      <MainButtonGroup
        buttonsData={dApps}
        selectedDapp={selectedDapp}
        setSelectedDapp={setSelectedDapp}
      />
      {selectedDapp && (
        <BasicButton
          style={{
            background: "#FFBFFC",
            width: "90%",
            borderRadius: "20px",
            height: "45px",
            marginTop: "13px",
          }}
          onClick={() => setIsDashboardPage(true)}
          innerContent={
            <Typography.Text
              style={{ color: "#B83696", fontWeight: "600" }}
            >{`Continue to DApp ->`}</Typography.Text>
          }
        />
      )}
    </Card>
  );
};

export default MainTemplate;
