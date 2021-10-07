import Head from "next/head";
import LayoutNews from "../src/components/Layout/layoutnews";
import DetailNews from "../src/components/News/detailnews";

function NewsPage() {
  return (
    <div className="bg-blue-100">
      <LayoutNews>
        <Head>
          <title>Super Apps DIKTI</title>
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="logo-kemendikbud.png"
          />
        </Head>
        <DetailNews/>
      </LayoutNews>
    </div>
  );
}

export default NewsPage;
