//Hacer una función que tenga un parámetro de entrada que sea un array de strings, el cual se deberá ordenar alfabéticamente y devolver el primer valor que haya separando sus letras con espacios.
const palabras:string[]=["Comida","Cena","Merienda","Piscina","Ordenador","Abeja","Elefante"];
const orden_devol=(palabras:string[])=>{
    if(palabras.length===0){
        return undefined;
    }
    const ordenar_palabras=palabras.sort();
    const primer_elemento=ordenar_palabras[0];
    let separar_palabras="";
    for(let i=0;i<primer_elemento.length;i++){
        separar_palabras+=primer_elemento[i]+"";
        if(i<primer_elemento.length-1){
            separar_palabras+="";
        }
    }
    return separar_palabras;
}

const resul=orden_devol(palabras);
console.log(resul);