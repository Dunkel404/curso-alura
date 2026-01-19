import { Avatar } from '../Avatar'
import Image from 'next/image';
import Styles from './CardPost.module.css'

export const CardPost = ({ post }) => {
    return (
        <article className={Styles.cardContainer}>
            <header className={Styles.cardHeader}>
                <figure className={Styles.cardFigure}>
                    <Image
                        className={Styles.cover}
                        src={post.cover}
                        alt={post.slug}
                        width={486}
                        height={133}
                    />
                </figure>
            </header>
            <section className={Styles.cardBody}>  
                <h2 className={Styles.title}>{post.title}</h2>
                <p className={Styles.text}>{post.body}</p>
            </section>
            <footer className={Styles.cardFooter}>
                <Avatar 
                  imageSrc={post.author.avatar} 
                  name={post.author.username}
                />
            </footer>
        </article>
    );
}