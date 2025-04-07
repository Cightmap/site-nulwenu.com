import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  site: 'https://nulwenu.com/',
  integrations: [mdx(), sitemap()],
  markdown: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [['rehype-raw', { allowDangerousHtml: true }]]
  }
});

// astro.config.mjs
export default {
  trailingSlash: 'always', // Ensures all generated URLs have trailing slashes
}; 

