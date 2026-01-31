function fetchPostData(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve("Post Data fetched")
      },2000)
    })
}

function fetchCommentData(){
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve("Commet Data fetched.")
      },3000)
    })
}
// console.log("Task finished");
async function getBlogData(){
    try {
         console.log("Fetched blog data");
        //  const blogData=  await fetchPostData();
        //  const commentData = await fetchCommentData();
        const [postData,commentData] = await Promise.all([fetchPostData(),fetchCommentData()]);
         console.log(postData);
         console.log(commentData);
         
         console.log("fetch complete");
         

    } catch (error) {
        console.log("Error fetching blog data",error)
    }
}

getBlogData();




///this practice que raw work

yield 1
yield 2
yield 3