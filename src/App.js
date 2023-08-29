import React, {useState,useEffect} from 'react';
import ImageCard from'./ImageCard';
import Search from'./Search';

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading]=useState(true);
  const [term, setTerm] =useState('');
  useEffect(()=>{
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`)
    .then(res =>res.json())
    .then(data =>{
        setImages(data.hits);
        setIsLoading(false);
    })
    .catch(err=>console.log(err));
  },[term]);
  return (
    
<div className=" bg-gradient-to-r from-green-600 to-yellow-600 container mx-auto  ">
   <Search searchText={(text)=>setTerm(text)}/>
   {!isLoading && images.length===0 && <h1 className="bg-gradient-to-r from-green-600 to-yellow-600 h-full text-6xl text-center mx-auto mt-32 ">No Images Found</h1>}
      {isLoading ? <h1 className="bg-gradient-to-r from-purple-600 to-blue-600 text-6xl text-center mx-auto mt-32 ">Loading.......</h1> :  
      <div className=" grid grid-cols-3 gap-4 px-8  ">
      {images.map(image=>(
      <ImageCard key={image.id} image={image}/>
      ))}
     
    </div>}
   </div>
   
  );
}

export default App;
