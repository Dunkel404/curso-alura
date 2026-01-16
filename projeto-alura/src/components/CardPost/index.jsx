import { Avatar } from '../Avatar'
import Image from 'next/image';

export const CardPost = ({ post }) => {
    return (
        <article>
            <header>
                <figure>
                    <Image
                        src={post.cover}
                        alt={post.slug}
                        width={438}
                        height={133}
                    />
                </figure>
            </header>
            <section>  
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </section>
            <footer>
                <Avatar imageSrc={post.author.avatar} name={post.author.username}/>
            </footer>
        </article>
    );
}