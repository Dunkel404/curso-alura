import Image from 'next/image'

export const Avatar = ({imageSrc, name}) => {
    return(
        <ul>
            <li>
                <figure>
                    <Image 
                        src={imageSrc}
                        width={32}
                        height={32}
                        alt='Avatar'/>
                </figure>
            </li>
            <li>
                <a>@{name}</a>
            </li>
        </ul>
    )
}