
import Guitarras from "./guitarras"
import styles from '../styles/guitarras.module.css'


function Listadoguitarra( {guitarras} ) {
  return (
    <>
    <h2
    className='heading'
    >
      Nuestra Coleccion 
    </h2>

    {guitarras?.length && (
                          <div
                          className={styles.guitarrasgrid}
                          >
                            { guitarras?.map( guitarras=>(

                              <Guitarras
                              key={guitarras?.id}
                              guitarras={guitarras?.attributes}
                              />
                              
                            ))}
                          </div>
                        )}
    
    
    </>
  )
}

export default Listadoguitarra