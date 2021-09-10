import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from "axios"
function Individual() {
    const {category,title} = useParams()

    const [news,setNews] = useState([])

    const individualNews = async()=>{
        try {
            const res = await axios.get(`${category}/${title}`)
            setNews(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        individualNews()
    },[])
    return (
        <div className = "container">
            <div className = "row">
                <div className = "col-12 col-md-12 m-4">
                    {news.map((news)=>{
                        return(
                            <div className="card">
                                <img className="card-img-top" src={news.imgUrl} alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">{news.title}</h5>
                                    <p className="card-text">{news.desc}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Individual
