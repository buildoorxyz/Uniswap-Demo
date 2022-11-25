import {
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowUpOutlined,
  BellOutlined,
  DoubleLeftOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Avatar, Collapse, Image, Timeline, Typography } from "antd";
import BasicButton from "../atoms/BasicButton";
import BasicCard from "../atoms/BasicCard";
import BasicInput from "../atoms/BasicInput";
import BasicTabs from "../atoms/BasicTabs";
import SideBarTemplate from "./SideBarTemplate";
import TutorialTemplate from "./TutorialTemplate";

const TabChildren = ({ showAnswer, setShowAnswer, label, innerContent }) => {
  if (label === "Uniswap") {
    const { card, collapse, info } = innerContent;
    return (
      <div>
        <BasicCard
          className={`uniswapSidebar`}
          innerContent={
            <div>
              <Typography.Text
                style={{
                  fontWeight: 600,
                }}
              >
                {card.upperText}
              </Typography.Text>
              <Typography.Title
                style={{
                  fontWeight: 700,
                  fontSize: "50px",
                  marginTop: "10px",
                  marginBottom: "12px",
                }}
              >
                {card.xps}
              </Typography.Title>
              <Typography.Text
                style={{
                  fontWeight: 500,
                }}
              >
                {card.lowerText}
              </Typography.Text>
            </div>
          }
        />
        <Collapse
          style={{ marginTop: "20px" }}
          defaultActiveKey={[collapse.key]}
        >
          <Collapse.Panel header={collapse.heading} key={collapse.key}>
            <Typography.Text>{collapse.innerText}</Typography.Text>
          </Collapse.Panel>
        </Collapse>
        <div style={{ marginTop: "22px" }}>
          <p style={{ marginBottom: "16px" }}>
            <Typography.Text style={{ color: "#fff" }}>
              {"Connected Wallet"}{" "}
            </Typography.Text>
          </p>
          <p>
            <Avatar style={{ marginRight: "16px" }}>{"VJ"}</Avatar>
            <Typography.Text style={{ color: "#ffffff" }}>
              {info.wallet}
            </Typography.Text>
          </p>
          {info.metrics.map((metric) => (
            <p key={metric.key} style={{ marginTop: "15px" }}>
              <Typography.Text style={{ fontWeight: 500, color: "#ffffff" }}>
                {metric.heading}
              </Typography.Text>
              <Typography.Text
                style={{
                  float: "right",
                  fontWeight: 700,
                  fontSize: "20px",
                  color: "#ffffff",
                }}
              >
                {metric.value}
              </Typography.Text>
            </p>
          ))}
        </div>
      </div>
    );
  } else if (label === "Milestones") {
    const { timeline } = innerContent;
    return (
      <Timeline>
        {timeline.map((item) => (
          <Timeline.Item key={item.key} dot={item.icon}>
            <BasicCard
              style={{ background: "rgb(31,31,31)", borderRadius: "10px" }}
              innerContent={
                <div>
                  <Typography.Title level={4} style={{ color: "white" }}>
                    {item.heading}
                  </Typography.Title>
                  <Typography.Text style={{ color: "white", fontSize: "13px" }}>
                    {item.innerText}
                  </Typography.Text>
                </div>
              }
            />
          </Timeline.Item>
        ))}
      </Timeline>
    );
  } else if (label === "Activity") {
    const { activites } = innerContent;
    return activites.map((activity) => (
      <BasicCard
        style={{
          background: "rgba(0,0,0,.3)",
          border: "1px solid black",
          borderRadius: "15px",
          marginBottom: "15px",
        }}
        innerContent={
          <div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography.Text style={{ color: "white" }}>
                {activity.heading}
              </Typography.Text>
              <Typography.Text
                style={{
                  float: "right",
                  color: "#48DC02",
                  fontSize: "18px",
                }}
              >
                {activity.xp}
              </Typography.Text>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <Image
                  style={{ marginTop: "10px" }}
                  height={25}
                  src={activity.image.src}
                  alt={activity.image.alt}
                  preview={false}
                />
              </div>
              <div style={{ marginTop: "10px" }}>
                <Typography.Text
                  style={{
                    fontSize: "12px",
                    color: "#dbdbdb",
                  }}
                >
                  {activity.dateTime}
                </Typography.Text>
              </div>
            </div>
          </div>
        }
      />
    ));
  } else if (label === "Help") {
    const { queries } = innerContent;

    if (showAnswer.visible) {
      const query = queries.find((q) => q.key === showAnswer.questionKey);
      return (
        <BasicCard
          innerContent={
            <div>
              <BasicButton
                type="text"
                innerContent={
                  <Typography.Text>
                    <ArrowLeftOutlined />
                    {"Back"}
                  </Typography.Text>
                }
                onClick={() =>
                  setShowAnswer({
                    visible: false,
                    questionKey: null,
                  })
                }
              />
              <Typography.Title level={4}>{query.question}</Typography.Title>
              <Typography.Text>{query.answer}</Typography.Text>
              <p>
                <BasicButton
                  shape="square"
                  innerContent={
                    <>
                      <ArrowUpOutlined />
                      <p>{query.upVotes}</p>
                    </>
                  }
                />
                <BasicButton
                  shape="square"
                  innerContent={
                    <>
                      <ArrowDownOutlined />
                      <p>{query.downVotes}</p>
                    </>
                  }
                />
              </p>
            </div>
          }
        />
      );
    }

    return (
      <div>
        <BasicInput
          placeholder={`Search your query here`}
          className={`searchInput`}
          style={{
            background: "#000",
            color: "#fff",
            borderRadius: "10px",
            marginBottom: "10px",
            border: "1px solid gray",
            padding: "15px",
          }}
        />
        {queries.map((query) => (
          <BasicCard
            key={query.key}
            style={{
              borderRadius: "15px",
              marginBottom: "15px",
              background: "#1f1f1f",
            }}
            innerContent={
              <div>
                <p>
                  <Typography.Text style={{ color: "white" }}>
                    {query.question}
                  </Typography.Text>
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "15px",
                  }}
                >
                  <BasicButton
                    style={{ background: "white" }}
                    onClick={() =>
                      setShowAnswer({
                        visible: true,
                        questionKey: query.key,
                      })
                    }
                    innerContent={
                      <Typography.Text>{"View Answer"}</Typography.Text>
                    }
                  />
                  <div>
                    <BasicButton
                      style={{ marginRight: "10px" }}
                      shape="square"
                      innerContent={
                        <>
                          <ArrowUpOutlined style={{ color: "#9d97a1" }} />
                          <p style={{ color: "#9d97a1" }}>{query.upVotes}</p>
                        </>
                      }
                    />
                    <BasicButton
                      shape="square"
                      innerContent={
                        <>
                          <ArrowDownOutlined style={{ color: "#9d97a1" }} />
                          <p style={{ color: "#9d97a1" }}>{query.downVotes}</p>
                        </>
                      }
                    />
                  </div>
                </div>
              </div>
            }
          />
        ))}
      </div>
    );
  }
};

