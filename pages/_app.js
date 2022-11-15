import '../styles/globals.css'
import React, { useState, useEffect } from 'react';



function MyApp({ Component, pageProps }) {

  const carritoLS = typeof window !== 'undefined' ?  JSON.parse( localStorage.getItem('carrito') )??[] : null

  const [carrito ,setcarrito] = useState(carritoLS)

  const [ Paginalista , setpaginalista] = useState(false)

  useEffect(() => {
    
    setpaginalista(true)

   }, []);

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito) )
    
   }, [carrito]);

  const agregarcarrito = (guitarra) => {

    if (carrito.some((GuitarraState) => GuitarraState.id === guitarra.id)) 
    
    {
        const carritoActulizado = carrito.map((GuitarraState) => {
            if (GuitarraState.id === guitarra.id) {
                GuitarraState.cantidad = guitarra.cantidad;
            }
            return GuitarraState
        });
        setcarrito(carritoActulizado)
    } else {
        setcarrito([...carrito, guitarra]);
    }
};

const actualizarCantidad = guitarra => {
  const carritoActualizado = carrito.map( guitarraState => {
    if(guitarraState.id === guitarra.id ) {
      guitarraState.cantidad = parseInt( guitarra.cantidad )
    } 
    return guitarraState
  })
  setcarrito(carritoActualizado)

}

const eliminadoguitarra = (id) => {

   const cantidadactulizada = carrito.filter((GuitarraState) => GuitarraState.id != id);

   setcarrito(cantidadactulizada);
};


  return  Paginalista ? <Component {...pageProps} 
  
  carrito={carrito}
  agregarcarrito={agregarcarrito}
  actualizarCantidad={actualizarCantidad}
  eliminadoguitarra={eliminadoguitarra}


  /> : null


}




export default MyApp
