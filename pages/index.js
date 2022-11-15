import Layout from '../components/layout'
import Listadoblog from '../components/listadoblog'
import Listadoguitarra from '../components/listado-guitarras'
import Curso from '../components/curso'



export default function Home( {guitarras , posts , cursos}  ) {

console.log(cursos)

  return (
   <>
    <Layout
    title={'Inicio'}
    description={'Blog de musica , venta de guitarras '}
    >
   
          <main>
              <Listadoguitarra guitarras={guitarras} />
          </main>
         
          <Curso 
          cursos = { cursos }
          />

          <section  >
              <Listadoblog posts={posts} />
          </section>


    

    </Layout>
   </>




  )
}

export async function getStaticProps() {

  const URL1 = `${process.env.API_URL}/guitarras?populate=imagen`
  const URL2 = `${process.env.API_URL}/posts?populate=imagen`
  const URL3 = `${process.env.API_URL}/curso?populate=imagen`


  const [respuesta1 , respuesta2 , respuesta3]= await Promise.all([
    fetch(URL1),
    fetch(URL2),
    fetch(URL3),
    
  ])


  const [{data:guitarras} , {data:posts} , {data: cursos }  ] = await Promise.all([
    respuesta1.json(),
    respuesta2.json(),
    respuesta3.json()
    
  ])

 

  return {
      props: {
          guitarras,
          posts,
          cursos
      }
  }
}

