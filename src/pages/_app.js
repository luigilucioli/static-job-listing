import { createEmotionSsrAdvancedApproach } from "tss-react/next/pagesDir";
import FakeLoader from "@/components/FakeLoader";
import '@/styles/global.css'

const {
  augmentDocumentWithEmotionCache,
  withAppEmotionCache
} = createEmotionSsrAdvancedApproach({ key: "css" });

export { augmentDocumentWithEmotionCache };

export default withAppEmotionCache(
  function App({ Component, pageProps }) {
    return (
    <>
      <Component {...pageProps} />
      <FakeLoader />
    </>
    )
  }
)