import { VideoCard } from "./Videocard"

const videos = [{
    title :"How to learn coding in 30 days | 30 days plan with me",
    image :"photo.png", 
    thumbImage: "thumbimage.jpg",
    author: "Prashant Parashar",
    views:"100k",
    time:"13 days ago"
},{
    title :"How to learn playing in 30 days | 30 days plan with me",
    image :"photo.png", 
    thumbImage: "thumbimage.jpg",
    author: "Prashant Parashar",
    views:"100k",
    time:"13 days ago"
},{
    title :"How to learn jumping in 30 days | 30 days plan with me",
    image :"photo.png", 
    thumbImage: "thumbimage.jpg",
    author: "Prashant Parashar",
    views:"100k",
    time:"13 days ago"
},{
    title :"How to learn jumping in 30 days | 30 days plan with me",
    image :"photo.png", 
    thumbImage: "thumbimage.jpg",
    author: "Prashant Parashar",
    views:"100k",
    time:"13 days ago"
}]

export const VideoGrid = () => {
    return <div className= "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {videos.map(videos => <div>
            <VideoCard 
                title ={videos.title}
                image ={videos.image} 
                thumbImage= {videos.thumbImage}
                author= {videos.author}
                views={videos.views}
                time={videos.time}></VideoCard>
        </div>)}
    </div>
}