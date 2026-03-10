import React from "react";
import Layout from "../../../components/Layouts/Layout";
import Styles from "../styles/tech.module.css";
import globalStyles from "../styles/committees.module.css";
// import ContactStyles from "../../../styles/views/contacts.module.css";
// import ContactCard from "../../../components/ContactCard";
import img1 from "./images/welfare/mentalwork.jpg";
import img2 from "./images/welfare/anxious.jpg";
import projects from "./images/welfare/projects.jpg";
import english from "./images/welfare/english-mentor.jpg";
import induction from "./images/welfare/ug-induction.jpg";
import sw2 from "./images/welfare/sw2.png";
import sw3 from "./images/welfare/sw3.jpg";
import sw4 from "./images/welfare/sw4.png";
import sw5 from "./images/welfare/sw5.jpg";
import sw6 from "./images/welfare/sw6.jpg";
import sw7 from "./images/welfare/sw7.jpg";
import sw8 from "./images/welfare/sw8.jpg";

export default function Welfare() {
  // const techComTeam = [
  //   {
  //     RollNo: "19EE10016",
  //     Name: "Bhosale Shivam Pravin",
  //     img: "19EE10016.png",
  //     Category: "General Secretary",
  //     Post: "GSec - Students' Welfare",
  //     Contact: 9890359987,
  //     Email: "bhosaleshivam3333@gmail.com",
  //     "Institue ids": "bhosaleshivam3333@gmail.com",
  //     "Institute mail ids": "gsectsg-welfare@hijli.iitkgp.ac.in",
  //   },
  //   {
  //     RollNo: "19AE10014",
  //     Name: "Jeripothula Sindhu",
  //     Post: "GSec - Students' Welfare",
  //     Category: "General Secretary",
  //     img: "19AE10014.png",
  //     Contact: 9502834599,
  //     Email: "sindhujeripothula@gmail.com",
  //     "Institue ids": "sindhujeripothula@gmail.com",
  //     "Institute mail ids": "",
  //   },
  //   {
  //     id: 32,
  //     RollNo: "20MI10004",
  //     Name: "Amgoth Jithender Kumar Naik",
  //     Post: "Secretary Academic Help",
  //     Email: "jithendernaik1729@gmail.com",
  //     Phone: 9154015089,
  //     Hall: "LLR",
  //   },
  //   {
  //     id: 33,
  //     RollNo: "20EX20001",
  //     Name: "Aaditri Vaibhav",
  //     Post: "Secretary Community And Crisis",
  //     Email: "aaditri.vaibhav@gmail.com",
  //     Phone: 8789617065,
  //     Hall: "SN/IG",
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
              Students' Welfare Committee
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
              The moto of Technology Students' Gymkhana is YOGAH KARMASU
              KAUSALAM which in English means "Perfection in action is Yoga".
              Our goal is to bring overall development in IITians through
              cultivating and nurturing their extra-curricular talents.
            </p>
          </div>
        </section>

        {/* other events */}

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Pride March</h2>
        </center>
        <section>
          <center>
            <div className={globalStyles.imgContainer}>
              <img src={sw8} alt="pride_march" />
            </div>
          </center>
          <div className={globalStyles.centerCard}>
            <p>
              The fifth edition of the annual Pride March was held offline after
              two years of online celebration.
              <br />
              <br />
              Date: 7 PM on Tuesday, September 6, 2022
              <br />
              Starting point: Technology Students' Gymkhana
              <br />
              Route: 2.2
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            Talk with Dr Bittu Kaveri Rajaraman
            <br />
            about
            <br />
            Impact of the Transgender Persons on Access to Resources
          </h2>
        </center>
        <section>
          <center>
            <div className={globalStyles.imgContainer}>
              <img src={sw7} alt="talk_with_dr_Bittu" />
            </div>
          </center>
          <div className={globalStyles.centerCard}>
            <p>
              An online talk was organised with Dr Bittu Kaveri Rajaraman who is
              HOD of Psychology at Ashoka University. The topic of discussion
              was ‘Impact of the Transgender Persons (Protection of Rights Act
              2019) on Access to Resources’.
              <br />
              <br />
              Time and Venue: 7 PM on September 4, 2022, on Google Meet
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Storytelling Session</h2>
        </center>
        <section>
          <center>
            <div className={globalStyles.imgContainer}>
              <img src={sw6} alt="storytelling_session" />
            </div>
          </center>
          <div className={globalStyles.centerCard}>
            <p>
              An online storytelling session was conducted with Rituparna.
              <br />
              <br />
              Time and Venue: 7 PM on September 2, 2022, on Google Meet.
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>
            Words of Pride: A Queer-Themed Open Mic By Ambar in association with
            TLS
          </h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <img
              className={globalStyles.cardImg3}
              src={sw5}
              alt="Words_Of_Pride"
              // style={{borderRadius: '1.25rem', objectFit: 'contain', width: '40vw', height:'80vh',}}
            />
          </div>
          <div className={globalStyles.rightCard}>
            <p>
              Words of Pride is a celebration of queer literature and a
              celebration of how far the queer movement has come in India in
              terms of societal acceptance and recognition of rights, and to
              also acknowledge that we have a long way to go in eliminating
              bullying, harassment, isolation, conversion therapy, and other
              such activities directed at the queer community.
              <br />
              <br />
              Time and Venue: V3 Classroom on September 1, 2022 from 8 PM.
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Anubhuti by Nirmaan and IWG</h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <img
              className={globalStyles.cardImg3}
              src={sw3}
              alt="Anubhuti_Poster"
              // style={{borderRadius: '1.25rem', objectFit: 'contain', width: '40vw', height:'80vh',}}
            />
          </div>
          <div className={globalStyles.rightCard}>
            <p>
              <br />
              Are you someone who believes there is more to your life than
              simply aiming for a better lifestyle for you and your family? Do
              you want to understand and solve the burning social problems
              around us? Are you someone who is trying to figure out the true
              purpose of your life? Or someone who is trying to find peace in
              your life? If this is the case, you have come to the right place.{" "}
              <br />
              <br /> IWG is organizing a webinar ANUBHUTI with Mr. 𝗔𝗺𝗿𝘂𝘁 Bang,
              𝗣𝗿𝗼𝗴𝗿𝗮𝗺 Director of NIRMAN. NIRMAN is a social service
              organization that believes that only by understanding and solving
              societal problems can a person understand the world outside and
              can find peace within. Mr. Amrut is himself an extraordinary
              individual. He is also an RTI activist, and under his leadership,
              NIRMAN reached several new heights. <br />
              In this webinar, we will interact with Mr. Amrut to understand why
              this generation of youth should participate in social service and
              how it helps us in our personal growth and finding peace and
              purpose in our life. <br /> <br />
              Time and Date: 5:00 PM, 20th August 2022.
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Khat</h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <img
              className={globalStyles.cardImg3}
              src={sw4}
              alt="Khat_Poster"
              // style={{borderRadius: '1.25rem', objectFit: 'contain', width: '40vw', height:'80vh',}}
            />
          </div>
          <div className={globalStyles.rightCard}>
            <p>
              <br />
              "Every new friend is a new adventure...the start of more
              memories." <br />
              <br />
              Texting is the new normal; it's been Online for a couple of years.
              Let's go back in time, recalling those old communication means.
              Let's grab some Envelopes and send end-to-end encrypted messages
              to your lovely friends.
              <br />
              <br /> This FRIENDSHIP DAY, INSTITUTE WELLNESS GROUP is frenzied
              to announce KHAT, pin up your calendars, KGPIANS. We invite you to
              come and open up and jot down your feelings and messages for your
              special friends. <br />
              <br />
              Date: 4th and 5th August 2022. <br />
              <br />
              Venue: Technology Students' Gymkhana.
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Jamming Session</h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <img
              className={globalStyles.cardImg}
              src={sw2}
              alt="Music result"
            />
          </div>
          <div className={globalStyles.rightCard}>
            <p>
              <br />
              Greetings, fellow kgpians!
              <br />
              <br />
              To start off the last week of SAMYOG: <br />
              Connect IIT Kharagpur on an energetic note, theStudents’ Welfare
              Committee, Technology Students’ Gymkhana brings to you aJAMMING
              SESSION aimed at giving all the talented musicians out there an
              opportunity to express themselves.
              <br />
              <br />
              The stage is open to anyone whose talent is looking for an
              audience, andfree tickets are available for anyone who is ready to
              hype the performers up! The session will take place this Monday,{" "}
              <br />
              7th of February, starting at 6 PM.
              <br />
              <br />
              The songs that have been requested will be updated in this sheet
              <br />
              https://tinyurl.com/song-requests-sheet accessible to everyone.
              The performers can go throughit and the ones who perform one of
              the requested songs will be given priority over other performers.
              <br />
              <br />
              Looking forward to a memorable evening filled with music and joy!
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>English Mentorship Program</h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <img
                className={globalStyles.cardImg}
                src={english}
                alt="english mentorship"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <br />
              <br />
              With language, you are at home anywhere
              <br /> - Edward De Waal
              <br />
              <br />
              English is the prevailing language of all time. Having a good
              command of language boosts one's faith and self-esteem. Here is an
              opportunity for all those who want to surpass the standards of
              English. English Mentorship Programme in collaboration with ACSESS
              (Advanced Communication Skills for Engineering and Science
              Students), a platform Sponsored by Dr Ranbir Sinha, an Alumni of
              IIT KGP for the welfare of the KGP community, with certification
              after completion of the course. So hurry up KGPians Do Register
              before "10th January 2022, 11:59 PM".
              <br />
              Registration Form:-
              <a
                className={globalStyles.btn}
                href="https://forms.gle/4j92tXSdGT8Lt4Cv6"
              >
                Click here
              </a>
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Call for Projects</h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <br />
              <img
                className={globalStyles.cardImg}
                src={projects}
                alt="projects"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              There is no greater joy nor greater reward than to make a
              fundamental difference in someone’s life.
              <br /> – Mary Rose McGeady
              <br />
              Upholding the motto and values of selfless service, Student’s
              Welfare Committee presents a noble initiative wherein NSS and
              other interested students will volunteer to work with NGOs on
              their varied projects for social welfare.
              <br />
              Through this we intent to emphasize the spirit of “ Not me But
              you" while providing a platform for the students and NGOs to
              collaborate for social growth, through a tremendously fulfilling
              and rewarding experience. <br />
              We invite all the NGOs with their social projects to partner with
              us in this incredible opportunity to bring about a social change.
              <br />
              Link to submit Project Details:
              <a
                className={globalStyles.btn}
                href="https://forms.gle/71axBULAaZ9DtiKMA"
              >
                Click here
              </a>
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <br />
          <h1>Archieves</h1>
        </center>

        <center>
          <h2 className={globalStyles.head2}>Mental Wellness Workshop</h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <img
                className={globalStyles.cardImg}
                src={img2}
                alt="Have you felt anxious"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <br />
              <br />
              Hello all,
              <br />
              “Anything that’s human is mentionable, and anything that is
              mentionable can be more manageable. When we can talk about our
              feelings, they become less overwhelming, less upsetting, and less
              scary.” <br />— Fred Rogers
              <br />
              While the stigma around mental health issues in and of itself is a
              huge obstacle, the fear of not being understood makes it very
              difficult for us to open up about our struggles. With the aim of
              giving the students of our institution an opportunity to overcome
              these hurdles, the Students’ Welfare Committee, Technology
              Students’ Gymkhana would like to inform you that IIT Kharagpur has
              partnered with GOOD LIVES- a well-known mental health service
              providing platform. In the spirit of the same, a “Mental Wellness
              Workshop - For IITians, By IITians” has been planned.
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>UG Induction Program 2021</h2>
        </center>
        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <img
                className={globalStyles.cardImg}
                src={induction}
                alt="Induction"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <br />
              <br />
              Induction Program of undergraduate students, 2021 had been
              conducted from 26th november to 30th november. Find the details
              below.
              <br />
              <br />
              26th November:
              <a
                className={globalStyles.btn}
                href=" https://youtu.be/l-7gLRQlxyQ"
              >
                Forenoon
              </a>
              &
              <a
                className={globalStyles.btn}
                href="https://youtu.be/hp6K-bz9WRI"
              >
                Afternoon
              </a>
              <br />
              <br />
              27th November:
              <a
                className={globalStyles.btn}
                href=" https://youtu.be/0h8_JwlgTtk"
              >
                Forenoon
              </a>
              &
              <a
                className={globalStyles.btn}
                href="https://youtu.be/c328-X9G1l0"
              >
                Afternoon
              </a>
              <br />
              <br />
              28th November:
              <a
                className={globalStyles.btn}
                href=" https://youtu.be/H1sw7gEcLv4"
              >
                Forenoon
              </a>
              &
              <a
                className={globalStyles.btn}
                href="https://youtu.be/Fj9Zy-luDDM"
              >
                Afternoon
              </a>
              <br />
              <br />
              29th November:
              <a
                className={globalStyles.btn}
                href="https://youtu.be/GrAJ1hofC94"
              >
                Forenoon
              </a>
              &
              <a
                className={globalStyles.btn}
                href="https://youtu.be/9GCP6_RGMsw"
              >
                Afternoon
              </a>
              <br />
              <br />
              30th November:
              <a
                className={globalStyles.btn}
                href=" https://youtu.be/GrAJ1hofC94"
              >
                Forenoon
              </a>
              &
              <a
                className={globalStyles.btn}
                href="https://youtu.be/aUIjpWC1qEY"
              >
                Afternoon
              </a>
              <br />
              <br />
              <a
                className={globalStyles.btn}
                href="https://gymkhana.iitkgp.ac.in/data/media/files/handbook.pdf"
              >
                Click here to download Induction program handbook
              </a>
              <br />
            </p>
          </div>
        </section>

        <center>
          <hr className={globalStyles.hrLine} />
          <h2 className={globalStyles.head2}>Mental Wellness Workshop</h2>
        </center>

        <section className={globalStyles.cmtCard1}>
          <div className={globalStyles.leftCard}>
            <center>
              <img
                className={globalStyles.cardImg}
                src={img1}
                alt="Mental welness workshop"
              />
            </center>
          </div>

          <div className={globalStyles.rightCard}>
            <p>
              <br />
              <br />
              "You don't have to control your thoughts. You just have to stop
              letting them control you."
              <br /> ~ Dan Millman
              <br />
              The online semester has affected our emotions, relationships and
              mental wellbeing in some or another way. However, the situation is
              coming to normal, and students are being called back to campus.
              Also, the online semester increased the need for guidance to
              confirm the mental well-being of the student.
              <br />
              GoodLives in association with IIT Kharagpur will be conducting a
              series of Mental Health awareness workshops. The workshops will be
              targeting multiple topics of college student's life and their
              families.
            </p>
          </div>
        </section>
        <br />
        <br />
        <br />
      </div>
    </Layout>
  );
}
