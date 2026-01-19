import logger from "@/logger";
import { remark } from "remark";
import html from 'remark-html';
import DOMPurify from 'dompurify'

async function GetPost({ slug }) {
  try {
    const response = await fetch(`http://localhost:3042/posts?slug=${slug}`);
    const data = await response.json();
    if (!response || !response.ok) throw Error("slug not found or connection error");
    if (data.lenght === 0) throw Error("nothing found");
    logger.info(`data reached successfuly!`);
    
    const processedContent = await remark()
    .use(html)
    .process(data.markdown);
    
    const contentHtml = processedContent.toString();
    

    //     const sanitizedHtml = DOMPurify.sanitize(processedContent.toString())
    // const contentHtml = sanitizedHtml;

    // data[0].markdown = contentHtml;
    return data[0];
  } catch {
    logger.error("Ops! slug not found or connection error");
    return {};
  }
}

const PagePost = async ({ params }) => {
  const post = await GetPost(params);
  return (
    <>
    <div style={{padding: '16px', 'background-color': 'white'}} dangerouslySetInnerHTML={{__html: post.markdown}} />
    </>
  )
};

export default PagePost;
