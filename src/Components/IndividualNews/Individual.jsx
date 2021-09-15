import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from "axios"
import './individual.css'
function Individual() {
    const {category,title} = useParams()
    const [news,setNews] = useState({})

    const individualNews = async()=>{
        try {
            const res = await axios.get(`http://localhost:5000/api/news/${category}/${title}`)
            console.log(res.data)
            setNews(res.data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        individualNews()
    },[])

    const handleGoBack = ()=>{
        window.history.back()
    }

    return (
        <div className = "container">
            <div className = "row">
                <div className = "col-12 col-md-12 m-4">
                    <div className = "single">
                        <div className = "ind-img">
                            <img className="news-img" src={news.imgUrl} alt={news.title} />
                        </div>
                        <div className="ind-news">
                            <div className = "ind-heading">
                                <h5>{news.title}</h5>
                            </div>
                            <hr />
                            <div className = "ind-desc">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Ut hendrerit a diam eget vestibulum. Fusce vestibulum felis non lorem convallis laoreet. 
                                    Curabitur feugiat dui in justo venenatis ullamcorper. Morbi luctus diam nec mi auctor tempus. 
                                    Aliquam tempor viverra ultrices. Nullam sed augue molestie, sollicitudin enim ac, interdum nunc. Aenean in iaculis tellus. Sed vestibulum vitae leo posuere sollicitudin. Morbi a venenatis dui.
                                    Donec eget nunc quis orci tempor volutpat et eget nisl. Pellentesque vulputate vehicula ullamcorper. Sed vel dui vel massa lacinia dictum. Nam lacinia auctor felis, nec varius enim malesuada eget. Nullam id arcu pretium, vulputate mauris id, egestas massa. Nunc sed diam metus. Nam vitae mauris at nunc sollicitudin ornare. 
                                    Nullam at nisi quis nisi maximus dignissim. Nulla facilisi. Vestibulum ac quam dapibus, egestas est sed, mattis nisl. 
                                    Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                                    Suspendisse in semper erat. Quisque euismod sodales sapien, ac cursus enim euismod ut.
                                </p>
                            </div>
                            <button className="btn btn-primary" onClick={handleGoBack}>Geri Dön</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Individual
