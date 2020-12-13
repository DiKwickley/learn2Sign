import Layout from "../components/Layout/Layout";
import { AboutWrapper } from "../styles/AboutWrapper";

export default function About() {
  return (
    <Layout title={"About"}>
      <AboutWrapper>
        <div className="main">
          <div className="heading">About</div>
          <div className="about">
            <img className="gif" src="./about.gif" alt="help" />
            <div className="info">
              Being able to recognize sign language is an interesting computer
              vision problem while simultaneously being extremely useful for
              deaf people to interact with people who don’t know how to
              understand American Sign Language (ASL).
            </div>
            <div className="info">
              We created this application to help the deaf people so that they
              can express themselves and people can communicate with them
              better, this application uses a image classifier from teachable
              machines, which is a Google API. It detect user's hand gestures
              and show the corresponding english alphabets (basically it
              converts ASL to english language).
            </div>
          </div>
        </div>
      </AboutWrapper>
    </Layout>
  );
}
