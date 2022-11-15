import styles from '../styles/blog.module.css'
import Image from 'next/image'
import { formatearFecha } from '../helpers/formulas';
import Link from 'next/link'

function Post( {posts} ) {

    const {contenido , imagen, titulo, url, publishedAt } = posts;


  return (
      <articule className={styles.post}>
          <Image
              src={imagen.data.attributes.url}
              alt={`imagen blog ${titulo}`}
              width={600}
              height={400}
          />
          <div className={styles.contenido}>
              <h3>{titulo}</h3>
              <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
              <p className={styles.resumen}>{contenido}</p>
              <Link legacyBehavior  href={`/blog/${url}`}>
                 <a  className={styles.enlaces}  >
                  Leer post
                 </a>
              </Link>
          </div>
      </articule>
  );
}

export default Post