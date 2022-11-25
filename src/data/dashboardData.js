import {
  CaretUpOutlined,
  CheckCircleOutlined,
  FlagOutlined,
  HourglassOutlined,
} from "@ant-design/icons";
import { imageDataHelper } from "../utils/helpers";

export const data = {
  sideBar: {
    tabs: [
      {
        key: "Uniswap",
        label: "Uniswap",
        innerContent: {
          card: {
            upperText: "Use Uniswap with Buildoor and earn upto",
            lowerText:
              "Claim reputation, merch and exclusive offers with these XPs.",
            xps: `500 XPs`,
          },
          collapse: {
            key: "Uniswap",
            heading: "Why use Buildoor for Uniswap?",
            innerText:
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?",
          },
          info: {
            wallet: "0xpo133.....kahr1231ifbd",
            metrics: [
              {
                key: "1",
                heading: "Total transactions on Uniswap",
                value: "20",
              },
              {
                key: "2",
                heading: "Total XPs earned",
                value: "120",
              },
              {
                key: "3",
                heading: "Some Metric",
                value: "120",
              },
              {
                key: "4",
                heading: "Some Metric",
                value: "120",
              },
              {
                key: "5",
                heading: "Some Metric",
                value: "120",
              },
            ],
          },
        },
      },
      {
        key: "Milestones",
        label: "Milestones",
        innerContent: {
          timeline: [
            {
              key: "1",
              icon: (
                <CheckCircleOutlined
                  style={{
                    background: "green",
                    color: "white",
                    fontSize: "32px",
                    borderRadius: "50%",
                    border: "0",
                  }}
                />
              ),
              heading: "Heading 1 goes here",
              innerText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
            },
            {
              key: "2",
              icon: (
                <CheckCircleOutlined
                  style={{
                    background: "green",
                    color: "white",
                    fontSize: "32px",
                    borderRadius: "50%",
                    border: "0",
                  }}
                />
              ),
              heading: "Heading 1 goes here",
              innerText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
            },
            {
              key: "3",
              icon: (
                <HourglassOutlined
                  style={{
                    background: "#E9AB0E",
                    color: "white",
                    fontSize: "30px",
                    borderRadius: "50%",
                    border: "0",
                    padding: "5px",
                  }}
                />
              ),
              heading: "Heading 1 goes here",
              innerText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
            },
            {
              key: "4",
              icon: (
                <HourglassOutlined
                  style={{
                    background: "#E9AB0E",
                    color: "white",
                    fontSize: "30px",
                    borderRadius: "50%",
                    border: "0",
                    padding: "5px",
                  }}
                />
              ),
              heading: "Heading 1 goes here",
              innerText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
            },
            {
              key: "5",
              icon: (
                <FlagOutlined
                  style={{
                    background: "#C916C2",
                    color: "white",
                    fontSize: "30px",
                    borderRadius: "50%",
                    border: "0",
                    padding: "5px",
                  }}
                />
              ),
              heading: "Heading 1 goes here",
              innerText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
            },
          ],
        },
      },
      {
        key: "Activity",
        label: "Activity",
        innerContent: {
          activites: [
            {
              key: 1,
              heading: "Completed onboarding  🎉",
              xp: "+500 XP",
              image: imageDataHelper("uniswap"),
              dateTime: "Nov 12, 2022 | 14:02 IST",
            },
            {
              key: 2,
              heading: "Daily Login ✅",
              xp: "+10 XP",
              image: imageDataHelper("uniswap"),
              dateTime: "Nov 12, 2022 | 14:02 IST",
            },
            {
              key: 3,
              heading: "Completed onboarding  🎉",
              xp: "+500 XP",
              image: imageDataHelper("unilend"),
              dateTime: "Nov 12, 2022 | 14:02 IST",
            },
            {
              key: 4,
              heading: "Daily Login ✅",
              xp: "+500 XP",
              image: imageDataHelper("unilend"),
              dateTime: "Nov 12, 2022 | 14:02 IST",
            },
            {
              key: 5,
              heading: "Completed onboarding  🎉",
              xp: "+500 XP",
              image: imageDataHelper("balancer"),
              dateTime: "Nov 12, 2022 | 14:02 IST",
            },
            {
              key: 6,
              heading: "Daily Login ✅",
              xp: "+10 XP",
              image: imageDataHelper("balancer"),
              dateTime: "Nov 12, 2022 | 14:02 IST",
            },
          ],
        },
      },
      {
        key: "Help",
        label: "Help",
        innerContent: {
          queries: [
            {
              key: 1,
              question:
                "A questions related to the general queries goes in here",
              answer:
                "Lorem ipsum dolor sit amet consectetur. Sed pharetra sed egestas convallis. Viverra diam sit blandit vel leo fermentum leo eget. Turpis turpis mi sed sed. Pulvinar facilisis massa ultricies eget. Morbi ut nulla tristique varius turpis. Orci venenatis vel leo id amet. Quis mi adipiscing nec eleifend pretium vitae ut. Amet sagittis leo ullamcorper cras mauris scelerisque. Consequat diam orci varius mollis viverra. Nunc gravida amet tellus et dignissim auctor sagittis. Euismod porttitor ornare mauris gravida.",
              upVotes: 221,
              downVotes: 10,
              isUpVoted: false,
              isDownVoted: false,
            },
            {
              key: 2,
              question:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
              answer:
                "Lorem ipsum dolor sit amet consectetur. Sed pharetra sed egestas convallis. Viverra diam sit blandit vel leo fermentum leo eget. Turpis turpis mi sed sed. Pulvinar facilisis massa ultricies eget. Morbi ut nulla tristique varius turpis. Orci venenatis vel leo id amet. Quis mi adipiscing nec eleifend pretium vitae ut. Amet sagittis leo ullamcorper cras mauris scelerisque. Consequat diam orci varius mollis viverra. Nunc gravida amet tellus et dignissim auctor sagittis. Euismod porttitor ornare mauris gravida.",
              upVotes: 221,
              downVotes: 10,
              isUpVoted: true,
              isDownVoted: false,
            },
            {
              key: 3,
              question:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
              answer:
                "Lorem ipsum dolor sit amet consectetur. Sed pharetra sed egestas convallis. Viverra diam sit blandit vel leo fermentum leo eget. Turpis turpis mi sed sed. Pulvinar facilisis massa ultricies eget. Morbi ut nulla tristique varius turpis. Orci venenatis vel leo id amet. Quis mi adipiscing nec eleifend pretium vitae ut. Amet sagittis leo ullamcorper cras mauris scelerisque. Consequat diam orci varius mollis viverra. Nunc gravida amet tellus et dignissim auctor sagittis. Euismod porttitor ornare mauris gravida.",
              upVotes: 221,
              downVotes: 10,
              isUpVoted: true,
              isDownVoted: false,
            },
            {
              key: 4,
              question:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
              answer:
                "Lorem ipsum dolor sit amet consectetur. Sed pharetra sed egestas convallis. Viverra diam sit blandit vel leo fermentum leo eget. Turpis turpis mi sed sed. Pulvinar facilisis massa ultricies eget. Morbi ut nulla tristique varius turpis. Orci venenatis vel leo id amet. Quis mi adipiscing nec eleifend pretium vitae ut. Amet sagittis leo ullamcorper cras mauris scelerisque. Consequat diam orci varius mollis viverra. Nunc gravida amet tellus et dignissim auctor sagittis. Euismod porttitor ornare mauris gravida.",
              upVotes: 221,
              downVotes: 10,
              isUpVoted: true,
              isDownVoted: false,
            },
          ],
        },
      },
    ],
  },
  tutorial: {
    steps: [
      {
        id: 1,
        step: "Step 1",
        heading: "Heading the step",
        info: "Lorem ipsum dolor sit amet, consectetur adipisg elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        icon: (
          <CaretUpOutlined
            style={{
              position: "absolute",
              left: "95px",
              top: "50px",
              color: "white",
              fontSize: "4rem",
            }}
          />
        ),
        cardStyles: {
          border: 0,
          position: "relative",
          left: "80px",
          top: "50px",
          borderRadius: ".75rem",
          width: "24vw",
        },
        highlightStyles: {
          background: "transparent",
          border: "7px solid #D9D9D9",
          borderRadius: "5px",
          opacity: "40%",
          position: "relative",
          height: "10px",
          width: "60px",
          top: "15px",
          left: "86px",
          boxShadow: "0 0 0 10px rgba(217, 217, 217, .2)",
          padding: ".9rem 2rem",
        },
      },
      {
        id: 2,
        step: "Step 2",
        heading: "Heading the step",
        info: "Lorem ipsum dolor sit amet, consectetur adipisg elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        icon: (
          <CaretUpOutlined
            style={{
              position: "absolute",
              left: "740px",
              top: "486px",
              color: "white",
              fontSize: "4rem",
            }}
          />
        ),
        cardStyles: {
          border: 0,
          position: "relative",
          left: "580px",
          top: "170px",
          borderRadius: ".75rem",
          width: "24vw",
        },
        highlightStyles: {
          background: "transparent",
          border: "25px solid #D9D9D9",
          borderRadius: "15px",
          opacity: "40%",
          position: "relative",
          height: "10px",
          width: "60px",
          top: "115px",
          left: "510px",
          boxShadow: "0 0 0 30px rgba(217, 217, 217, .2)",
          padding: "9.65rem 14.5rem",
        },
      },
      {
        id: 3,
        step: "Step 3",
        heading: "Heading the step",
        info: "Lorem ipsum dolor sit amet, consectetur adipisg elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        icon: (
          <CaretUpOutlined
            style={{
              position: "absolute",
              left: "100px",
              top: "80px",
              color: "white",
              fontSize: "4rem",
            }}
          />
        ),
        cardStyles: {
          border: 0,
          position: "relative",
          left: "60px",
          top: "120px",
          borderRadius: ".75rem",
          width: "24vw",
        },
      },
      {
        id: 4,
        step: "Step 4",
        heading: "Heading the step",
        info: "Lorem ipsum dolor sit amet, consectetur adipisg elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        icon: (
          <CaretUpOutlined
            style={{
              position: "absolute",
              left: "100px",
              top: "180px",
              color: "white",
              fontSize: "4rem",
            }}
          />
        ),
        cardStyles: {
          border: 0,
          position: "relative",
          left: "60px",
          top: "220px",
          borderRadius: ".75rem",
          width: "24vw",
        },
      },
      {
        id: 5,
        step: "Step 5",
        heading: "Heading the step",
        info: "Lorem ipsum dolor sit amet, consectetur adipisg elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        icon: (
          <CaretUpOutlined
            style={{
              position: "absolute",
              left: "530px",
              top: "350px",
              color: "white",
              fontSize: "4rem",
            }}
          />
        ),
        cardStyles: {
          border: 0,
          position: "relative",
          left: "500px",
          top: "390px",
          borderRadius: ".75rem",
          width: "24vw",
        },
      },
      {
        id: 6,
        step: "Step 6",
        heading: "Heading the step",
        info: "Lorem ipsum dolor sit amet, consectetur adipisg elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        icon: (
          <CaretUpOutlined
            style={{
              position: "absolute",
              left: "100px",
              top: "80px",
              color: "white",
              fontSize: "4rem",
            }}
          />
        ),
        cardStyles: {
          border: 0,
          position: "relative",
          left: "60px",
          top: "120px",
          borderRadius: ".75rem",
          width: "24vw",
        },
      },
      {
        id: 7,
        step: "Step 7",
        heading: "Heading the step",
        info: "Lorem ipsum dolor sit amet, consectetur adipisg elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        icon: (
          <CaretUpOutlined
            style={{
              position: "absolute",
              left: "560px",
              top: "440px",
              color: "white",
              fontSize: "4rem",
            }}
          />
        ),
        cardStyles: {
          border: 0,
          position: "relative",
          left: "540px",
          top: "480px",
          borderRadius: ".75rem",
          width: "24vw",
        },
      },
      {
        id: 8,
        step: "Step 8",
        heading: "Heading the step",
        info: "Lorem ipsum dolor sit amet, consectetur adipisg elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        icon: (
          <CaretUpOutlined
            style={{
              position: "absolute",
              left: "100px",
              top: "180px",
              color: "white",
              fontSize: "4rem",
            }}
          />
        ),
        cardStyles: {
          border: 0,
          position: "relative",
          left: "60px",
          top: "220px",
          borderRadius: ".75rem",
          width: "24vw",
        },
      },
    ],
  },
};
