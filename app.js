


// ** objective ==> get base,get height, calculate the area  by using provided formula . and then display the area // 
/**
 *  01)  get base value 
 * 02) 
 * 
 * 
 * 
 */
const getinputValue = (props) => {
    return parseFloat(document.getElementById(props).value)
}
const getElm = (props) => {
   return  document.getElementById(props)
}
const calculateTriangeArea = () => {
    const base = getinputValue('base');
    const height = getinputValue('height');
    const area = base * height * .5;

    const xyz = `Triangle Area: ${area}`;

    const newElm = document.createElement('h2');
    newElm.innerText = xyz; 
    newElm.classList.add("text-xl", "p-5", "font-bold", "bg-blue-200", "drop-shadow-lg","rounded-lg","my-3");
    getElm('triangle-body').appendChild(newElm)
}
const calculateRactangleArea = () => {
    const rectLength= getinputValue('react-lenght');
    const rectHeight = getinputValue('rect-height');
    const reactArea = rectLength * rectHeight;
     
    console.log(rectLength,rectHeight);

    const xyz = ` Rectangle area : ${reactArea}`;

    const newElm = document.createElement('h2');
    newElm.innerText = xyz; 
    newElm.classList.add("text-xl", "p-5", "font-bold", "bg-purple-100", "drop-shadow-lg","rounded-lg","my-3");
    getElm('body-rectange').appendChild(newElm)
}   
    

    
    