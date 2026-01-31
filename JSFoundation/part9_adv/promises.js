function fetchData(){
    return  new Promise((resolve,reject)=>{
        setTimeout(()=>{
             let success =true; 
             if(success){
                resolve("Data fetched sucessfully")
             }else{
                 reject("Error fetching data")
             }
        },3000)
    })
}

//consume Promise

fetchData()
    .then((data)  => {
        console.log(data)
        //return `hitesh`
        return data.toLowerCase();
    })
    .then((value)=>{
           console.log(value);
           
    })
    .catch((error) => console.log(error))