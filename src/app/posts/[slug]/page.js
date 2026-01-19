import logger from "@/logger";

async function GetPost({ slug }) {
  try {
    const response = await fetch(`http://localhost:3042/posts?slug=${slug}`);
    const data = await response.json();
    if (!response || !response.ok) throw Error("slug not found or connection error");
    if (data.lenght === 0) throw Error("nothing found");
    
    logger.info(`data reached successfuly!`);
    return data[0];
  } catch {
    logger.error("Ops! slug not found or connection error");
    return {};
  }
}

const PagePost = async ({ params }) => {
  const post = await GetPost(params);
  return <h1> {post.title} </h1>;
};

export default PagePost;
