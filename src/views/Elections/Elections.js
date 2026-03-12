"use client";
import { Typography, Container, Box, Button } from "@material-ui/core";
import React from "react";

import Layout from "../../components/Layouts/Layout";
import Styles from "./elections.module.css";
import LaunchIcon from "@material-ui/icons/Launch";
export default function Elections() {
  if (typeof window !== "undefined") document.title = "Elections 2025-2026 | TSG";
  return (
    <Layout>
      <div className={Styles.electionHeaderImg}></div>
      <Container className={Styles.electionsContainer}>
        <Typography
          variant="h4"
          style={{
            color: "#f1c40f",
            fontFamily: "Lato",
            fontWeight: "600",
          }}
          align="center"
        >
          {" "}
          TSG Elections 2025-2026
        </Typography>
        <Box className={Styles.electionBody}>
          <Typography variant="body2">
            Each year Technology Students’ Gymkhana (TSG), IIT Kharagpur carries
            out election to select office bearers from students for smooth
            conduction of student related activities.
          </Typography>
          <Typography variant="body2">
            The nomination, approval and voting will be done using digital
            platform developed by ERP, IIT Kharagpur. The date for Gymkhana
            Election is as follows:
          </Typography>
          <Typography variant="body2">
            <b>Date of Election:</b> 6th April 2025 (Saturday) <br />
            <b>Time of Election:</b> 8:00 AM to 6:00 PM <br />
            <b>Venue:</b> Computer & Informatics Center (CIC), Takshashila, IIT
            Kharagpur <br />
            Platform: Institute ERP <br />
            <br />
            Note: Remember to keep your ID card, ERP and Institute Email
            password with you when you go for voting!
          </Typography>
        </Box>
        <Box className={Styles.electionBody}>
          <Typography variant="h5">Notices:</Typography>
          <Box className={Styles.notices}>
            {/* <Typography className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                View Results of Candidates
                </div>
                <Button>
                <a
                href="/data/media/files/Votes_2024.pdf"
                  lat="notice"
                  target="_blank"
                  rel="noopener"
                  >
                  View Votes <LaunchIcon />
                  </a>
                  </Button>
                </Typography> */}
            <Typography component="div" className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                Elections 2025-2026 Results
              </div>
              <Button>
                <a
                  href="/data/media/files/Results_2025.pdf"
                  lat="notice"
                  target="_blank"
                  rel="noopener"
                >
                  View Result <LaunchIcon />
                </a>
              </Button>
            </Typography>
            <Typography component="div" className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                Advisory for TSG Elections 2025-26
              </div>
              <Button>
                <a
                  href="/data/media/files/Advisory_TSG_Elections_2025-26.pdf"
                  lat="notice"
                  target="_blank"
                  rel="noopener"
                >
                  View Notice <LaunchIcon />
                </a>
              </Button>
            </Typography>
            <Typography component="div" className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                SOAPBOX SCHEDULE 2025-26
              </div>
              <Button>
                <a
                  href="/data/media/files/SOAPBOX_Schedule_2025-26.pdf"
                  lat="notice"
                  target="_blank"
                  rel="noopener"
                >
                  View Schedule <LaunchIcon />
                </a>
              </Button>
            </Typography>
            {/* <Typography component="div" className={Styles.notice}>
              <div className={Styles.noticeDescription}>
              Final List of Candidates for TSG Election (2023-24)
              </div>
              <Button>
              <a
              href="/data/media/files/Final_List_of_Candidates_for_Election_of_Office_Bearers_of_TSG.pdf"
              lat="notice"
              target="_blank"
              rel="noopener"
              >
              View List &nbsp; <LaunchIcon />
              </a>
              </Button>
            </Typography> */}
            {/* <Typography component="div" className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                <strong className="text-danger">The Deadline to get approval from the faculty members for the Gymkhana Elections for the Academic Year (2023 - 2024) has been extended to 24th March 2023, 11:59 PM</strong>
              </div>
            </Typography> */}
            {/* <Typography component="div" className={Styles.notice}>
              <div className={Styles.noticeDescription}>
              The Venue for the TSG Election (2024 - 2025) will be Computer &
              Informatics Center (CIC), Takshashila, Srinivasa Ramanujan
              Complex, IIT Kharagpur
              </div>
            </Typography> */}
            <Typography component="div" className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                Final Proposals of Candidates
              </div>
              <Button>
                <a href="/elections/candidates" lat="notice" rel="noopener">
                  View Proposals &nbsp; <LaunchIcon />
                </a>
              </Button>
            </Typography>
            <Typography component="div" className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                Final List of Nominations for TSG Election (2025-26)
              </div>
              <Button>
                <a
                  href="/data/media/files/Final_List_of_Candidates_for_Election_of_Office_Bearers_of_TSG.pdf"
                  lat="notice"
                  target="_blank"
                  rel="noopener"
                >
                  View List &nbsp; <LaunchIcon />
                </a>
              </Button>
            </Typography>
            <Typography component="div" className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                TSG Election (2025-2026) Notification
              </div>
              <Button>
                <a
                  href="/data/media/files/Election 2025-26.pdf"
                  lat="notice"
                  target="_blank"
                  rel="noopener"
                >
                  View Schedule and Rules &nbsp; <LaunchIcon />
                </a>
              </Button>
            </Typography>
            <Typography component="div" className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                Election Officer (2025 - 2026)
              </div>
              <Button>
                <a
                  href="mailto:samantaray@mech.iitkgp.ac.in"
                  lat="eo_mail"
                  target="_blank"
                  rel="noreferrer"
                >
                  Prof. Arun Kumar Samantaray &nbsp; <LaunchIcon />
                </a>
              </Button>
            </Typography>
            {/* <Typography className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                Provisional List of Candidates for TSG Election (2025-26)
              </div>
              <Button>
                <a
                  href="/data/media/files/Provisional_List_of_Candidates_for_Election_of_Office_Bearers_of_Technology_Students.pdf"
                  lat="notice"
                  target="_blank"
                  rel="noopener"
                >
                  View List &nbsp; <LaunchIcon />
                </a>
              </Button>
            </Typography> */}
            {/* <Typography className={Styles.notice}>
              <div className={Styles.noticeDescription}>
              The date for submission of Revised Proposals the posts of Vice
              President and General Secretaries is extended upto 10:00 am on
              March 29, 2022.
              </div>
              <Button>
                <a
                  href="/data/media/files/Extension-Final-Proposal_21-22.pdf"
                  lat="notice"
                  target="_blank"
                  rel="noopener"
                >
                  View Notice &nbsp; <LaunchIcon />
                </a>
              </Button>
            </Typography> */}
            {/* <Typography className={Styles.notice}>
              <div className={Styles.noticeDescription}>
                SOAP has been scheduled on 1st and 2nd of April 2022.
              </div>
              <Button>
                <a
                  href="/data/media/files/SOAP_Schedule_21-22.pdf"
                  lat="notice"
                  target="_blank"
                  rel="noopener"
                  >
                  View Notice &nbsp; <LaunchIcon />
                  </a>
                  </Button>
                </Typography> */}
          </Box>
        </Box>
        <Box className={Styles.electionBody}>
          <Typography variant="h5">Relevant Documents:</Typography>
          <Box className={Styles.buttonGroup}>
            {" "}
            <Button>
              {" "}
              <a
                href="/data/media/files/Rules 2025-26.pdf"
                alt="notification"
                target="_blank"
              >
                Rules
              </a>
            </Button>
            <Button>
              {" "}
              <a
                href="/data/media/files/General_Conduct_Rules_and_Guidelines_of_IIT_Kharagpur.pdf"
                alt="notification"
                target="_blank"
              >
                Conduct Guidelines
              </a>
            </Button>
            <Button>
              {" "}
              <a
                href="/data/media/files/voting_procedure.pdf"
                alt="notification"
                target="_blank"
              >
                Voting Procedure
              </a>
            </Button>
            {/* <Button>
              {" "}
              <a
                href="/data/media/files/nomination_helpfile.pdf"
                alt="notification"
                target="_blank"
              >
                Nomination Procedure
              </a>
            </Button> */}
          </Box>
        </Box>
      </Container>
    </Layout>
  );
}
