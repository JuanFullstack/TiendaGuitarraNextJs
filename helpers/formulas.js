export const formatearFecha = fecha => {
    const fechaActual = new Date(fecha);
    const opciones = { year: 'numeric', month: 'long', day: '2-digit' };
   
        return   fechaActual.toLocaleDateString( "es-Es", opciones) }