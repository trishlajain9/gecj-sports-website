import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'council',
    renderMode: RenderMode.Server
  },
  {
    path: 'timeline',
    renderMode: RenderMode.Client
  },
  {
    path: 'home',
    renderMode: RenderMode.Client
  },
  {
    path: 'gallery',
    renderMode: RenderMode.Client
  },
  {
    path: 'contact',
    renderMode: RenderMode.Client
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
