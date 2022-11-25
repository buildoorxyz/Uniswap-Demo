import MainTemplate from "../templates/MainTemplate";
import { data } from "../data/mainPageData";
import { data as commonData } from "../data/commonData";
import { Row, Col } from "antd";
import { useState } from "react";
import "./styles.css";

const MainPage = ({ setIsDashboardPage }) => {
  const [selectedDapp, setSelectedDapp] = useState(null);
  return (
    <div
      style={{
        background: "rgba(0,0,0,0.9)",
        width: "100%",
        height: "100%",
      }}
    >
      <div className={`containerImg`} style={{ width: "100%", height: "100%" }}>
        <div
          className={`backgroundImg`}
          style={{ width: "100%", height: "100%" }}
        >
          <Row justify="center">
            <Col xs={24} md={{ span: 8 }}>
              <MainTemplate
                commonData={commonData}
                data={data}
                selectedDapp={selectedDapp}
                setSelectedDapp={setSelectedDapp}
                setIsDashboardPage={setIsDashboardPage}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
