function filterNames(arr, text){
   return arr.filter(el => {

        if(el.length > 5){
            if(el.includes(text)){
                return el;
            }
        }
    })
}

let arr = ['John', 'Olivya', 'Oleksand', 'Vanya'];
console.log(arr, 'ya');