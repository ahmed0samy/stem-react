import Image from 'next/image'
import Link from 'next/link'
import styles from './item.module.css'
function Item ({name, imgSrc, href = "", isGoogleDrive = false, isAvailable = true}) {
  return (
    <Link  className={`${styles.article} ${!isAvailable && styles.notAvailable }`} href={href}>
            {isGoogleDrive && <div className={styles.img}></div>}
            <span>{name}</span>
            <Image src={imgSrc} alt={`${name} Image ( Please contact with me when this text appear )`} width={100} height={100}/>
        </Link>
  )
}
export default Item