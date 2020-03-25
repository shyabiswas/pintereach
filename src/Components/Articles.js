import React, {useState} from "react";
import axiosWithAuth from "../utils/axiosWithAuth"


const Articles= (props)=>{
const [articles, setArticles]= useState([])
React.useEffect(()=>{
    axiosWithAuth()
    .get("/articles") 
    .then( 
        res=>{console.log(res);
            setArticles(res.data)
        })
        .catch (err =>{console.log(err)})
},[])


return(
    <div>
        {articles.map(article=>{
            return <div key= {article.id}>
                {article.url}
                {article.article_label}
                {article.board_id}
                </div>
        })}
    </div>

)

}













export default Articles
