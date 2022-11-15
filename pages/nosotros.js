import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'
import Image from 'next/image'

function Nosotros() {
  return (
      <>
          <Layout title={'nostros'} description={'Blog de musica , venta de guitarras '}>
              <main className={`contenedor ${styles.nosotros}`}>
                  <h2 className="heading" >Nosotros</h2>
                  <div className={`contenedor ${styles.nosotros}`}>
                      <Image 
                     src='/img/nosotros.jpg'
                     width={1000}
                     height={800}
                     alt='Imagen logo'
                      
                      />
                      <div>
                          <p>
                              orem ipsum dolor sit amet, consectetur adipiscing elit.
                              Donec elit leo, gravida id nisl at, elementum cursus dolor.
                              Phasellus at auctor purus. Ut mauris diam, egestas non nibh
                              sed, dictum aliquet ligula. Maecenas
                          </p>

                          <p>
                              sollicitudin maximus porta. Suspendisse elementum tellus
                              eget felis sodales elementum. Cras condimentum ultricies
                              odio in sollicitudin. Pellentesque convallis lectus at
                              fringilla interdum. Nunc ornare elementum ligula, in cursus
                              sapien gravida sit amet
                          </p>
                      </div>
                  </div>
              </main>
          </Layout>
      </>
  );
}

export default Nosotros