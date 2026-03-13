"use client";
import React from "react";
import Layout from "../../../components/Layouts/Layout";
import Styles from "../styles/socult.module.css";
import globalStyles from "../styles/committees.module.css";
// import ContactStyles from "../../../styles/views/contacts.module.css";
// import ContactCard from "../../../components/ContactCard";
import img1 from "./images/tech/cycling.jpg";
import img2 from "./images/tech/chess.jpg";
import sportsquiz from "./images/tech/sportsquiz.jpg";
// import quizwin from "./images/tech/quizwinners.png";
import khokho from "./images/tech/khokho.jpg";
import spt1 from "./images/sports/spt1.png";
import spt2 from "./images/sports/spt2.png";
import spt3 from "./images/sports/spt3.png";
import spt5 from "./images/sports/spt5.png";
import spt6 from "./images/sports/spt6.png";
import spt7 from "./images/sports/spt7.png";
import spt8 from "./images/sports/spt8.png";
import spt9 from "./images/sports/spt9.png";
import spt10 from "./images/sports/spt10.png";
import spt11 from "./images/sports/spt11.png";
import spt12 from "./images/sports/spt12.png";
import spt13 from "./images/sports/spt13.png";
import spt14 from "./images/sports/spt14.png";
import spt15 from "./images/sports/spt15.png";
import spt16 from "./images/sports/spt16.png";
import spt17 from "./images/sports/spt17.jpg";
import spt18 from "./images/sports/spt18.jpeg";
import spt19 from "./images/sports/spt19.jpeg";
import spt20 from "./images/sports/spt20.jpeg";
import spt21 from "./images/sports/spt21.jpg";
import spt22 from "./images/sports/spt22.jpg";
import spt23 from "./images/sports/spt23.jpg";
import spt24 from "./images/sports/spt24.jpg";
import spt25 from "./images/sports/spt25.jpg";
import AppImage from "../../../components/AppImage";

