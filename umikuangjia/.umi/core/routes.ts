// @ts-nocheck
import { ApplyPluginsType } from '/usr/local/lib/node_modules/umi/node_modules/@umijs/runtime';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/about",
    "exact": true,
    "component": require('@/pages/about.js').default
  },
  {
    "path": "/",
    "exact": true,
    "component": require('@/pages/index.js').default
  },
  {
    "path": "/users/$id",
    "exact": true,
    "component": require('@/pages/users/$id.js').default
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
