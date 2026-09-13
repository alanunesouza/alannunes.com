import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());

  return rss({
    title: 'Alan Nunes | Blog',
    description: 'Artigos sobre desenvolvimento front-end, inteligência artificial, engenharia de software e tecnologia.',
    site: context.site?.toString() ?? 'https://alannunes.com',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: new Date(post.data.date),
      description: post.data.description ?? `Artigo sobre ${post.data.tags.join(', ')} por ${post.data.author}`,
      link: `/blog/${post.id}/`,
    })),
    customData: `<language>pt-BR</language>`,
  });
}
