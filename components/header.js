
import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styles from '../styles/header.module.css'
import Carrito from '../pages/carrito'



function Header() {

    const location = useRouter()

  return (
      <header className={styles.header}>
          <div className={`contenedor ${styles.barra}`}>
              <Link legacyBehavior href='/'>
                  <a>
                      <Image
                          className={styles.imagen}
                          src='/img/logo.svg'
                          width={300}
                          height={40}
                          alt='Imagen logo'
                      />
                  </a>
              </Link>
              <nav className={styles.navegacion}>
                  <Link legacyBehavior href='/'>
                      <a className={location.pathname === '/' ? styles.active : ''}>
                          Inicio
                      </a>
                  </Link>

                  <Link legacyBehavior href='/nosotros'>
                      <a
                          className={
                              location.pathname === '/nosotros' ? styles.active : ''
                          }>
                          Nosotros
                      </a>
                  </Link>
                  <Link legacyBehavior href='/tienda'>
                      <a className={location.pathname === '/tienda' ? styles.active : ''}>
                          Tienda
                      </a>
                  </Link>
                  <Link legacyBehavior href='/blog'>
                      <a className={location.pathname === '/blog' ? styles.active : ''}>
                          Blog
                      </a>
                  </Link>
                  <Link legacyBehavior href='/carrito'>
                      <a className={location.pathname === '/carrito' ? styles.active : ''}>
                          <Image
                              className={styles.carrito}
                              src='/img/carrito.png'
                              width={30}
                              height={25}
                              alt='Imagen logo'
                          />
                      </a>
                  </Link>
              </nav>
          </div>
      </header>
  );
}

export default Header