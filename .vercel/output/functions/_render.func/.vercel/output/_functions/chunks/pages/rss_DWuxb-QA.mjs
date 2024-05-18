import rss from '@astrojs/rss';
import { g as getAllPosts, s as siteConfig } from './404_6CyPzAJx.mjs';
import 'clsx';

const GET = async () => {
  const posts = await getAllPosts();
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: "https://www.tiffanyc.cc",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/blog/${post.slug}`
    }))
  });
};

export { GET };
