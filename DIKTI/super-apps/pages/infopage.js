import Head from "next/head";
import LayoutInfo from "../src/components/Layout/layoutinfo";
import DetailInfo from "../src/components/News/detailinfo";

function InfoPage() {
  return (
    <div className="bg-blue-100">
      <LayoutInfo>
        <Head>
          <title>Super Apps DIKTI</title>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="logo-kemendikbud.png"
          />
        </Head>
        <DetailInfo/>
      </LayoutInfo>
    </div>
  );
}

export default InfoPage;