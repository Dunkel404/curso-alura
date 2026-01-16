import Image from 'next/image'
import Styles from './Avatar.module.css'
export const Avatar = ({imageSrc, name}) => {
    return(
        <ul className={Styles.AvatarContainer}>
            <li className={Styles.AvatarImage}>
                <figure>
                    <Image 
                        src={imageSrc}
                        width={32}
                        height={32}
                        alt='Avatar'/>
                </figure>
            </li>
            <li className={Styles.AvatarName}>
                <a>@{name}</a>
            </li>
        </ul>
    )
}