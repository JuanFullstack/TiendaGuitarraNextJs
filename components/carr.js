
import Layout from '../components/layout'
import Image from 'next/image'
import styles from '../styles/carrito.module.css'



function Carr( {carrito   , actualizarCantidad , eliminadoguitarra } ) {


    
   

    const { id , nombre , precio , cantidad , imagen  } = carrito



    return (
        <>
                <div className={styles.producto} >
                    <div>
                        <Image
                            src={imagen}
                            width={250}
                            height={480}
                            alt='Imagen logo'
                        />
                    </div>
                    <div>
                        <p className={styles.nombre} > { nombre } </p>
                        <p  > Cantidad : </p>
                        <select value={ cantidad } className={styles.select}
                        onChange={ e => actualizarCantidad ( { 
                            cantidad:+e.target.value,  
                            id : carrito.id
                        
                        } )   }
                        >
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>

                        <p className={styles.precio}>
                            $<span> { precio } </span>
                        </p>
                        <p className={styles.subtotal}>
                            subtotal $<span>{precio*cantidad } </span>
                        </p>
                    </div>
                    <button 
                    type='button' 
                    className={styles.btneliminar}
                    onClick={() => eliminadoguitarra(id)}
                    >
                        <div className={styles.extra}> X </div>
                    </button>
                </div>
            
        </>
    );
}

export default Carr;




