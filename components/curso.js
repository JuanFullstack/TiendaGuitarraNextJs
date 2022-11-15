import styles from '../styles/cursos.module.css'

function Curso( {cursos} ) {

   

    const { contenido , imagen , titulo } = cursos.attributes


  return (
      <section className={` ${styles.curso} curso `}   >
          <style jsx='true'>{`
              .curso {
                  background-image: linear-gradient(
                          to right,
                          rgb(0 0 0 /0.8),
                          rgb(0 0 0 /0.7)
                      ),
                      url(${imagen.data.attributes.url});
                  background-size: cover;
                  background-position: center center;
              }
          `}</style>

          <div className='className={`contenedor ${styles.cursogrid}`}'>
              <div className={styles.contenido}>
                  <h2 className='heading'>{titulo}</h2>
                  <p className={styles.texto}>{contenido}</p>
              </div>
          </div>
      </section>
  );
}

export default Curso