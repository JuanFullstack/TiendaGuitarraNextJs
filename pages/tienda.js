
import Layout from '../components/layout'
import Listadoguitarra from '../components/listado-guitarras';

export default function Tienda( {guitarras}) {
  return (
      <>
          <Layout 
          title={'tienda'} 
          description={'Tienda virtual  , venta de guitarras , instrumentos en gral'}>
              <main className='contenedor' >
               <h2 className="heading" >Tienda</h2>

               <Listadoguitarra

               guitarras={guitarras}
               />

              </main>



          </Layout>
      </>
  );
}


export async function getStaticProps() {

    const URL = `${process.env.API_URL}/guitarras?populate=imagen`
    const respuesta = await fetch( URL )
    const {data:guitarras} = await respuesta.json()
   
    return {
        props: {
            guitarras
        }
    }
}

