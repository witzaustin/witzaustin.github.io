import { defineConfig } from 'astro/config';
import remarkBreaks from 'remark-breaks';
import rehypeTodo from './src/plugins/rehype-todo.mjs';

export default defineConfig({
  // Change this if you add a custom domain (see README).
  site: 'https://witzaustin.github.io',
  markdown: {
    // A single line break in Markdown becomes a line break on the page.
    remarkPlugins: [remarkBreaks],
    // Highlights [TODO: ...] notes so they're easy to spot.
    rehypePlugins: [rehypeTodo],
  },
});
