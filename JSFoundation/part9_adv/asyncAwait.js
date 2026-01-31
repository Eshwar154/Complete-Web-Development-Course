function fetchUserData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve({name:"chaicode",url:"https://chaicode.com"})
            reject({name:"chaicode",url:"https://chaicode.com"})
        },3000);
    })
}

async function  getUserData(){
    try {
        console.log("fetching user data.....");
        const userData =  await fetchUserData()
        console.log("User data fetched sucessfully");
        
        console.log("User data:",userData);
        
    } catch (error) {
        console.log("Error fetching data",error);
    }
}

getUserData();