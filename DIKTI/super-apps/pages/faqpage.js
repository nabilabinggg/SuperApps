import Head from "next/head";
import FaqContent from "../src/components/Content/faqcontent";
import Layoutfaq from "../src/components/Layout/layoutfaq";
function Faq() {
  return (
    <div className="bg-blue-100">
      <Layoutfaq>
        <Head>
          <title>Super Apps DIKTI</title>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="logo-kemendikbud.png"
          />
        </Head>
        <FaqContent/>
      </Layoutfaq>
    </div>
  );
}

export default Faq;
