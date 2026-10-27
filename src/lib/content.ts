import { getCollection, getEntry } from 'astro:content';

export async function getProjects() {
  const projects = await getCollection('projects');
  return projects.sort((a, b) => a.data.order - b.data.order);
}

// Returns a page's frontmatter and its rendered HTML.
export async function getPage(id: string) {
  const page = await getEntry('pages', id);
  if (!page) throw new Error(`Missing content file: src/content/${id}.md`);
  return { data: page.data, html: page.rendered?.html ?? '' };
}
