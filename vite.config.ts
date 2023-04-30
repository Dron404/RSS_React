import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import ssr from 'vite-plugin-ssr/plugin';
import istanbul from 'vite-plugin-istanbul';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'babel-plugin-styled-components',
            {
              displayName: true,
              fileName: false,
            },
          ],
        ],
      },
    }),
    svgr(),
    ssr({
      prerender: true,
      includeAssetsImportedByServer: true,
    }),

    istanbul({
      cypress: true,
      requireEnv: false,
    }),

    dts({
      insertTypesEntry: true,
    }),
  ],
  ssr: {
    noExternal: ['styled-components', '@emotion/*'],
  },
  server: {
    port: 8080,
  },
});
