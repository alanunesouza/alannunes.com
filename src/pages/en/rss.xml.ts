import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog', (p) => p.data.lang === 'en');
  const sortedPosts = posts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return rss({
    title: 'Alan Nunes | Blog (EN)',
    description:
      'Articles on frontend engineering, artificial intelligence, software architecture, and modern web development.',
    site: context.site?.toString() ?? 'https://alannunes.com',
    items: sortedPosts.map((post) => {
      const slug = post.id.replace(/^en\//, '');
      return {
        title: post.data.title,
        pubDate: new Date(post.data.date),
        description: post.data.description ?? `Article on ${post.data.tags.join(', ')} by ${post.data.author}`,
        link: `/en/blog/${slug}/`,
      };
    }),
    customData: `<language>en-US</language>`,
  });
}
