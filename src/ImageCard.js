import React from 'react'

const ImageCard = ({image}) => {
   const tags=image.tags.split(',');
  return (
    
    <div className=" bg-gray-300 max-w-sm rounded overflowhidden shadow-lg">
    <img src={image.webformatURL} alt="" className="w-full" />
    <div className="   px-6 py-4">
      <div className=" bg-gray-300 font-bold text-red-500 text-xl mb-2">
        Photo By {image.user}
      </div>
      <ul>
        <li><strong>Views:</strong>{image.views}</li>
        <li><strong>downloads:</strong>{image.downloads}</li>
        <li><strong>likes:</strong>{image.likes}</li>
      </ul>
    </div>
    <div className=" px-6 py-6">
    {tags.map((tag,index)=>(
        <span key={index}className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gery-700 mr-2">
        #{tags}
      </span>
    ))}
        
     
    </div>
    </div>
  )
}

export default ImageCard;