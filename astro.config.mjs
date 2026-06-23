import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  i18n: {
    defaultLocale: 'ja',
    locales: ['ja', 'en', 'zh-TW'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
