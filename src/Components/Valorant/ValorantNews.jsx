import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import './valorant.css'
const PageCounter = ({allnews,handlePageChange})=>{
    const pages = []
    for (let i = 0; i <allnews.length/9; i++){
        pages.push(<button onClick={()=>handlePageChange(i)} key={i} className="page-btn">{i+1}</button>)
    }
    return(
        <div>
            {pages}
        </div>
    )
}
function ValorantNews() {
    const [allnews,setAllNews] = useState([])
    const [currentPage,setCurrentPage] = useState(0)

    const fecthValorantNews = async ()=>{
        try {
            const res = await axios.get('news/valorant')
            setAllNews(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        fecthValorantNews()
    },[])

    const handlePageChange = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    return (
        <div className="container">
            <div className = "row">
                {allnews.slice(currentPage*9,(currentPage+1)*9).map((news)=>{
                    return(
                        <div className = "col-12 col-md-4 ml-3 mt-3 mb-3" key = {news._id}>
                            <div className="card">
                                <img className="card-img-top" src={news.imgUrl} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{news.title}</h5>
                                    <Link to={`valorant/${news.title}`} className="page-btn">Haberlere Git</Link>
                                </div>
                            </div>
                        </div> 
                    )  
                })}
            </div>
            <div>
                <PageCounter allnews={allnews} handlePageChange = {handlePageChange}/>
            </div>
        </div>
    )
}

export default ValorantNews
