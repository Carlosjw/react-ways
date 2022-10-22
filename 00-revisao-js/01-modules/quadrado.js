function squareArea(l){
    return l * l;
}

function squarePerimeter(l){
    return 4 * l
}

// juntando as funções em um objeto único e exportando
const square = {
    squareArea,
    squarePerimeter
}

export default square;