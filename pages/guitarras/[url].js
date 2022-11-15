import styles from '../../styles/guitarras.module.css'
import Image from 'next/image'
import Layout from '../../components/layout'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';


export default function Producto({guitarra ,agregarcarrito }) {


  const [cantidad , setcantidad] = useState(0)

  const { id ,  nombre , descripcion , imagen , precio  } = guitarra[0].attributes
  
  const handlesubmit = (e) => {
      e.preventDefault();

      if (cantidad < 1) {
          alert('debes seleccion cantidad');
          return;
      } else {
          const guitarraSleccionada = {
              id: guitarra[0].id,
              imagen: imagen.data.attributes.url,
              nombre,
              precio,
              cantidad,
          };
          agregarcarrito(guitarraSleccionada)
      }
  };




  return (
    <>
     <Layout
    title={'Venta de guitarras 2'}
    description={'Blog de musica , venta de guitarras '}
    >
    <main className={`contenedor ${styles.guitarra}`}>
          
           
          <Image
              className={styles.imagen}
              width={600}
              height={400}
              src={imagen.data.attributes.url}
              alt={`Imagen de guitarra${nombre}`}
          />
          <div className={styles.contenido}>
              <div className={styles.ordenar}  >
                <Link legacyBehavior href='/tienda'>
                    <a className={styles.volver}>
                        volver
                    </a>
                </Link> 
              </div>
              <h3>{nombre}</h3>
              <p className={styles.descripcion}> {descripcion} </p>
              <p className={styles.precio}> ${precio} </p>

              <form
              onSubmit={handlesubmit}
              className={styles.formulario}>
                  <label htmlFor='cantidad'>Cantidad</label>
                  <select  
                  onChange={e=> setcantidad(parseInt(e.target.value))}
                  id='cantidad'>
                      <option value='0'>--Seleccione--</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                  </select>
                  <input type='submit' value='agregar carrito ' />
              </form>
              
          </div>
         
      </main>
      </Layout>
   </>

  )

  


}




// export async function getServerSideProps({query:{url}}) {

//   const URL = `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
//   const respuesta = await fetch( URL )
//   const {data:guitarra} = await respuesta.json()
 
//   console.log(guitarra)
//   return {
//       props: {
//           guitarra
//       }
//   }
// }




export async function getStaticPaths () {

  const URL = `${process.env.API_URL}/guitarras`
  const respuesta = await fetch( URL )
  const {data } = await respuesta.json()
 
  const paths = data.map( guitarra => ( {  
   
    params : {
      url:guitarra.attributes.url
    }
  }))

  return {
      paths,
      fallback:false
  }
}




export async function getStaticProps({params:{url}}) {

  const URL = `${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`
  const respuesta = await fetch( URL )
  const {data:guitarra} = await respuesta.json()
 
 
  return {
      props: {
          guitarra
      }
  }
}
