const mi_array=[57,38,81,47,19,4,29,49,28]

const quicksort=(array:number[],pequeño:number,grande:number)=>{
    if(pequeño<grande){
        const puntero=ajustar(array,pequeño,grande);
        quicksort(array,pequeño,puntero-1);
        quicksort(array,puntero+1,grande);
    }
}

const swap=(array:number[],a:number,b:number):void=>{
    const t=array[a];
    array[a]=array[b];
    array[b]=t;
}
const ajustar=(array:number[],inicio:number,final:number)=>{
    const ultimo_elemento=array[final];
    let puntero=inicio;
    for(let i=inicio;i<final;i++){
        if(array[i]<ultimo_elemento){
            swap(array,puntero,i)
            puntero++;
        }
    }
    swap(array,puntero,final);
    return final;
}

quicksort(mi_array,0,mi_array.length-1);
console.log(mi_array);