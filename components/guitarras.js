import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/guitarras.module.css'



function Guitarras({guitarras}) {

    const {descripcion, nombre, precio , imagen , url } = guitarras;

  return (

    <div className={styles.guitarra}  >
      <Image 
            src= {imagen.data.attributes.formats.medium.url}
            width={600}
            height={400}
            alt={`imagen guitarra ${nombre}`}
            
            />
    <div className={styles.contenido} >
        <h3>{nombre}</h3>
        <p className={styles.descripcion} >{descripcion}</p>
        <p className={styles.precio} >${precio}</p>
        <Link legacyBehavior href={`/guitarras/${url}`} > 
        <a className={styles.enlaces}>
            ver producto 
        </a>
        </Link>
    </div>
</div>

  )
}


export default Guitarras