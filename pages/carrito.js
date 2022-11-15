import Layout from '../components/layout'
import Carr from '../components/carr'
import styles from '../styles/carrito.module.css'
import React, { useState, useEffect } from 'react';



function Carrito( {carrito , agregarcarrito , actualizarCantidad , eliminadoguitarra } ) {

    const [total , settotal ] = useState(0)

    useEffect(() => {
        const calculototal = carrito.reduce( (total , producto )=> total+ (producto.cantidad*producto.precio) , 0  )
     
        settotal(calculototal)
       
      }, [carrito]);


    return (
        <>
            <Layout
                title={'nostros'}
                description={'Blog de musica , venta de guitarras '}>
                <main className={styles.contenedor}>
                    <h1 className='heading'> carrito de compras </h1>

                    <div className={styles.contenidoX}>
                        <div className={styles.carrito}>
                            <h2>Articulo</h2>

                            {carrito?.map((carrito) => (
                                <Carr
                                    key={carrito?.id}
                                    carrito={carrito}
                                    agregarcarrito={agregarcarrito}
                                    actualizarCantidad={actualizarCantidad}
                                    eliminadoguitarra={eliminadoguitarra}
                                />
                            ))}
                        </div>
                        <aside className={styles.resumen}>
                            <h3>Resumen del pedido</h3>
                            <p>Total a pagar :{total} </p>
                        </aside>
                    </div>
                </main>
            </Layout>
        </>
    );
}

export default Carrito