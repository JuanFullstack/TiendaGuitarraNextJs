import Link from 'next/link'
import Layout from '../components/layout'
import styles from '../styles/blog.module.css'
import Listadoblog from '../components/listadoblog';



function Blog( {posts}  ) {


  return (
      <>
          <Layout
           title={'blog'} 
           description={'Blog de musica , venta de guitarras , consejos  '}>

          <main className={styles.contenedor}>
           
            <Listadoblog
              posts = {posts}
            />

          </main>


          </Layout>
      </>
  );
}

export default Blog



export async function getStaticProps() {

    const URL = `${process.env.API_URL}/posts?populate=imagen`
    const respuesta = await fetch( URL )
    const {data:posts} = await respuesta.json()
   

   
    return {
        props: {
            posts
        }
    }
}
