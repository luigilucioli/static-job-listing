import { GlobalStyles } from "tss-react";
import { createEmotionSsrAdvancedApproach } from "tss-react/next/pagesDir";
import FakeLoader from "@/components/FakeLoader";
import global from '@/styles/global'

const { augmentDocumentWithEmotionCache, withAppEmotionCache } = createEmotionSsrAdvancedApproach({ key: "css" });

export { augmentDocumentWithEmotionCache };

export default withAppEmotionCache(
  function App({ Component, pageProps }) {
    return (
    <>
      <GlobalStyles styles={global} />
      <Component {...pageProps} />
      <FakeLoader />
    </>
    )
  }
)