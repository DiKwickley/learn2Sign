import Layout from "../components/Layout/Layout";
import { TeamWrapper } from "../styles/TeamWrapper";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

export default function About() {
  return (
    <Layout title={"Team"}>
      <TeamWrapper>
        <div className="main">
          <div className="heading">Team</div>
          <div className="team-group">
            <div className="team-member">
              <img
                className="member-image"
                src="https://avatars1.githubusercontent.com/u/31622972"
                alt="aniket"
              />
              <div className="member-name">Aniket</div>
              <div className="socials">
                <a href="https://github.com/DiKwickley?">
                  <GitHubIcon />
                </a>
              </div>
            </div>
            <div className="team-member">
              <img
                className="member-image"
                src="https://avatars3.githubusercontent.com/u/60618742?s=400"
                alt="arjun"
              />
              <div className="member-name">Arjun</div>
              <div className="socials">
                <a href="https://github.com/arjunaditya">
                  <GitHubIcon />
                </a>
              </div>
            </div>
            <div className="team-member">
              <img
                className="member-image"
                src="https://avatars1.githubusercontent.com/u/50591491"
                alt="dev"
              />
              <div className="member-name">Dev</div>
              <div className="socials">
                <a href="https://github.com/cryptus-neoxys">
                  <GitHubIcon />
                </a>
              </div>
            </div>
            <div className="team-member">
              <img
                className="member-image"
                src="https://avatars1.githubusercontent.com/u/59786927 "
                alt="harsh"
              />
              <div className="member-name">Harsh</div>
              <div className="socials">
                <a href="https://github.com/harsh972">
                  <GitHubIcon />
                </a>
              </div>
            </div>
            <div className="team-member">
              <img
                className="member-image"
                src="https://avatars2.githubusercontent.com/u/52544819"
                alt="avinash"
              />
              <div className="member-name">Avinash</div>
              <div className="socials">
                <a href="https://github.com/avinashupadhya99">
                  <GitHubIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </TeamWrapper>
    </Layout>
  );
}
