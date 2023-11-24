import { createDirectus, rest } from '@directus/sdk';

const directus = createDirectus('https://cms.vegastack.com').with(rest());

export default directus;