// @ts-nocheck
import { ApplyPluginsType } from '/Volumes/9/mine/code/react/umikuangjia/node_modules/@umijs/runtime';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": require('@/layouts/index.js').default,
    "routes": [
      {
        "path": "/404",
        "exact": true,
        "component": require('@/pages/404.js').default
      },
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
        "path": "/login",
        "exact": true,
        "component": require('@/pages/login.js').default
      },
      {
        "path": "/users",
        "routes": [
          {
            "path": "/users/$id",
            "exact": true,
            "component": require('@/pages/users/$id.js').default
          }
        ],
        "component": require('@/pages/users/_layout.js').default
      }
    ]
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
