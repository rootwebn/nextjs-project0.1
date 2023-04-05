import s from "@/styles/Home.module.scss";
import { josefSans } from "./_app";
import section1Pic from "../../public/img/min.png";
import Image from "next/image";
import Link from "next/link";
import {
  section1Data,
  section2Data,
  section3Data,
  section4Data1,
  section4Data3,
  section5Data,
} from "../data";

const Home = () => {
  const classs5 = s.formSubmit + " " + josefSans.className;
  const classs1 = s.btnDesc + " " + josefSans.className;

  return (
    <main className={s.mainContainer}>
      <section className={s.section1}>
        <article className={s.containerDesc}>
          <article className={s.desc}>
            <h1 className={josefSans.className}>Hello, I&apos;am </h1>
            <strong className={josefSans.className}>Kevin Smith</strong>
          </article>
          <button className={classs1}>Get in touch</button>
        </article>
        <article className={s.section1ImageContainer}>
          <Image
            className={s.imageSection1}
            src={section1Pic}
            width={"550"}
            height={"680"}
            alt={"img"}
          />
        </article>
        <article className={s.totalStatsLayout}>
          {section1Data.map((item) => (
            <article
              className={s.totalStatsBlock}
              key={item.id}
              style={{
                gridColumn: item.gridPosition,
              }}
            >
              <article className={s.totalStatsDesc}>
                <strong className={josefSans.className}>
                  {item.numHeader}
                </strong>
                <h1 className={josefSans.className}>{item.header}</h1>
                <p className={josefSans.className}>{item.desc}</p>
              </article>
            </article>
          ))}
        </article>
      </section>
      <section className={s.section2}>
        <p className={josefSans.className}>MY STRENGHTS</p>
        <article className={s.strenghtsLayout}>
          {section2Data.map((item) => (
            <article key={item.id} className={s.typeBlock}>
              <h1 className={josefSans.className}>{item.h5Data}</h1>
              <p className={josefSans.className}>{item.pData}</p>
            </article>
          ))}
        </article>
      </section>
      <section className={s.section3}>
        <article className={s.blockAboutMe}>
          <p className={josefSans.className}>A BIT ABOUT ME</p>
          <h5 className={josefSans.className}>Who Am I?</h5>
        </article>
        <article className={s.descAboutMe}>
          <p className={josefSans.className}>
            Hi I&apos;m Kevin Smith. Click here to add your own text and edit me. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
            ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.
          </p>
        </article>
        <article className={s.itemsActivity}>
          {section3Data.map((item) => (
            <article key={item.id} className={s.itemActivity}>
              <Image src={item.imgPath} alt={""} width={64} height={64} />
              <p className={josefSans.className}>{item.hData}</p>
              <Link href={'/'} className={josefSans.className}>
                MORE
              </Link>
            </article>
          ))}
        </article>
        <article className={s.additionBlock}>
          <h2 className={josefSans.className}>
            I am happy to know you that 300+ projects done sucessfully!
          </h2>
          <button className={s.additionBtn}>Learn More</button>
        </article>
      </section>
      <section className={s.section4}>
        <h2 className={josefSans.className}>EDUCATION AND AWARDS</h2>
        <article className={s.achivementsLayout}>
          {section4Data1.map((item) => (
            <article key={item.id} className={s.achivementItem}>
              <h1 className={josefSans.className}>{item.hData}</h1>
              <p className={josefSans.className}>{item.pData}</p>
            </article>
          ))}
        </article>

        <article className={s.clientsFeedbackBlock}>
          <h1 className={josefSans.className}>What Clients Say</h1>
           <article className={s.clientsFeedbackItems}>
            {section4Data3.map((item) => (
              <article className={s.clientsFeedbackItem} key={item.id}>
                <Image src={item.imgPath1} alt="" height={100} width={100} />
                <p className={josefSans.className}>{item.pData1}</p>
                <Image
                  className={s.itemImgHuman}
                  src={item.imgPath2}
                  alt=""
                  height={100}
                  width={100}
                />
                <h1 className={josefSans.className}>{item.hData}</h1>
                <p className={josefSans.className}>{item.pData2}</p>
              </article>
            ))}
          </article>
        </article>
      </section>
      <section className={s.section5}>
        <h1 className={josefSans.className}>My Works</h1>
        <article className={s.projectsItems}>
          {section5Data.map((item) => (
            <article
              key={item.id}
              className={s.projectItem}
              style={{ backgroundImage: item.imgPath }}
            >
              <article className={s.containerDesc}>
                <p className={josefSans.className}>{item.pData}</p>
                <h1 className={josefSans.className}>{item.hData}</h1>
              </article>
            </article>
          ))}
        </article>
      </section>
      <section className={s.section6}>
        <article className={s.formContainer}>
          <article className={s.formDesc}>
            <p className={josefSans.className}>
              Do you have any Project? Lets Talk!
            </p>
            <p className={josefSans.className}>Phone</p>
            <p className={josefSans.className}>+10 79 742-4283</p>
            <p className={josefSans.className}>Drop your Message</p>
            <p className={josefSans.className}>kevinsmith@gmail.com</p>
          </article>
          <article className={s.formRequestContainer}>
            <form className={s.formLayout} action="otherPage" method="post">
              <ul className={s.formList}>
                <li className={s.formElement}>
                  <input
                    className={josefSans.className}
                    placeholder="Enter your name"
                  />
                </li>
                <li className={s.formElement}>
                  <input
                    className={josefSans.className}
                    placeholder="Enter your email"
                  />
                </li>
                <li className={s.formElement}>
                  <textarea
                    className={josefSans.className}
                    placeholder="Enter your message"
                  ></textarea>
                </li>
                <button type="submit" className={classs5}>
                  submit
                </button>
              </ul>
            </form>
          </article>
        </article>
      </section>
    </main>
  );
};

export default Home;
