import Layout from "./../components/Layout/Layout";
import { IndexWrapper } from "../styles/IndexWrapper";
// import { Widget } from "react-chat-widget";
// import "react-chat-widget/lib/styles.css";

export default function Home() {
  return (
    <Layout title={"Home"}>
      <IndexWrapper>
        <div className="container">
          <p>
            <span>LEARN</span> <br /> TO SIGN
          </p>
        </div>
        <div className="info">
          <div className="info-group">
            <img className="info-img" src="./ok.gif" />
            <div className="desc">
              When infants are identified with hearing loss, the primary concern
              is often their language development and the developmental domains
              that rely on timely language acquisition, such as cognition and
              socioemotional development. This concern can quickly become a
              developmental emergency if deaf children are unable to access the
              spoken language within their home and their non-deaf family
              members do not know a signed language. Typical medical and
              educational interventions are to address the hearing loss via
              technology, such as hearing aids and cochlear implants, often
              without incorporating the learning of a signed language
            </div>
          </div>
          <div className="info-group column-reverse">
            <div className="desc text-right">
              Language deprivation is the persistent lack of unhindered access
              to a natural language during the critical period of language
              acquisition. This period of approximately the first five years of
              life is a time-limited window of brain development for
              establishing first-language fluency.10 The research evidence
              strongly suggests that language deprivation, rather than strictly
              hearing loss, is the underlying cause of poor language,
              educational and health outcomes in the deaf population, and is
              traceable to a lack of a signed language exposure for deaf
              children in their early development
            </div>
            <img className="info-img" src="./gang.gif" />
          </div>

          <div className="center-info text-center">
            Signed languages are natural human languages existing across
            numerous societies around the world. As with spoken languages,
            signed languages display phonetic, phonemic, syllabic,
            morphological, syntactic, discourse, and pragmatic levels of
            organization as expected of natural languages.1 While often named
            using national terms (such as American Sign Language, Thai Sign
            Language, among many others), signed languages are distinct from
            spoken languages and there can be several signed languages in one
            country
          </div>
        </div>
        {/* <Widget /> */}
      </IndexWrapper>
    </Layout>
  );
}
