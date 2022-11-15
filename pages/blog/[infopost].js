import styles from '../../styles/guitarras.module.css'
import Image from 'next/image'
import Layout from '../../components/layout'
import { formatearFecha } from '../../helpers/formulas'

function Infopost( {posts} ) {

  const {contenido , imagen, titulo, publishedAt } = posts[0].attributes


  return (
    <>
     <Layout
    title={'giittasx'}
    description={'Blog de musica , venta de guitarras '}
    >

    <main className={styles.post}>
         <Image
              src={imagen.data.attributes.url}
              alt={`imagen blog ${titulo}`}
              width={600}
              height={400}
          />
          <div className='contenido '>
              <h3>{titulo}</h3>
              <p className={styles.fecha}> {formatearFecha (publishedAt)} </p>
              <p className={styles.resumen}> {contenido} </p>
          </div>
      </main>



    </Layout>
   </>

  )
}

export default Infopost










export async function getServerSideProps( { query : { infopost } } ) {
  const URL = `${process.env.API_URL}/posts?filters[url]=${infopost}&populate=imagen`
  const respuesta = await fetch( URL )
  const {data:posts} = await respuesta.json()
 
  console.log(posts)
  return {
      props: {
        posts
      }
  }
}
