import {
  ArrowDownOutlined,
  ArrowLeftOutlined,
  ArrowUpOutlined,
  BellOutlined,
  DoubleLeftOutlined,
  PlusCircleOutlined,
  CheckCircleOutlined,
  FlagOutlined,
} from "@ant-design/icons";
import { ConfigProvider, Avatar, Collapse, Image, Typography } from "antd";
import BasicButton from "../atoms/BasicButton";
import BasicCard from "../atoms/BasicCard";
import BasicInput from "../atoms/BasicInput";
import BasicTabs from "../atoms/BasicTabs";
import SideBarTemplate from "./SideBarTemplate";
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Confetti from 'react-confetti'
import { pngImageDataHelper, imageDataHelper } from "../utils/helpers";
import { useState, useEffect } from "react";
import { useWindowSize } from 'react-use'
// import styled from "styled-components";

// const TimelineItem = styled.timeL`
// &:before {
//   display:none;
// }
// `
{/* <CheckCircleOutlined
style={{
  background: "green",
  color: "white",
  fontSize: "32px",
  borderRadius: "50%",
  border: "0",
}}
/> */}

const TabChildren = ({ showAnswer, setShowAnswer, label, innerContent, activityMap, accountAddress, timelineIcon, transactionLen, infoMap, activitySum }) => {
  if (label === "Uniswap") {
    const { card, collapse, info } = innerContent;
    return (
      <div>
        <BasicCard
          style={{ background: `url(${pngImageDataHelper("Rectangle").src})` }}
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
          ghost
        >
          <Collapse.Panel header={collapse.heading} key={collapse.key}>
            <Typography.Text>{collapse.innerText}</Typography.Text>
          </Collapse.Panel>
        </Collapse>
        {accountAddress.length > 0 ? <div style={{ marginTop: "22px" }}>
          <p style={{ marginBottom: "16px" }}>
            <Typography.Text style={{ color: "#fff" }}>
              {"Connected Wallet"}{" "}
            </Typography.Text>
          </p>
          <p>
            <Avatar style={{ marginRight: "16px" }}>{"VJ"}</Avatar>
            <Typography.Text style={{ color: "#ffffff" }}>
              {accountAddress}
            </Typography.Text>
          </p>
          {infoMap.map((metric) => (
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
                {metric.key == 1 ? transactionLen : metric.key == 2 ? activitySum : metric.value}
              </Typography.Text>
            </p>
          ))}
        </div> : <></>}
      </div>
    );
  } else if (label === "Milestones") {
    const { timeline } = innerContent;
    return (
      // <ConfigProvider
      //   theme={{
      //     components: {
      //       Timeline.Item: {
      //         backgroundColor: '#00b96b',
      //       },
      //     },
      //   }}>
      <Timeline sx={{
        [`& .${timelineItemClasses.root}:before`]: {
          flex: 0,
          padding: 0,
        },
      }}>
        {timeline.map((item) => (

          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot>
                {timelineIcon.find((it) => it == item.key) ? item.key == 7 ? <FlagOutlined
                  style={{
                    background: "#C916C2",
                    color: "white",
                    fontSize: "30px",
                    borderRadius: "50%",
                    border: "0",
                    padding: "5px",
                  }}
                /> : <CheckCircleOutlined
                  style={{
                    background: "green",
                    color: "white",
                    fontSize: "32px",
                    borderRadius: "50%",
                    border: "0",
                  }}
                /> : item.icon}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>  <BasicCard
              style={{ background: "rgb(31,31,31)", borderRadius: "10px", borderColor: 'black' }}
              innerContent={
                <div>
                  <Typography.Title level={5} style={{ color: "white", marginTop: "0px" }}>
                    {item.heading}
                  </Typography.Title>
                  <Typography.Text style={{ color: "white", fontSize: "13px" }}>
                    {item.innerText}
                  </Typography.Text>
                </div>
              }
            /></TimelineContent>
          </TimelineItem>

        ))}
      </Timeline>
      // </ConfigProvider >
    );
  } else if (label === "Activity") {
    // const { activites } = innerContent;
    return activityMap ? activityMap.map((activity) => (
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
              <div style={{ marginTop: "4%" }}>
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
    )) : <></>;
  } else if (label === "Help") {
    const { queries } = innerContent;

    if (showAnswer.visible) {
      const query = queries.find((q) => q.key === showAnswer.questionKey);
      return (
        <BasicCard
          style={{ background: 'rgb(0,0,0,0.01)', border: '0' }}
          innerContent={
            <div>
              <BasicButton
                type="text"
                innerContent={
                  <Typography.Text style={{ color: 'white' }}>
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
              <Typography.Title level={4} style={{ color: 'white' }}>{query.question}</Typography.Title>
              <Typography.Text style={{ color: '#C2B8FF' }}>{query.answer}</Typography.Text>
              {/* <div style={{ marginLeft: '83%', display: 'flex', justifyContent: 'space-between' }}> */}
              {/* <button style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItemns: 'center', padding: '2px 5px', gap: '4px', width: '36px', height: '36px', border: '0.2px solid #787878', borderRadius: '4px', background: '#FFFFFF', marginRight: '10%', padding: '2px 5px' }}> <div>
                <ArrowUpOutlined />
                <div>{query.upVotes}</div>
              </div>
              </button>
              <button style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItemns: 'center', padding: '2px 5px', gap: '4px', width: '40px', height: '36px', border: '0.2px solid #787878', borderRadius: '4px', background: '#3F3F3F', padding: '2px 11px' }}> <div>
                <ArrowDownOutlined />
                <div>{query.downVotes}</div>
              </div>
              </button> */}
              {/* <BasicButton
                  shape="square"
                  innerContent={
                    <>
                      <ArrowDownOutlined />
                      <p>{query.downVotes}</p>
                    </>
                  }
                /> */}
              {/* </div> */}
            </div>
          }
        />
      );
    }

    return (
      <div>
        {/* <BasicInput
          placeholder={`Search your query here`}
          className={`searchInput`}
          style={{
            background: "#000",
            color: "white",
            borderRadius: "10px",
            marginBottom: "10px",
            border: "1px solid gray",
            padding: "15px",
          }}
        /> */}
        {queries.map((query) => (
          <BasicCard
            key={query.key}
            style={{
              borderRadius: "15px",
              marginBottom: "15px",
              background: "#1f1f1f",
              border: '0',
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
                    style={{ background: "white", borderRadius: '4px' }}
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
                  {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}> */}
                  {/* <button style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItemns: 'center', padding: '2px 5px', gap: '4px', width: '36px', height: '36px', border: '0.2px solid #787878', borderRadius: '2px', background: '#FFFFFF', marginRight: '10%', padding: '2px 5px' }}> <div>
                    <ArrowUpOutlined />
                    <div>{query.upVotes}</div>
                  </div>
                  </button>
                  <button style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItemns: 'center', padding: '2px 5px', gap: '4px', width: '40px', height: '36px', border: '0.2px solid #787878', borderRadius: '2px', background: '#3F3F3F', padding: '2px 11px' }}> <div>
                    <ArrowDownOutlined />
                    <div>{query.downVotes}</div>
                  </div>
                  </button> */}
                  {/* <BasicButton
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
                    /> */}

                  {/* </div> */}
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
  activityMap,
  accountAddress,
  timelineIcon,
  confettiOpen,
  transactionLen,
  infoMap,
  activitySum,
}) => {
  const { logo } = commonData;
  const { sideBar, tutorial } = data;
  const { width, height } = useWindowSize()
  const items = sideBar.tabs.map((data) => ({
    ...data,
    children: (
      <TabChildren
        showAnswer={showAnswer}
        setShowAnswer={setShowAnswer}
        activityMap={activityMap}
        accountAddress={accountAddress}
        timelineIcon={timelineIcon}
        transactionLen={transactionLen}
        activitySum={activitySum}
        infoMap={infoMap}
        {...data}
      />
    ),
  }));

  return (
    <div style={{ zIndex: '10000', fontFamily: 'Space Grotesk, sans-serif' }}>
      {confettiOpen ? <Confetti width={width}
        height={height} /> : <></>}
      <BasicButton
        onClick={() => setIsSideBarOpen(true)}
        // icon={<PlusCircleOutlined />}
        shape={"circle"}
        style={{
          background: `url(${imageDataHelper("iconLogo").src})`,
          backgroundSize: "47px 47px",
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
          boxShadow: "0px 4px 42px rgba(0, 0, 0, 0.9)",
          backdropFilter: "blur(10px)"
        }}
        bodyStyle={{
          background: "rgba(0, 0, 0, 0.7)",
          boxShadow: "0px 4px 42px rgba(0, 0, 0, 0.9)",
          backdropFilter: "blur(10px)"
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
                  color: "#B8BBFF",
                }}
              />
              <DoubleLeftOutlined
                style={{
                  cursor: "pointer",
                  color: '#B8BBFF',
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

      {/* <iframe
        title={`dashboard`}
        src="https://app.uniswap.org/#/swap"
        style={{ width: "100%", height: " 100vh" }}
      /> */}
    </div>
  );
};

export default DashboardTemplate;
