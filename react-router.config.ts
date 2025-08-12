import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,

  // async function for dependencies like a CMS
  async prerender({ getStaticPaths }) {
    let posts = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    return ["/", "/blog", ...posts.map((post) => `/blog/${post}`)];
  },
} satisfies Config;