export default function Sports() {
  // const techComTeam = [
  //   {
  //     RollNo: "19MT10007",
  //     Name: "Akshay Kumar Singh",
  //     Category: "General Secretary",
  //     Post: "GSec - Sports & Games",
  //     img: "19MT10007.png",
  //     Contact: 7585008111,
  //     Email: "akshaysingh7134@gmail.com",
  //     "Institue ids": "akshaysingh7134@gmail.com",
  //     "Institute mail ids": "gsectsg-sports@hijli.iitkgp.ac.in",
  //   },
  //   {
  //     RollNo: "19AE10029",
  //     Name: "Sri Harsha Reddy",
  //     Category: "General Secretary",
  //     Post: "GSec - Sports & Games",
  //     img: "19AE10029.png",
  //     Contact: 9908907907,
  //     Email: "sriharsha061@gmail.com",
  //     "Institue ids": "sriharsha061@gmail.com",
  //     "Institute mail ids": "",
  //   },
  //   {
  //     RollNo: "19MA20023",
  //     Name: "Kritika Bagaria",
  //     Category: "Nominated Posts",
  //     Post: "Institute Girl Sports' Nominee",
  //     img: "19MA20023.png",
  //     Contact: 9352138291,
  //     Email: "kritika16.iitkgp@gmail.com",
  //     "Institue ids": "kritika16.iitkgp@iitkgp.ac.in",
  //     "Institute mail ids": "",
  //   },
  //   {
  //     id: 10,
  //     RollNo: "20AE30016",
  //     Name: "Priyansh Shrivastava",
  //     Post: "Secretarty Aquatics",
  //     Email: "priyanshshri11@gmail.com",
  //     Phone: 8225805192,
  //     Hall: " LBS",
  //   },
  //   {
  //     id: 11,
  //     RollNo: "20MT10064",
  //     Name: "A Hasitha",
  //     Post: "Secretary Athletics Subcommittee",
  //     Email: "allurihasitha@gmail.com",
  //     Phone: 9392703946,
  //     Hall: "SNIG",
  //   },
  //   {
  //     id: 12,
  //     RollNo: "20AG30037",
  //     Name: "Vansh Agrawal",
  //     Post: "Secretary Badminton Subcommittee",
  //     Email: "vanshagarwal0902@gmail.com",
  //     Phone: 6281714795,
  //     Hall: "LBS",
  //   },
  //   {
  //     id: 13,
  //     RollNo: "20AG30030",
  //     Name: "Ronak Khichar",
  //     Post: "Secretary Basketball",
  //     Email: "920ronakkhichar@gmail.com",
  //     Phone: 8955691602,
  //     Hall: " LBS",
  //   },
  //   {
  //     id: 14,
  //     RollNo: "20CH10083",
  //     Name: "Sumit Chaudhari",
  //     Post: "Secretary Cricket Subcommittee",
  //     Email: "sumitchaudhari942@gmail.com",
  //     Phone: 9325832653,
  //     Hall: "LBS",
  //   },
  //   {
  //     id: 15,
  //     RollNo: "20MI31001",
  //     Name: "Abhinil Kumar",
  //     Post: "Secretary Football",
  //     Email: "abhinilkumar@gmail.com",
  //     Phone: 8210169485,
  //     Hall: "LBS",
  //   },
  //   {
  //     id: 16,
  //     RollNo: "20ME10101",
  //     Name: "Shubham Jaiswal",
  //     Post: "Secretary Gymnasium and Weightlifting",
  //     Email: "sp1474861@gmail.com",
  //     Phone: 9302934647,
  //     Hall: "LBS",
  //   },
  //   {
  //     id: 17,
  //     RollNo: "20CE30038",
  //     Name: "Arunendra Pratap Singh",
  //     Post: "Secretary Hockey Subcommittee",
  //     Email: "arunendraiitkanpur01@gmail.com",
  //     Phone: 9935481287,
  //     Hall: "LBS",
  //   },
  //   {
  //     id: 18,
  //     RollNo: "20IM10040",
  //     Name: "Tanmay Malatkar",
  //     Post: "Secretary Indoor Game",
  //     Email: "tmalatkar14@gmail.com",
  //     Phone: 8308381159,
  //     Hall: "LBS",
  //   },
  //   {
  //     id: 19,
  //     RollNo: "20MI33015",
  //     Name: "Jadhav Yash",
  //     Post: "Secretary Squash Subcommittee",
  //     Email: "7yashjadhav@gmail.com",
  //     Phone: 9421418202,
  //     Hall: "LBS",
  //   },
  //   {
  //     id: 20,
  //     RollNo: "20AG10025",
  //     Name: "Moon Minal Ajay",
  //     Post: "Secretary Tennis",
  //     Email: "minalmoon78@gmail.com",
  //     Phone: 8806956978,
  //     Hall: "SN/IG",
  //   },
  //   {
  //     id: 21,
  //     RollNo: "20EC10020",
  //     Name: "Bellam Tejesh",
  //     Post: "Secretary Volleyball",
  //     Email: "tejeshbellam@gmail.com",
  //     Phone: 6305213352,
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
            <h1 className={globalStyles.committeeHeading}>
              Sports and Games Committee
            </h1>
          </div>
        </div>

        {/* ----About Us Section---- */}

        <section>
          <div className={Styles.aboutUsSection}>
            <h1>About Us</h1>
            <p className={globalStyles.description}>
              Technology Students’ Gymkhana is the hub of the numerous
              extra-curricular and co-curricular activities in IIT Kharagpur
              ranging from sports to socio-cultural. The Gymkhana is managed by
              the students, for the students, under the guidance and active
              participation of the faculty and staff members.
            </p>
            <p className={globalStyles.description}>
              The moto of Technology Students&apos; Gymkhana is YOGAH KARMASU
              KAUSALAM which in English means &quot;Perfection in action is Yoga&quot;.
              Our goal is to bring overall development in IITians through
              cultivating and nurturing their extra-curricular talents.
            </p>
          </div>
        </section>

        {/* Other events */}

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Open IIT Volleyball 2022</h2>
        </center>

        <section>
          <center>
            <div className={globalStyles.imgContainer}>
              <AppImage src={spt25} alt="Open_IIT_Volleyball_Poster" />
            </div>
          </center>

          <div className={globalStyles.centerCard}>
            <p>
              “Serve strong, dig fiercely, and Spike hard.”
              <br />
              <br />
              Hola KGP!
              <br />
              The Volleyball Subcommittee, Technology Students&apos; Gymkhana, is
              back on the courts with the &apos;Open IIT Volleyball Tournament 2022&apos;,
              which is to be held on the 10th and 11th of September 2022.
              <br />
              <br />
              Register your team if you already have one, else register yourself
              for the Tournament before 10:00 a.m., 9th September.
              <br />
              The tournament is open for all!!
              <br />
              So, what are you waiting for!
              <br />
              Get ready to test your sporting spirit and volleyball skills.
              <br />
              <br />
              Register here:{" "}
              <a
                href="https://forms.gle/vkxU1NFHyWE5u7VbA"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            Open IIT Hockey Tournament 2022
          </h2>
        </center>

        <section>
          <center>
            <div className={globalStyles.imgContainer}>
              <AppImage src={spt24} alt="Open_IIT_Hockey_Tournament" />
            </div>
          </center>

          <div className={globalStyles.centerCard}>
            <p>
              Hello KGPians!
              <br />
              <br />
              We are here with one of the most exciting times for the Hockey
              lovers of IIT Kharagpur, the ‘IITKGP Hockey Premier League 2022&apos;
              (Open IIT) , which is to be organised from 10th September.
              <br />
              <br />
              The tournament is open to all the students of IIT Kharagpur.
              <br />
              <br />
              Register yourself for the tournament before 11:59 p.m., 7th
              September, at this{" "}
              <a
                href="https://forms.gle/YQzNBhjbn5fvuAfN8"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>{" "}
              <br />
              <br />
              Note:
              <br />
              Teams will be made after the registration deadline.
              <br />
              <br />
              “You miss 100% of the shots you don’t take.”
              <br />
              Don’t miss out on the opportunities to compete, learn and improve.
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            Open IIT Basketball Tournament 2022
          </h2>
        </center>

        <section>
          <center>
            <div className={globalStyles.imgContainer}>
              <AppImage src={spt23} alt="Open_IIT_Basketball_Tournament_2022" />
            </div>
          </center>

          <div className={globalStyles.centerCard}>
            <p>
              Hola junta!
              <br />
              <br />
              Gear up and get ready to dribble the ball with your team in the
              ‘Open IIT Basketball Tournament 2022’, which is going to start on
              the 9th of September.
              <br />
              <br />
              The tournament is open to all the students of IIT Kharagpur.
              <br />
              <br />
              The deadline for registration is 11:59 a.m., 8th September.
              <br />
              <br />
              Participants with a team can register the team, and those without
              a team can register themselves and report at the Basketball courts
              at 6 pm, on Thursday, 8th September, for the formation of teams.
              <br />
              <br />
              Note: A minimum of 6 and a maximum of 10 players are allowed in a
              team.
              <br />
              <br />
              Register here:{" "}
              <a
                href="https://forms.gle/8cwnsyYArZVpiZru9"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
              <br />
              <br />
              We are eager to see your best on the court.
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Hockey Workshop for Girls</h2>
        </center>

        <section>
          <center>
            <div className={globalStyles.imgContainer}>
              <AppImage src={spt22} alt="Hockey_Workshop_for_Girls" />
            </div>
          </center>

          <div className={globalStyles.centerCard}>
            <p>
              “When you are interested, go grab the opportunity.”
              <br />
              <br />
              Hello girls!
              <br />
              A Hockey workshop for girls is being organised by the Hockey
              subcommittee, TSG, to train girls of IIT Kharagpur in the sport,
              from scratch.
              <br />
              <br />
              Put in some time, with a desire to learn, and you will reach your
              better self. Your participation is welcomed.
              <br />
              <br />
              Date - 7th SEPT Onwards
              <br />
              Time - 6PM-9PM
              <br />
              <br />
              Do Register -{" "}
              <a
                href="https://forms.gle/LP2GszohUXRTo72n8"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Athletics Championship 2022</h2>
        </center>

        <section>
          <center>
            <div className={globalStyles.imgContainer}>
              <AppImage src={spt21} alt="Athletics_Championship_2022" />
            </div>
          </center>

          <div className={globalStyles.centerCard}>
            <p>
              “A trophy carries dust. Memories last forever.” - Mary Lou Retton.
              <br />
              <br />
              We feel so glad to inform you that the ‘First Athletics
              Championship 2022’ is being organized by us on the 10th and 11th
              of September, 2022.
              <br />
              This 2-day event will witness athletes participating in 18
              athletic events, with a tremendous competitive spirit, in 4
              different categories.
              <br />
              <br />
              The championship will be held at Jnan Ghosh Stadium from 8:00 a.m.
              to 5:00 p.m. on the two days.
              <br />
              <br />
              We invite you to witness the occasion, encourage the brilliant
              athletes, and appreciate their hard work.
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            Open IIT Tennis Tournament 2022
          </h2>
        </center>

        <section>
          <center>
            <div className={globalStyles.imgContainer}>
              <AppImage src={spt20} alt="Tennis_Tournament_Poster" />
            </div>
          </center>

          <div className={globalStyles.centerCard}>
            <p>
              Tennis Subcommittee, Technology Students&apos; Gymkhana, Indian
              Institute of Technology Kharagpur is organising an Open IIT Tennis
              Tournament 2022-2023 for students. <br />
              <br />
              It is an amazing opportunity to know where you stand and improve
              your skills
              <br />
              <br />
              Tournament date: 5th September onwards
              <br />
              Time: 6:00 pm to 10:00 pm <br />
              Venue: Gymkhana Tennis Courts
              <br /> <br />
              The last date to register is 4th September 2022. <br />
              Players should use Non-marking shoes and proper sports attire for
              the tournament. <br />
              <br />
              Link to Register:{" "}
              <a
                href="https://forms.gle/Z6EKJA47QRFS7kMH7"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            Open IIT Badminton Tournament 2022
          </h2>
        </center>

        <section>
          <center>
            <div className={globalStyles.imgContainer}>
              <AppImage src={spt19} alt="Badminton_Tournament_Poster" />
            </div>
          </center>

          <div className={globalStyles.centerCard}>
            <p>
              The open IIT Tournament of Badminton is being conducted for all UG
              PG and PhD students.
              <br />
              <br />
              Tournament date: 2nd to 4th September 2022
              <br />
              Venue: Gymkhana Badminton Courts
              <br /> <br />
              The last date to register is 29th August 2022. <br />
              Non-marking shoes are mandatory. <br />
              <br />
              Link to Register:{" "}
              <a
                href="https://forms.gle/LpdzHMWjkkNXCR3c6"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            Results of Gymkhana Table Tennis Tournament
          </h2>
        </center>

        <section>
          <div className={globalStyles.centerCard}>
            <p>
              For the first time, the Indoor Games Subcommittee, Technology
              Students&apos; Gymkhana, Indian Institute of Technology Kharagpur
              successfully hosted a Table Tennis event accessible to all IIT
              Kharagpur students and staff members: The First Gymkhana Table
              Tennis Tournament!!
              <br />
              <br />
              The results of the first Gymkhana Table Tennis Tournament are as
              follows.
              <br />
              <br />
              Categories:
              <ul>
                <li>
                  <strong>❖ Men&apos;s singles :</strong>
                  <ul>
                    <li>○ Winner : Seemant Achari</li>
                    <li>○ 1st Runner Up : Harshit Baranwal</li>
                    <li>○ 2nd Runner Up: Vedant Agarwal and Karan Punjabi</li>
                  </ul>
                </li>
                <li>
                  <strong>❖ Women&apos;s singles :</strong>
                  <ul>
                    <li>○ Winner : Suparna Rooj</li>
                    <li>○ 1st Runner Up : Monika Sharma</li>
                    <li>
                      ○ 2nd Runner Up: Sneh Lata Singh and Prachari Patankar{" "}
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>❖ Men&apos;s doubles :</strong>
                  <ul>
                    <li>
                      ○ Winner : Sundar Kumar Roy and Akhilesh Kumar Singh
                    </li>
                    <li>
                      ○ 1st Runner Up : Hitesh Sharma and Arun K. Samantaray
                    </li>
                    <li>
                      ○ 2nd Runner Up: Satvik Ch. N. V. and Vedant Agarwal
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>❖ Women&apos;s doubles :</strong>
                  <ul>
                    <li>○ Winner : Sneh Lata Singh and Monika Sharma</li>
                    <li>
                      ○ 1st Runner Up : K. Gayatri Meghana and Suparna Rooj
                    </li>
                    <li>○ 2nd Runner Up: Nina Singh and Hasi Chakraborty</li>
                  </ul>
                </li>
                <li>
                  <strong>❖ Mixed doubles :</strong>
                  <ul>
                    <li>○ Winner : Biplav Patra and Suparna Rooj</li>
                    <li>
                      ○ 1st Runner Up : Sneh Lata Singh and Harshit Baranwal
                    </li>
                    <li>
                      ○ 2nd Runner Up: S. Dutta Sai Pawan and Monika Sharma
                    </li>
                  </ul>
                </li>
              </ul>
              Trophies for the tournament were sponsored by Sports Corner,
              Technology Market, with support from Mr Sundar Kumar Roy, Mr.
              Akhilesh Kumar Singh and staff members. <br />
              <br />
              Refreshments for the referees and organising team members were
              arranged during the tournament by Mr Tanay Jagnani and Mr Sath
              Prakash Chimnari, and the dinner was organised by Prof, Arun K.
              Samantaray.
            </p>
          </div>
        </section>
        {/* // */}

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Powerlifting Workshop</h2>
        </center>

        <section>
          <center>
            <div className={globalStyles.imgContainer}>
              <AppImage src={spt17} alt="Weightlifting_Workshop_Poster" />
            </div>
          </center>

          <div className={globalStyles.centerCard}>
            <p>
              The wait is finally over as Gymnasium and Weightlifting
              subcommittee, Technology Students&apos; Gymkhana is going to organize
              Powerlifting Workshop for all the students. <br />
              Do participate as you&apos;ll get to learn a lot about Powerlifting and
              Weightlifting as well. <br />
              Fill out the Google form to register yourself and get all the
              notifications related to this event.
              <br />
              <br />
              link to form:{" "}
              <a
                href="https://forms.gle/8DduXvwJ9exXa3jP6"
                target="_blank"
                rel="noreferrer"
              >
                Link
              </a>{" "}
              <br />
              Dates: 27th August(Girls) , 28th August(Boys)
              <br />
              Time: 6pm onwards
              <br />
              Venue: Gymkhana Weightlifting Room
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Volleyball Workshop for Girls</h2>
        </center>

        <section>
          <center>
            <div className={globalStyles.imgContainer}>
              <AppImage src={spt18} alt="Volleyball_Workshop_Poster" />
            </div>
          </center>

          <div className={globalStyles.centerCard}>
            <p>
              Hello Girls!! <br />
              If you are the one who is keen on learning a sport, feel relaxed
              and refreshed in the grounds..but wondering where and how to start
              with!!! <br />
              <br />
              Here is the opportunity waiting for you. <br />
              Technology Students&apos; Gymkhana is going to organise &quot;VOLLEYBALL
              WORKSHOP&quot; for all girls of UG, PG, PhD where you will be taught
              from the scratch. <br />
              <br />
              Registration Link :{" "}
              <a href=" https://forms.gle/yDou6jkbfvYyc84PA" target="_blank">
                Link
              </a>
              <br />
              Dates: 16th to 27th August
              <br />
              Time: 6:30pm to 9:30pm
              <br />
              Venue: PAN Loop Courts
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            First Gymkhana Table Tennis Tournament
          </h2>
        </center>

        <section>
          <center>
            <div className={globalStyles.imgContainer}>
              <AppImage src={spt16} alt="TT Tournament Poster" />
            </div>
          </center>

          <div className={globalStyles.centerCard}>
            <p>
              &quot;Take the initiative and make a difference; that is how we
              improve.&quot;
              <br />
              <br />
              For the first time, the Indoor Games Subcommittee, Technology
              Students&apos; Gymkhana, Indian Institute of Technology Kharagpur is
              hosting a Table Tennis event accessible to all IIT Kharagpur
              students and staff members: The First Gymkhana Table Tennis
              Tournament!!
              <br />
              <br />
              It&apos;s going to be an entertaining competition with a lot of sports
              spirit, passion, and enjoyment.
              <br />
              The top 30 students (24 boys and 6 girls) will be considered for
              Inter-IIT selections.
              <br />
              Don&apos;t pass up this opportunity.
              <br />
              <br />
              Register here:
              <br />
              Men&apos;s and Women&apos;s Double Fixtures-
              <a
                className={globalStyles.btn}
                href="https://forms.gle/srp99vEVBfxLAWxd7"
                target="_blank"
                rel="noreferrer"
              >
                Click Here
              </a>
              <br />
              Mixed Double Fixtures-
              <a
                className={globalStyles.btn}
                href="https://forms.gle/tGBJDtgdL6FL7VfT9"
                target="_blank"
                rel="noreferrer"
              >
                Click Here
              </a>
              <br />
              Singles Fixtures-
              <a
                className={globalStyles.btn}
                href="https://forms.gle/z1vfaSB84vouvZFy9"
                target="_blank"
                rel="noreferrer"
              >
                Click Here
              </a>
              <br />
              <br />
              Registration Deadline: 20th August before 11:59 p.m.
              <br />
              Tournament Dates: 23rd - 29th August.
              <br />
              Time: 6pm to 9pm
              <br />
              Venue: TSG Table Tennis Court
              <br />
              Categories:
              <ul>
                <li>❖ Men&apos;s singles</li>
                <li>❖ Women&apos;s singles</li>
                <li>❖ Men&apos;s doubles</li>
                <li>❖ Women&apos;s doubles</li>
                <li>❖ Mixed doubles</li>
              </ul>
              PLEASE NOTE: Players should use Non-marking shoes and proper
              sports attire for the tournament.
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h1>Inter Hall Gymkhana Championship</h1>
        </center>

        <section>
          <center>
            <div className={globalStyles.img2Container}>
              <AppImage src={spt1} alt="timeline" />
            </div>
            <div className={globalStyles.imgContainer}>
              <AppImage src={spt2} alt="timeline" />
            </div>
          </center>

          <p className={globalStyles.centerCard}>
            Hello everyone,
            <br />
            After almost two years we saw everybody engaging again in the
            spirits of sports with the ever high Hall Tempo. This time all the
            halls vied for victory in Inter Hall Gymkhana Championships and we
            witnessed an amazing display of dedication, hard work, and
            enthusiasm.
            <br />
            <br />
            IIT KGP Sports congratulates all of you for putting supreme efforts
            and making this an enormous success that instils the feeling of
            pride in the sporting culture of IIT Kharagpur. We release the final
            standings of all sports disciplines. Huge congratulations to all the
            winners!!
            <br />
          </p>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            Interhall Chess Gymkhana Championship
          </h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <AppImage className={globalStyles.cardImg} src={spt3} alt="khokho" />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <br />
              The battle now starts on 64 squares to outsmart the opponent and
              demonstrate your wit and intellect with Interhall Chess Gymkhana
              Championship.
              <br />
              <br />
              Date- 2nd & 3rd April, 2022
              <br />
              Time- 10 AM
              <br />
              Venue- Multipurpose Hall, Technology Students&apos; Gymkhana. <br />
              You can follow the updates on
              <br />
              <br />
              For Men:
              <a
                className={globalStyles.btn}
                href="https://chess-results.com/tnr624740.aspx?lan=1"
              >
                Click here
              </a>
              <br />
              For Women:
              <a
                className={globalStyles.btn}
                href="https://chess-results.com/tnr624748.aspx?lan=1"
              >
                Click here
              </a>
              <br />
              Prepare your pawns, bring the bishops out, row forward with
              rooks-strategise the best moves for the ultimate checkmate!!
            </p>
          </div>
        </section>

        {/* <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Interhall Basketball Gymkhana Championship</h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <AppImage className={globalStyles.cardImg} src={spt4} alt="khokho" />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p><br /><br />
              After fiercely fiery matches, get ready to witness the intense action in InterHall Basketball Gymkhana Championship quarterfinals.<br /><br />
              27th March 5:00 PM - Nehru vs RP <br />
              27th March 6:30 PM - MMM vs BRH<br />
              27th March 8:00 PM - RK vs Azad <br />
              Venue - TSG Basketball Court <br /><br />
              Don't miss the ultimate battle to the finals!!<br />
              All the best teams!!<br />

            </p>
          </div>
        </section> */}

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            Interhall Weightlifting Gymkhana Championship
          </h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <AppImage className={globalStyles.cardImg} src={spt5} alt="khokho" />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <br />
              <br />
              &quot;Champions aren’t made in the gyms. Champions are made from
              something they have deep inside them-a desire, a dream, a vision.&quot;
              <br />
              Muhammad Ali
              <br />
              <br />
              We are glad to begin the Interhall Weightlifting Gymkhana
              Championship. Join in to get amped for another intense and immense
              competition.
              <br />
              <br />
              Date- 26th March, 2022
              <br />
              Venue- Multipurpose room ,TSG
              <br />
              IIT KGP Sports wishes all the participants great luck. Work hard
              and lift the best.
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            Interhall Basketball Gymkhana Championship
          </h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <AppImage className={globalStyles.cardImg} src={spt6} alt="khokho" />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <br />
              <br />
              “Ask me to steal, block out, sacrifice, lead, dominate, anything.
              But it’s not what you ask of me it’s what I ask of myself.”
              <br />
              ― LeBron James.
              <br />
              <br />
              Here is another chance to up the game guys with Interhall
              Basketball Gymkhana Championship 2022. Push yourself with crazy
              athleticism, endless stamina, and relentless commitment to shoot
              victory.
              <br />
              <br />
              22nd March 2022
              <br />
              6:00 PM
              <br />
              TSG Basketball Court
              <br />
              Defend , Dribble ,Dominate!!
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Women’s Open IIT Cricket</h2>
        </center>

        <section>
          <center>
            <div className={globalStyles.imgContainer}>
              <AppImage src={spt7} alt="timeline" />
            </div>
          </center>

          <p className={globalStyles.centerCard}>
            We are glad and extremely proud to announce the first-ever Women&apos;s
            Open IIT Cricket. Get ready, girls, to rule the pitch and break the
            boundaries. This will surely be an experience like no other. Display
            the best of your skills as glory and incredible exciting prizes are
            on the line, which includes-
            <br />
            <br />
            Exclusive T-shirts for Winning Team
            <br />
            Victory Caps for Runners Up Team
            <br />
            Bag for the Best Player
            <br />
            So get ready and play!!
            <br />
            <br />
          </p>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            Interhall Tennis Gymkhana Championship
          </h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <AppImage className={globalStyles.cardImg} src={spt8} alt="khokho" />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <br />
              <br />
              Hello everyone,
              <br />
              It is time to channelize your spirit and effort on the tennis
              court with Interhall Tennis Gymkhana Championship and bag victory
              for your halls. Tennis, the game that tests a person’s hard work,
              determination, and grit. A simple game of tennis is enough to
              inspire us in so many ways. Huge luck to all the players!!
              <br />
              <br />
              Date - 21st March 2022
              <br />
              Time - 6:00 pm <br />
              Venue - TSG Tennis Complex
              <br />
              Check out the live scores on the official Gymkhana Website -
              https://gymkhana.iitkgp.ac.in/
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            Interhall Badminton Gymkhana Championship
          </h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <AppImage className={globalStyles.cardImg} src={spt9} alt="khokho" />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <br />
              &quot;Your dreams are what define your individuality. They have the
              power to give you wings and make you fly high.&quot;
              <br />
              - P. V. Sindhu
              <br />
              Now is the time to battle this out on the Badminton Court.
              <br />
              IIT KGP Sports invites you all to Inter Hall Badminton Gymkhana
              Championship 2022. 5:45 pm onwards
              <br />
              <br />
              Venue -TSG Badminton courts.
              <br />
              The live scores of the Badminton Match can be viewed on the
              official website of Technology Students&apos; Gymkhana.
              https://gymkhana.iitkgp.ac.in/sports/ <br />
              <br />
              All the best teams!!
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            Interhall Athletics Gymkhana Championship
          </h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <AppImage className={globalStyles.cardImg} src={spt10} alt="khokho" />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <br />
              <br />
              &quot;An athlete runs with strength in body, passion in mind, and hope
              in heart.&quot;
              <br />
              <br />
              It is time to flag-off InterHall Athletics Gymkhana Championship.{" "}
              <br />
              Get ready to witness the ultimate fiery showdown on the track
              where each second counts.
              <br />
              IIT KGP Sports wishes luck to all the players.Give it all guys!!
              <br />
              <br />
              Date- 17 th March 2022
              <br />
              Venue- Jnan Ghosh Stadium
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            Interhall Volleyball Gymkhana Championship
          </h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <AppImage className={globalStyles.cardImg} src={spt11} alt="khokho" />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <br />
              <br />
              <br />
              Continuing with the power-packed sports action, now is the time to
              witness the vying on the Volleyball Court. Steel yourself as we
              are beginning with Interhall Volleyball Gymkhana Championship
              2022.
              <br />
              <br />
              Date -15th March 2022
              <br />
              Venue -TSG Volleyball courts.
              <br />
              The live scores of the Volleyball Match can be viewed on the
              official website of Technology Students&apos; Gymkhana.
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            Interhall Football Gymkhana Championship
          </h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <AppImage className={globalStyles.cardImg} src={spt12} alt="khokho" />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <br />
              <br />
              <br />
              As the pandemic is shredding way, the vivacious campus life is
              surfacing again and so is the excitement and fierce competitions
              of Inter Hall. And now is the time to battle this out on the
              football ground.
              <br />
              We invites you all to Inter Hall Football Gymkhana Championship
              2022.
              <br />
              Prepare your teams, practice with purpose and play with passion as
              there is no greater glory than the victory of your halls!!!
              <br />
              Date- 5th March 2022
              <br />
              Venue- TATA Steel Sports Complex
              <br />
              The live scores of the football match can be viewed on the
              official website of Technology Students Gymkhana <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Workshop on Power Lifting</h2>
        </center>

        <section>
          <center>
            <div className={globalStyles.imgContainer}>
              <AppImage src={spt13} alt="timeline" />
            </div>
          </center>

          <p className={globalStyles.centerCard}>
            Becoming better, stronger, and more powerful physically and mentally
            enhance your confidence and has become an indispensable part of a
            healthy body and mind. IIT KGP Sports invite all of you to the
            Powerlifting Workshop. Here is the opportunity for all the aspirers
            to experience the joy of strength.
            <br />
            The session will be guided by professional trainers and you can
            learn fundamental techniques of strength training.
            <br />
            Date-6th March 2022
            <br />
            Venue- Technology Students&apos; Gymkhana
            <br />
            Note that the workshop is open for both boys and girls.
            <br />
          </p>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            Interhall cricket Gymkhana Championship
          </h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <AppImage className={globalStyles.cardImg} src={spt14} alt="khokho" />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <br />
              &quot;A bat is not a toy, it is the weapon&quot;- Virat Kohli
              <br />
              Brace up people as we are commencing the Inter Hall Cricket
              Gymkhana Championship. This will be your pitch to score fours and
              sixes, showcase your skills, bowl out your competitions and make
              your halls the cricket champion.
              <br />
              Get ready to behold who bat, bowl, and field their way to the top
              of the table in this fast and exciting action.
              <br />
              <br />
              Date- 27th February 2022
              <br />
              Venue- Tata Sports Complex
              <br />
              The live scores of the cricket match can be viewed on the official
              website of Technology Students Gymkhana
              https://gymkhana.iitkgp.ac.in/
              <br />
              IIT KGP Sports wishes all the best to all the teams!
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Open IIT Chess Tournament</h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <AppImage className={globalStyles.cardImg} src={spt15} alt="khokho" />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <br />
              Brace up one and all, Technology Students&apos; Gymkhana, IIT
              Kharagpur, brings to you the Open IIT Chess Tournament on Sunday,
              27th February. All current students of IIT Kharagpur are eligible
              to participate in the tournament.
              <br />
              Battle it out on those 64 squares to become one of KGP&apos;s best, and
              also win some exciting prizes! Exceptional players will also be
              considered for selection into the Chess Club.
              <br />
              <br />
              Tournament details:
              <br />
              27th February, 2 PM
              <br />
              Format: Arena Tournament, Blitz | 3 min + 0 sec <br />
              Duration: 90 minutes
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Open IIT Kho Kho</h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <AppImage className={globalStyles.cardImg} src={khokho} alt="khokho" />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              Hola kgpians!! IIT Kgp Sports is here with the first-ever Women’s
              Open IIT Kho-Kho event. With palpitating thrills and fast-paced
              action, this is your chance to shine while displaying your
              stamina, skills, and strength. Brace yourself up to chase, defend,
              touch and run. Do participate to prove your mettle, show your
              passion, edge your skills, and experience ecstasy. Though we are
              inching towards normalcy as the effects of the pandemic wane, we
              encourage and ascertain safety for all of us.
              <br /> Details of the event are given in the document:
              <a
                className={globalStyles.btn}
                href="https://docs.google.com/document/d/1P2kUCIrFSivP2U2qbKlobJE-YOMqtJpUPOVBdU6yR6A/edit?fbclid=IwAR0fmDxmHQWkQSR7Pk1PmSraxgro6gHFg-ld4J37xqZeiX-7I34SGFyRTwQ"
              >
                Click here
              </a>
              <br />
              Date: 13 February 2022
              <br />
              Time: 5 PM
              <br />
              Venue: Tata Sports Complex
              <br />
              Register here:{" "}
              <a
                className={globalStyles.btn}
                href="https://forms.gle/QeKLeb9nCfdx9KqTA"
              >
                Click here
              </a>
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Sports&apos; Quiz</h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <AppImage
                className={globalStyles.cardImg}
                src={sportsquiz}
                alt="sports quiz"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              Sports is filled with facts, fantasies, and fun. If you have a
              knack for all sports information around the world and related to
              IIT Kgp, then get ready to put your knowledge to action. IIT KGP
              Sports challenge all the sports brainiacs to “come, quiz, and
              conquer “ some brainstorming questions. If you love sports and
              have an affinity for quizzing, do give this a try. Not to mention,
              you will be rewarded with exciting prizes worth fighting for. So,
              gear up with a team of 3 brainiacs and battle out for the best!!
              <br />
              Dates: <br />
              Round 1 - 20th January, Thursday <br />
              Round 2 - 22nd January, Saturday <br />
              Round 3 - 23rd January, Sunday <br />
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <br />
          <h1>Archieves</h1>
          <h2 className={globalStyles.head2}>
            Chess Club Freshers’ Tournament
          </h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <AppImage
                className={globalStyles.cardImg}
                src={img2}
                alt="Chess club event"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              After an amazing response to the Introductory Seminar, it is now
              time to move on to some chess action in the form of the Freshers’
              Tournament, 2021. Don&apos;t miss out on this opportunity since
              selections into the club will be partly done based on your
              performance in the tournament.
              <br /> The tournament is also open to 2nd-year students who wish
              to join the club. The top performers will also be awarded goodies
              and certificates, so give your ultimate best!
              <br />
              To participate in the tournament, follow the detailed steps given
              in the rulebook below. All rules and regulations related to the
              tournament are available in the same document. Freshers&apos;
              Tournament 2021
              <br />
              Participation Criteria: All Freshmen/Sophomores (Both UG and PG)
              <br />
              Date: Sunday, 19th Dec 2021, 2 PM.
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>The Pan IIT Cycling event</h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <AppImage
                className={globalStyles.cardImg}
                src={img1}
                alt="Cycling event"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              After an enthralling week filled with fortitude, grit and
              determination, the Pan IIT Cycling Main Event concluded as a
              spectacle of hard work and commitment.
              <br />
              All the IITs vied for delivering intense competition.The contest
              was ecstatically embraced by IIT KGP. We fiercely competed for a
              celebratory closure at the event. We value the exuberant
              participation from Kgpians.
              <br />
              Cheers to the top performers who put on stellar performances and
              made us proud. <br />
              Girls:
              <br />
              Dhanya Gelli - Rank 2<br />
              Sucheta Pradhan – Rank 20
              <br />
              Parthvi Gupta – Rank 42
              <br />
              Soumya Sharma – Rank 44
              <br />
              Meghna Nallamili- Rank 50
              <br />
              Boys:
              <br />
              Nikhil Mishra – Rank 15
              <br />
              Rajvardhan Singh Jadon – Rank 53
              <br />
              Utkarsh Gupta- Rank 58
              <br />
              Heartiest congratulations to all the participants.
            </p>
          </div>
        </section>
        <br />
        <br />
      </div>
    </Layout>
  );
}
