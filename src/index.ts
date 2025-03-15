import { withInstall } from "./utils/install";

import coverImageAdjuster from "./components/CoverImageAdjuster/index.vue";

export const CoverImageAdjuster = withInstall(coverImageAdjuster);
export default CoverImageAdjuster;

export * from "./components/CoverImageAdjuster/index.vue";