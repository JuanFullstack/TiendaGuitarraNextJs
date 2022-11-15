import Layout from '../components/layout'
import styles from '../styles/guitarras.module.css'


export default  function Pagina404() {
  return ( 

    <>
    <Layout 
          title={'Sin resultados'} 
          description={'No se encontraron resultados de su busqueda '}>

       <p className= {styles.error1}> <span className= {styles.error2} > 404 </span>  sin resultados  </p>

     </Layout>
   </>

  )
}