const DashboardTemplate = ({
  data,
  commonData,
  isSideBarOpen,
  setIsSideBarOpen,
  showAnswer,
  setShowAnswer,
  currentStep,
  setCurrentStep,
}) => {
  const { logo } = commonData;
  const { sideBar, tutorial } = data;

  const items = sideBar.tabs.map((data) => ({
    ...data,
    children: (
      <TabChildren
        showAnswer={showAnswer}
        setShowAnswer={setShowAnswer}
        {...data}
      />
    ),
  }));

  return (
    <div>
      <BasicButton
        onClick={() => setIsSideBarOpen(true)}
        icon={<PlusCircleOutlined />}
        shape={"circle"}
        style={{
          position: "fixed",
          bottom: "40px",
          left: "30px",
          width: "3rem",
          height: "3rem",
          color: "blue",
        }}
      />
      <SideBarTemplate
        headerStyle={{
          background: "rgba(0, 0, 0, 0.7)",
        }}
        bodyStyle={{
          background: "rgba(0, 0, 0, 0.7)",
        }}
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image src={logo.src} alt={logo.src} preview={false} />
            <div
              style={{
                display: "inline-block",
                marginLeft: "auto",
                fontSize: "1.5rem",
                color: "#fff",
              }}
            >
              <BellOutlined
                style={{
                  cursor: "pointer",
                  marginRight: ".5rem",
                }}
              />
              <DoubleLeftOutlined
                style={{
                  cursor: "pointer",
                }}
                onClick={() => setIsSideBarOpen(false)}
              />
            </div>
          </div>
        }
        closable={false}
        placement={"left"}
        onClose={() => setIsSideBarOpen(false)}
        open={isSideBarOpen}
        key={"dashboard sidebar"}
        innerContent={
          <BasicTabs
            style={{ color: "gray" }}
            items={items}
            defaultActiveKey={items.length ? items[0]?.key : null}
          />
        }
      />
      <TutorialTemplate
        data={tutorial}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      {/* <iframe
        title={`dashboard`}
        src="https://app.uniswap.org/#/swap"
        style={{ width: "100%", height: " 100vh" }}
      /> */}
    </div>
  );
};

export default DashboardTemplate;
