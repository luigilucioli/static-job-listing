import '../styles/global.css'
import { createEmotionSsrAdvancedApproach } from "tss-react/next/pagesDir";

const {
  augmentDocumentWithEmotionCache,
  withAppEmotionCache
} = createEmotionSsrAdvancedApproach({ key: "css" });

export { augmentDocumentWithEmotionCache };

export default withAppEmotionCache(
  function App({ Component, pageProps }) {
    return <Component {...pageProps} />
  }
)