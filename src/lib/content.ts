import { getCollection, getEntry } from 'astro:content';

// Where project cards go inside a Markdown page.
export const CARDS_MARKER = '<!-- project-cards -->';

export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

// Returns a page's frontmatter and its rendered HTML, split around the cards marker.
export async function getPage(id: string) {
  const page = await getEntry('pages', id);
  if (!page) throw new Error(`Missing content file: src/content/${id}.md`);
  const html = page.rendered?.html ?? '';
  const [before, after = ''] = html.split(CARDS_MARKER);
  return { data: page.data, before, after, hasCards: html.includes(CARDS_MARKER) };
}
