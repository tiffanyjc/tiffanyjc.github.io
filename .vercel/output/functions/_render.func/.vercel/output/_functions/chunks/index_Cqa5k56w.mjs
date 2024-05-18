export { renderers } from '../renderers.mjs';

const page = () => import('./pages/index_orcBeRCB.mjs').then(n => n.a);

export { page };
