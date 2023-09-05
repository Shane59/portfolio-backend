import fetch from 'node-fetch';
import * as prismic from '@prismicio/client';

const repoName = 'shinya-portofolio';
const accessToken = 'MC5aT2ZFa1JFQUFDWUF0SVRi.77-9Y--_ve-_ve-_vVFG77-977-9Tu-_ve-_vRrvv71FOQovcu-_vSF577-977-9bk57U2rvv73vv70_';

const routes = [
  {
    type: 'personal-project',
    path: '/:uid',
  },
]

export const client = prismic.createClient(repoName, { 
  fetch, 
  accessToken,
  routes,
})