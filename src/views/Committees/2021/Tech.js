"use client";
import React from "react";
import Layout from "../../../components/Layouts/Layout";
import Styles from "../styles/tech.module.css";
import globalStyles from "../styles/committees.module.css";
// import ContactStyles from "../../../styles/views/contacts.module.css";
// import events from "../../../components/Events/UpcomingEvents";
// import ContactCard from "../../../components/ContactCard";
import img1 from "./images/tech/websiteHackathon.jpeg";
import img2 from "./images/tech/saminn.jpg";
import img3 from "./images/tech/techvis.jpg";
import tradex from "./images/tech/tradex.jpg";
import techvistara from "./images/tech/techvistar.png";
import techmeet from "./images/tech/techmeet.png";
import openiit from "./images/tech/openiitintro.jpg";
import result_t from "./images/tech/res-tradex.jpg";
import sociop from "./images/tech/sociopren.jpg";
import tc1 from "./images/tech/tc1.png";
import tc2 from "./images/tech/tc2.png";
import tc3 from "./images/tech/tc3.png";
import tc4 from "./images/tech/tc4.png";
import tc5 from "./images/tech/tc5.png";
import tc6 from "./images/tech/tc6.png";
import tc7 from "./images/tech/tc7.png";
import tc8 from "./images/tech/tc8.png";
import tc9 from "./images/tech/tc9.png";
import tc10 from "./images/tech/tc10.png";
import tc11 from "./images/tech/tc11.png";
import tc12 from "./images/tech/tc12.png";
import tc13 from "./images/tech/tc13.png";
import AppImage from "../../../components/AppImage";

