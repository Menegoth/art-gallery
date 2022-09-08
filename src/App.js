import { useState, useEffect } from "react"
import './App.css';
import Buttons from "./Buttons";
import Gallery from "./Gallery";

function App() {
  //set state variables for data and id
  let [data, setData] = useState({});
  let [objectId, setObjectId] = useState(10000)

  useEffect(() => {
    document.title = "Welcome to ArtWorld";
    //fetch object from api
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${objectId}`)
    .then(res => res.json())
    .then(data => setData(data));
  }, [objectId]);

  //change image based on button value
  const changeImage = (e) => {
    setObjectId(objectId + Number(e.target.value));
  }

  //display image
  const displayImage = () => {
    //display message if no image
    if (!data.primaryImage) {
      return (
        <h2>No Image</h2>
      )
    }
    //else display image
    return (
      <Gallery imageSrc={data.primaryImage} title={data.title} />
    )
  }

  return (
    <div className="App">
      <h1>{data.title}</h1>
      <div>
        {displayImage()}
      </div>
      <Buttons changeImage={changeImage}/>
    </div>
  );
}

export default App;
