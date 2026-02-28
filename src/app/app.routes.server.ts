import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'council',
    renderMode: RenderMode.Server
  },
  {
    path: 'admin',
    renderMode: RenderMode.Server
  },
  {
    path: 'admin/council',
    renderMode: RenderMode.Server
  },
  {
    path: 'sports/:name',
    renderMode: RenderMode.Prerender,
    getPrerenderParams: async () => {
      // Pre-render known sports to satisfy build
      const names = ['basketball', 'football', 'cricket', 'tennis', 'badminton', 'volleyball'];
      return names.map(name => ({ name }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
