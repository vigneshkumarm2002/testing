import { createDirectus, staticToken, rest } from '@directus/sdk';

const directus = createDirectus("https://cms.vegastack.com").with(staticToken("pu9gNVamx8bKkai_373F1XJDhVwb3DG3")).with(rest());

export default directus;