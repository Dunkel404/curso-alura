import { CardPost } from "@/components/CardPost";
import logger from '@/logger';
import Styles from './page.module.css';
import Link from "next/link";
import { PaginationControls } from "@/components/PaginationControls";
// const post = {
//   "id": 1,
//   "cover": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/posts/introducao-ao-react.png",
//   "title": "Introdução ao React",
//   "slug": "introducao-ao-react",
//   "body": "Neste post, vamos explorar os conceitos básicos do React, uma biblioteca JavaScript para construir interfaces de usuário. Vamos cobrir componentes, JSX e estados.",
//   "markdown": "```javascript\nfunction HelloComponent() {\n  return <h1>Hello, world!</h1>;\n}\n```",
//   "author": {
//     "id": 101,
//     "name": "Ana Beatriz",
//     "username": "anabeatriz_dev",
//     "avatar": "https://raw.githubusercontent.com/viniciosneves/code-connect-assets/main/authors/anabeatriz_dev.png"
//   }
// }

async function getAllPosts(page) {
  try {
    const response = await fetch(`http://localhost:3042/posts?_page=${page}&_per_page=6`);
    if (!response || !response.ok) throw new Error('Falha na rede')
    logger.info('Posts obtidos com sucesso');
    return response.json();

  } catch{
    logger.error('Ops! Algo deu errado.');
    return [];
    
  }
}

export default async function Home({ searchParams }) {
  const page = searchParams?.page || 1
  const { data: posts ,prev, next} = await getAllPosts(page);

  return (
    <main>
      <div className={Styles.PostsGrid}>
        {posts.map(post => <CardPost key={post.id} post={post} />)}
      </div>
      <PaginationControls next={next} prev={prev} />
    </main>
  );
}