export default function Tech() {
  // const techComTeam = [
  //   {
  //     RollNo: "19IM30022",
  //     Name: "Vadthya Sanjay Kumar",
  //     Category: "General Secretary",
  //     Post: "GSec - Technology",
  //     img: "19IM30022.png",
  //     Contact: 9121372359,
  //     Email: "sanjayvadthya789@gmail.com",
  //     "Institue ids": "sanjayvadthya789@gmail.com",
  //     "Institute mail ids": "gsectsg-tech@hijli.iitkgp.ac.in",
  //   },
  //   {
  //     RollNo: "19CE10028",
  //     Name: "Gaurav Kumar",
  //     Category: "General Secretary",
  //     Post: "GSec - Technology",
  //     img: "19CE10028.jpg",
  //     Contact: 9350031637,
  //     Email: "gauyadav05@gmail.com ",
  //     "Institue ids": "gauyadav05@gmail.com",
  //     "Institute mail ids": "",
  //   },
  //   {
  //     RollNo: "19AE10017",
  //     Name: "Praneeth Reddy Kolanu",
  //     Category: "Nominated Posts",
  //     Post: "Technology Coordinator",
  //     img: "19AE10017.png",
  //     Contact: 7013160459,
  //     Email: "praneeth.kolanu.iitkgp@gmail.com",
  //     "Institue ids": "k.praneeth1199@iitkgp.ac.in",
  //     "Institute mail ids": "",
  //   },
  //   {
  //     id: 30,
  //     RollNo: "20AR10023",
  //     Name: "Nidam Kumar Jha",
  //     Post: "Secretary Innovation Cup",
  //     Email: "nidamjha@gmail.com",
  //     Phone: "9310525609/7291893736",
  //     Hall: "LBS",
  //   },
  //   {
  //     id: 31,
  //     RollNo: "20HS20022",
  //     Name: "Gaurav Chanchal",
  //     Post: "Secretary Strategy Cup",
  //     Email: "gauravchanchal2003@gmail.com",
  //     Phone: 9044750387,
  //     Hall: "LBS",
  //   },
  //   {
  //     id: 29,
  //     RollNo: "20CE30012",
  //     Name: "Ikshita Agarwal",
  //     Post: "Secretary Application Cup",
  //     Email: "agarwalikshita13@gmail.com",
  //     Phone: 8118868021,
  //     Hall: "SNIG",
  //   },
  //   {
  //     id: 8,
  //     RollNo: "20HS20041",
  //     Name: "Nirmal Kumawat",
  //     Post: "Web Secretary",
  //     Email: "kumavatshubham0@gmail.com",
  //     Phone: 7587579052,
  //     Hall: "LBS",
  //   },
  //   {
  //     id: 34,
  //     RollNo: "20AR10026",
  //     Name: "Nitish Kumar",
  //     Post: "Web Secretary",
  //     Email: "nitish.bpns@gmail.com",
  //     Phone: 9507816000,
  //     Hall: "Patel",
  //   },
  //   {
  //     id: 9,
  //     RollNo: "20HS20067",
  //     Name: "Suraj Gupta",
  //     Post: "Web Secretary",
  //     Email: "surajgupta.3072@gmail.com",
  //     Phone: 8879555132,
  //     Hall: "LBS",
  //   },
  // ];
  return (
    <Layout>
      <div className={globalStyles.mainContainer}>
        {/* ----Welcome Section---- */}

        <div className={globalStyles.welcomeSection}>
          <div className={globalStyles.backgroundImage}></div>
          <div className={globalStyles.welcomeContent}>
            <h1 className={globalStyles.committeeHeading}>Tech Committee</h1>
          </div>
        </div>

        {/* ----About Us Section---- */}

        <section>
          <div className={Styles.aboutUsSection}>
            <h1>About Us</h1>
            <p className={globalStyles.description}>
              Technology, as we know, makes everything possible around us. It
              encompasses all possibilities that mankind has to foster and
              implement in order to secure a better future. Special emphasis is
              given on Technology in IIT Kharagpur, therefore we have many
              facilities which can be used by all the students. Technology
              Committee consists of four subcommittees: Innovation Cup,
              Application Cup, Knowledge Cup, Strategy Cup.
            </p>
            {/* <p className={globalStyles.description}>
              The moto of Technology Students' Gymkhana is YOGAH KARMASU
              KAUSALAM which in English means "Perfection in action is Yoga".
              Our goal is to bring overall development in IITians through
              cultivating and nurturing their extra-curricular talents.
            </p> */}
          </div>
        </section>
        {/* Tech Movie */}

        <section>
          <h2>Tech Movie</h2>
          <div className={Styles.videoContainer}>
            <iframe
              src="https://www.youtube.com/embed/yZTGtIHYQpU?rel=0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Tech Movie"
              className={Styles.techMovieVideo}
            />
          </div>
        </section>
        {/* <h1>
          Events (Ongoing)
        </h1> */}
        <br />

        {/* Other events */}

        <center>
          <h1>
            Inter IIT Tech Meet 10.0 <br /> IIT Kharagpur’s Event Wise Results
          </h1>
        </center>

        <section>
          <center>
            <div className={globalStyles.imgContainer}>
              <AppImage src={tc1} alt="timeline" />
            </div>
          </center>

          <p className={globalStyles.centerCard}>
            Inter-IIT Tech Meet 10.0 was hosted by IIT Kharagpur, scheduled on
            25 - 27th March 2022. Out of 12 Evaluating Events, KGP bagged Gold
            in 7, Silver in 1, and Bronze in 3 of them with a total number of
            2748.41 GC points.
            <br />
            <br />
            Contingent Captain - Mann Goel
            <br />
            Contingent Vice-Captain - Kshitiz Khandelwal
            <br />
            <br />
            𝗚𝗢𝗟𝗗 𝗪𝗶𝗻𝗻𝗶𝗻𝗴 𝗘𝘃𝗲𝗻𝘁𝘀
            <br />
            1) DIGITAL ALPHA’S SEC FILING ANALYZER FOR SaaS COMPANIES
            <br />
            Score - 400
            <br />
            2) SILICON LABS&apos; SOCIAL ENTREPRENEURSHIP CHALLENGE
            <br />
            Score - 400
            <br />
            3) BOSCH’S MODEL EXTRACTION ATTACK FOR VIDEO CLASSIFICATION
            <br />
            Score - 400
            <br />
            4) DRDO&apos;s UAV- GUIDED UGV NAVIGATION CHALLENGE
            <br />
            Score - 250
            <br />
            5) BOSCH’s AGE AND GENDER DETECTION
            <br />
            Score - 250
            <br />
            6) MERCARI’S LARGE SCALE SYSTEM DESIGN HACKATHON
            <br />
            Score - 136.36
            <br />
            7) POWERED BONNET FOR ELECTRIC VEHICLE
            <br />
            Score - 144.45
            <br />
            <br />
            𝗦𝗜𝗟𝗩𝗘𝗥 𝗪𝗶𝗻𝗻𝗶𝗻𝗴 𝗘𝘃𝗲𝗻𝘁
            <br />
            1) GMETRI’S GROWTH STRATEGY FOR METAVERSE Score - 115.10
            <br />
            <br />
            𝗕𝗥𝗢𝗡𝗭𝗘 𝗪𝗶𝗻𝗻𝗶𝗻𝗴 𝗘𝘃𝗲𝗻𝘁𝘀
            <br />
            1) BLUE YONDER&apos;S SUSTAINABLE SUPPLY- CHAIN
            <br />
            Score - 318.87
            <br />
            2) ISRO’s WEB-BASED AUTOMATIC IDENTIFICATION OF SOLAR BURSTS IN
            X-RAY LIGHT CURVES
            <br />
            Score - 159.60
            <br />
            3) MUDREX’S ALPHA TRADING QUEST
            <br />
            Score - 159.02
            <br />
            <br />
            And finally, Gold it is! Technology Students’ Gymkhana heartily
            congratulates all the contingent members and captains for their
            restless efforts and hardwork put in to make us proud.
            <br />
          </p>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            {" "}
            Results of Interhall Case Study
          </h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <AppImage
              className={globalStyles.cardImg}
              src={tc2}
              alt="Music result"
            />
          </div>
          <div className={globalStyles.rightCard}>
            <p>
              We are delighted to announce the results of Interhall Case Study
              2021-22. <br />
              <br />
              Gold - Madan Mohan Malviya Hall of Residence
              <br />
              Silver - Radha Krishnan Hall of Residence
              <br />
              Bronze - Azad Hall of Residence
              <br />
              <br />
              We extend our heartiest congratulations to all the winning teams.
              And kudos to all the teams who participated!
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Results of Interhall Open Soft</h2>
        </center>

        <section>
          <center>
            <div className={globalStyles.imgContainer}>
              <AppImage src={tc3} alt="err_loading_image" />
            </div>
          </center>

          <p className={globalStyles.centerCard}>
            We are extremely thrilled to announce the results of Interhall Open
            Soft 2021-22. <br /> <br />
            Gold - Lal Bahadur Shastri Hall of Residence <br />
            Silver - Rajendra Prasad Hall of Residence <br />
            Bronze - Lala Lajpat Rai Hall of Residence <br /> <br />
            We extend our congratulations to all the winning teams. And kudos to
            all the teams who participated! <br />
            <br />
          </p>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            Results of Open IIT Math Olympiad
          </h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <AppImage
              className={globalStyles.cardImg}
              src={tc4}
              alt="Music result"
            />
          </div>
          <div className={globalStyles.rightCard}>
            <p>
              RESULTS | Open IIT Math Olympiad 2021-22
              <br />
              <br />
              Gold:
              <br />
              Team Name - 4th dimension
              <br />
              <br />
              Silver: <br />
              Team Name - Mathematica
              <br />
              <br />
              Bronze: <br />
              Team Name - Machamps
              <br />
              <br />
              Technology Students’ Gymkhana congratulates all the winners!
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            Results of Inter Hall Data Analytics
          </h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <AppImage
              className={globalStyles.cardImg}
              src={tc5}
              alt="Music result"
            />
          </div>
          <div className={globalStyles.rightCard}>
            <p>
              We are proud to release the results of Inter Hall Data Analytics
              2021-22. The teams who stood out on all the metrics of analysis
              and secured the winning positions are-
              <br />
              <br />
              Gold - Patel Hall of Residence
              <br />
              Silver - Nehru Hall of Residence
              <br />
              Bronze - Lala Lajpat Rai Hall of Residence
              <br />
              Congratulations all!
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />.
          <h2 className={globalStyles.head2}>Inter Hall Case Study</h2>
        </center>
        <section>
          <center>
            <div className={globalStyles.imgContainer}>
              <AppImage src={tc6} alt="timeline" />
            </div>
          </center>

          <p className={globalStyles.centerCard}>
            Hello KGPians,
            <br />
            Inter Hall Case Study 2021-22 Problem Statement released
            <br />
            <br />
            Interested Students can contact General Secretaries, Technology, of
            their respective hall.
            <br />
            <br />
          </p>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Open IIT Math Olympiad </h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <AppImage
              className={globalStyles.cardImg}
              src={tc7}
              alt="Music result"
            />
          </div>
          <div className={globalStyles.rightCard}>
            <p>
              Technology Students&apos; Gymkhana invites you all to the Open IIT Math
              Olympiad 2021-22. We summon all the math minds to participate in
              Maths Olympiad and compete with their brilliant problem-solving
              skills.
              <br />
              Date - 8th March 2022 , ( 8 PM to 11PM )<br />
              Venue- Raman Auditorium
              <br />
              <br />
              Note-
              <br />
              1. The maximum number of members in a team is 4.
              <br />
              2. Calculator/mobile phone/ programmable gadget/ Food are not
              allowed
              <br />
              3. No one is allowed to enter the exam hall after 7.30 pm IST,
              i.e., 30 minutes before the commencement of the exam
              <br />
              4. Participants should not bring any rough sheets with them in the
              exam hall.
              <br />
              5. Participants should bring their own pens.
              <br />
              6. The covid protocols are to be followed.
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Open IIT Product Design</h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <AppImage
              className={globalStyles.cardImg}
              src={tc8}
              alt="Music result"
            />
          </div>
          <div className={globalStyles.rightCard}>
            <p>
              Fond of taking up challenging problems and moulding them into
              reality? Eager to present your innovative ideas and designs?
              Technology Students&apos; Gymkhana gladly announces the Open IIT
              Product Design 2021-2022 for all the creative minds out there.{" "}
              <br />
              So, get ready to put your imaginative thoughts into action and
              compete with your original creative product ideas that transcend
              real-life issues. <br />
              <br />
              The entire schedule for the event is listed below: <br />
              Last Date of Registration: 15th March, 2022 <br />
              Report Submission Deadline – 30th March, 2022 <br />
              PPT Submission Deadline – 1st April, 2022 <br />
              Final Presentation – 2nd and 3rd April, 2022 <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Inter Hall Data Analytics</h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <AppImage
              className={globalStyles.cardImg}
              src={tc9}
              alt="Music result"
            />
          </div>
          <div className={globalStyles.rightCard}>
            <p>
              <br />
              <br />
              Hello KGPians,
              <br />
              Inter Hall Data Analytics 2021-2022 Problem Statement released
              <br />
              Team Registration Deadline: 6th March 2022, 11:59 PM
              <br />
              <br />
              Interested Students can contact General Secretaries, Technology,
              of their respective hall.
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Inter Hall Open Soft</h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <AppImage
              className={globalStyles.cardImg}
              src={tc10}
              alt="Music result"
            />
          </div>
          <div className={globalStyles.rightCard}>
            <p>
              <br />
              Hello KGPians,
              <br />
              Inter Hall Open Soft 2021-22 Problem Statement released
              <br />
              <br />
              Interested Students can contact General Secretaries, Technology,
              of their respective hall.
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />.
          <h2 className={globalStyles.head2}>
            Inter IIT Teach Meet Contingent team
          </h2>
        </center>
        <section>
          <center>
            <div className={globalStyles.imgContainer}>
              <AppImage src={tc11} alt="timeline" />
            </div>
          </center>

          <p className={globalStyles.centerCard}>
            Hello everyone,
            <br />
            It is time to flag off with one of the most awaited technological
            carnivals, where you are set to tackle real-life issues with your
            brilliance, innovation, and capabilities. Amidst these challenging
            times let us redefine, resurrect and recreate solutions with our
            imagination. This year IIT KHARAGPUR is hosting the 10th Inter IIT
            Tech Meet in an online mode from 25th March 2022 to 27th March 2022.
            <br />
            <br />
            Problem Statement 1: BOSCH’S MODEL EXTRACTION ATTACK FOR VIDEO
            CLASSIFICATION- Develop an efficient common strategy and relevant
            implementation to extract video-based models.
            <br />
            Problem Statement 2: DIGITAL ALPHA’S SEC FILING ANALYZER FOR SaaS
            COMPANIES- create an interactive dashboard with information, state
            statistics, etc. for SaaS companies.
            <br />
            <br />
            Note:
            <br />
            - The events will be hosted virtually <br />
            - Students from all courses are encouraged to apply (UG, MS, Ph.D.).
            <br />
            - We encourage students present in initial years like 1st and 2nd
            year UG, 1st year MS to apply.
            <br />
            - One can apply for multiple events.
            <br />
            Gear up guys !!
            <br />
          </p>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Website Hackathon Results</h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <AppImage
              className={globalStyles.cardImg}
              src={tc12}
              alt="Music result"
            />
          </div>
          <div className={globalStyles.rightCard}>
            <p>
              Technology Students’ Gymkhana conducted the Website Hackathon on
              6th Feb 2022 with the Presentation Round. Well, we are extremely
              overwhelmed by the excellence of submissions we received in the
              Website Hackathon. All the teams have performed fantastically well
              in encompassing all their designing and developing skills, to
              bring out the best with their brilliance, creativity and
              innovation. After neck to neck competition followed by much
              discussion and debate, we announce the crowned winners of the
              Website Hackathon:
              <br />
              <br />
              Gold
              <br />
              Team Name - it_works_on_local
              <br />
              Team Leader - Vaibhav Mohite (20ME10092)
              <br />
              Silver
              <br />
              Team Name - npm install victory
              <br />
              Team Leader - Ronak Agarwal (19CH10067)
              <br />
              Bronze
              <br />
              Team Name - Incognito
              <br />
              Team Leader - Nishakar Kumar (20IE10019)
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            Introductory Seminar Inter IIT Tech Meet
          </h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <AppImage
              className={globalStyles.cardImg}
              src={tc13}
              alt="Music result"
            />
          </div>
          <div className={globalStyles.rightCard}>
            <p>
              Hello everyone!
              <br />
              The Inter IIT Tech Meet is the nexus of great ideas to unravel new
              niches in innovation and Technology. It is the annual
              technological competition where students from all IITs participate
              to illuminate talks on real-life problems in a collaborative,
              competitive environment.
              <br />
              We are organizing an edifying session to get you informed about
              all aspects of the event. <br />
              <br />
              We present to you the speaker of the session- Mr. Harsh
              Maheshwari, Contingent Captain- Inter IIT Tech Meet 9.0. <br />
              The session will cover all you need to know about this grand
              technological fiesta.
              <br />
              Don&apos;t miss out on this opportunity guys.
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Sociopreneurship</h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <AppImage
                className={globalStyles.cardImg}
                src={sociop}
                alt="Sociopreneurship"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              Hello everyone!
              <br />
              You all have been waiting in the wings to bring forth an
              extraordinary idea that can change the world with your powerful
              innovation. Technology Students&apos; Gymkhana provides you with a
              brilliant opportunity with Sociopreneurship Challenge. We haul you
              to present the greatest ideas from your brightest business minds
              that creatively tackle giant social issues. The competition will
              be held in two rounds where you will propose a solution to the
              provided theme.
              <br />
              To check out the entire details,
              <a
                className={globalStyles.btn}
                href=" https://drive.google.com/file/d/1UM04U_QcyMSWQ-3Bc2SoiIDmUwKnmgc8/view?fbclid=IwAR1hTSrRWq_idVUfpn3JgAmypwCC7XWxftAaescR169GqL1gK1HzUpZVUp4"
              >
                Click here
              </a>
              <br />
              Form Link:{" "}
              <a
                className={globalStyles.btn}
                href="https://forms.gle/LbbfJBCtUo3DqAgc9"
              >
                Click here
              </a>
              Registration Deadline: 4th February 2022, 8 PM
              <br />
              The winners might also get a chance to get seed-funded by
              Technology Students&apos; Gymkhana on their winning prototypes.
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            <b>
              Introductory Seminar
              <br />
              Open IIT and Technology General Championship events
            </b>
          </h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <AppImage
                className={globalStyles.cardImg}
                src={openiit}
                alt="open iit tech intro"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              Hello Freshers,
              <br />
              We hope that you are enjoying a ravishing start to a momentous
              journey at IIT Kharagpur. As you have known by now, IIT Kharagpur
              offers myriads opportunities to explore with a healthy learning
              process, intense competition and lots of insights.
              <br />
              Owing to the current situation the beneficial bond and interaction
              between seniors – juniors is barred. But don’t you worry, as we
              cover this for you. To get you acquainted with the coveted General
              Championships and Open IIT events, we have organised an extremely
              insightful session with your much-experienced seniors.
              <br /> Accumulating their memories, fundaes, suggestions,
              experiences and strategies, this session will provide productive
              understandings of mastering in these competitions. <br />
              <br />
              Link to join MS Teams Channel :{" "}
              <a
                className={globalStyles.btn}
                href="https://bit.ly/techvistara"
                style={{ color: "black" }}
              >
                Click here
              </a>
              <br />
              Make sure to join in on 26th December 2021, 5:00 PM
              <br />
              Looking forward to seeing you there!!
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
        </center>

        {/*Right alignment code for committee page */}

        {/*  
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard2}>
            <p>
              Hello Freshers,<br />
              We hope that you are enjoying a ravishing start to a momentous journey at IIT Kharagpur. As you have known by now, IIT Kharagpur offers myriads opportunities to explore with a healthy learning process, intense competition and lots of insights.<br />
              Owing to the current situation the beneficial bond and interaction between seniors – juniors is barred. But don’t you worry, as we cover this for you. To get you acquainted with the coveted General Championships and Open IIT events, we have organised an extremely insightful session with your much-experienced seniors.<br /> Accumulating their memories, fundaes, suggestions, experiences and strategies, this session will provide productive understandings of mastering in these competitions. <br />
              <br />
              Link to join MS Teams Channel : <button className={globalStyles.btn} > <a href="https://bit.ly/techvistara" style={{ color: 'black' }} >Click here</a></button><br />
              Make sure to join in on 26th December 2021, 5:00 PM<br />
              Looking forward to seeing you there!!<br />

            </p>

          </div>

          <div className={globalStyles.rightCard}>
            <center>
              <AppImage className={globalStyles.cardImg}
                src={openiit}
                alt="open iit tech intro"
              />
            </center>
          </div>
        </section> 

        <center>
          <hr className={globalStyles.hrLine} />
        </center>

        */}

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>10th Inter IIT Tech Meet</h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <AppImage
                className={globalStyles.cardImg2}
                src={techmeet}
                alt="Tech meet"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              Hello Kgpians,
              <br />
              10th Inter IIT Tech Meet is around the corner and this year IIT
              Kharagpur is the proud host of this enormous technological fiesta.
              Every edition our team has performed stupendously well and this
              time too we are prepared with our dedicated, innovative and
              imaginative team for a successful venture. Introducing you to,
              “Mann Goel”, the team Contingent Captain.
              <br />
              Combining his technical and leadership skills, Mann is keen to
              master all the aspects of problems with thorough discussion and
              solutions. He has been consistently performing well and is
              determined to give his best to secure Gold.
              <br />
              Mann&apos;s message to all the KGPians: &quot;With the other two inter IIT
              trophies already at kgp, now is the time to set the records
              straight and make kgp the defending champion in all the 3 inter
              iits at the same time. To realise this kgp dream, I call out each
              and every kgpian to put in their cent per cent in the upcoming
              tech meet.&quot;
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <br />
          <br />

          <h1>Archives</h1>

          <h2 className={globalStyles.head2}>Tradex</h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <AppImage className={globalStyles.cardImg} src={tradex} alt="tradex" />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              Hello KGPians,
              <br />
              Want to implement your knowledge of investing in a risk-free
              environment or acquire first-hand experience of the stock market
              and its vagaries?
              <br />
              Technology, IIT Kharagpur brings an excellent opportunity to grill
              and test your skills with an online simulation trading
              competition- Open IIT Tradex. Understand the trends in the market,
              invest accordingly and build a strong portfolio that stands out.
              The competition is completely risk- free conducted on the Dalal
              Street Investment Journal Trading platform. You will trade with
              virtual money in a real-time trading simulation, the way it
              happens in the real world. Acquire your seats as the bid starts
              soon. It will be exciting, nerve-wracking, gruelling and most of
              all fun!!
              <br />
              <br />
            </p>
          </div>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <br />
              <AppImage
                className={globalStyles.cardImg}
                src={result_t}
                alt="tradex"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <h2 className={globalStyles.head2}>Results</h2>
              <br />
              After facing squarely the ups and downs of the market, our trading
              champions are:
              <br />
              Gold: Akshay Chordia (18CY20004)
              <b />
              Portfolio valuation 1379616.579
              <br />
              Silver: Bharath Hegde (20HS20016)
              <br />
              Portfolio valuation 1322532.152
              <br />
              Bronze: Mohammad Ayan Akhtar (19CE3FP20)
              <br />
              Portfolio valuation 1314806.087
              <br />
              Heartiest congratulations to them!
              <br />
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            Tech Vistara (Blockchain Workshop)
          </h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <AppImage
                className={globalStyles.cardImg}
                src={techvistara}
                alt="Tech vistara"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              Hello KGPians,
              <br />
              The stock market is a no-called strike game. You don’t have to
              swing at everything – you can wait for your pitch.”
              <br /> – Warren Buffet
              <br />
              Want to implement your knowledge of investing in a risk-free
              environment or acquire first-hand experience of the stock market
              and its vagaries? Technology, IIT Kharagpur brings an excellent
              opportunity to grill and test your skills with an online
              simulation trading competition- Open IIT Tradex. Understand the
              trends in the market, invest accordingly and build a strong
              portfolio that stands out. Acquire your seats as the bid starts
              soon. It will be exciting, nerve-wracking, gruelling and most of
              all fun!!
              <br />
              Registration Link:
              <a
                className={globalStyles.btn}
                href=" https://forms.gle/esCWFdW5MLMRq6L98"
              >
                Click here
              </a>
              <br />
              Registration Deadline: 16th January 2022, 6:00 PM <br />
              Document for reference:
              <a className={globalStyles.btn} href="https://bit.ly/tradexkgp ">
                Click here
              </a>
              <br />
              Further information will be mailed to the registered participants.
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Website Hackathon</h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <AppImage className={globalStyles.cardImg} src={img1} alt="Website" />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              In this event, the students were expected to develop a website
              that would synchronize a student&apos;s academic, extracurricular, and
              co-curricular information in one place. As a part of the event,
              the participating teams would develop an API-based backend for the
              website and use it to serve the content for the frontend(s).
              <br />
              <br />
              <br />
              Link to Problem Statement:{" "}
              <a
                className={globalStyles.btn}
                target="_blank"
                href="https://drive.google.com/file/d/1Hmfomj7pa0o8AZonzxC0O0GNTPU0PjgW/view?usp=sharing"
                rel="noreferrer"
              >
                {" "}
                Click Here
              </a>
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            Samsung Innovation Award : IIT Kharagpur Chapter
          </h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <AppImage
                className={globalStyles.cardImg}
                src={img2}
                alt="Samsung innovation"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <br />
              <br />
              <br />
              <br />
              Samsung Innovation Award-IIT Kharagpur Chapter was organised by
              Technology Students&apos; Gymkhana, IIT Kharagpur, and Entrepreneurship
              Cell, IIT Kharagpur. Samsung Innovation Award is organized
              annually by the Samsung R&D Institute India Bangalore aims to
              identify, encourage and reward innovative ideas and projects.
              <br />
              The Silver Jubilee Edition is a Multi-IIT event with all our IIT
              partners from the last ten editions. The theme for the 2021
              edition is &apos;Metaverse&apos;, i.e., technologies ranging from AR/VR, 3d
              Spaces and Reconstruction, to experiences in gaming, tourism, and
              many more.
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>TechVistara</h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <AppImage
                className={globalStyles.cardImg}
                src={img3}
                alt="Techvistara"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              TechVistara is a series of interactive sessions aimed to unravel
              the world around us and present it in the most optimized way
              possible. The first episode shed light on “Discovery of Exoplanets
              and Search for the habitable world”. It was presented by Professor
              Anand Narayanan, an astrophysicist scholar and a professor at
              IIST.
            </p>
          </div>
        </section>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </Layout>
  );
}
