const multiplos=(num:number): number[]=>{
    const mult:number[]=[];
    for(let i=0;i<=num;i++){
        if(i%3===0||i%5===0){
            mult.push(i);
        }
    }
    return mult;
}
const resultado=multiplos(30);
console.log(resultado);
