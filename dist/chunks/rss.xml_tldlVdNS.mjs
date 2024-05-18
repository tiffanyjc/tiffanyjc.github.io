import rss from '@astrojs/rss';
import { g as getCollection, s as siteConfig } from './_astro_content_B8Bdc9UA.mjs';
import 'clsx';

async function getAllPosts() {
  return await getCollection("post", ({ data }) => {
    return data.draft !== true ;
  });
}

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
