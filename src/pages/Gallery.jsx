import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { useAuth0 } from "@auth0/auth0-react";
import galleryList from "../dummyData.js";
import './Gallery.css';
const Card = ({ src, title, id, index, moveImage }) => {
  const ref = React.useRef(null);
  const [, drop] = useDrop({
    accept: "image",
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveImage(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });
  const [{ isDragging }, drag] = useDrag({
    type: "image",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging()
      };
    }
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));
  return (
    <div ref={ref} style={{ opacity }} className="card">
      <img src={src} alt={title} />
    </div>
  );
};
const Gallery = () => {
    const { isAuthenticated } = useAuth0();
  const [images, setImages] = React.useState(galleryList);
  const moveImage = React.useCallback((dragIndex, hoverIndex) => {
    setImages((prevCards) => {
      const clonedCards = [...prevCards];
      const removedItem = clonedCards.splice(dragIndex, 1)[0];
      clonedCards.splice(hoverIndex, 0, removedItem);
      return clonedCards;
    });
  }, []);
  return (
    isAuthenticated && (
    <main>
        <ul className="gallery">
        {React.Children.toArray(
            images.map((image, index) => (
        <div className="picFrame">
            <Card
                src={image.image}
                title={image.tag}
                id={image.id}
                index={index}
                moveImage={moveImage}
            />
            <div className="Tag">{image.tag}</div>
        </div>
            ))
        )}
        </ul>
    </main>
    )
  );
};
export default Gallery;




// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";
// import dummyData from "../dummyData";
// import galleryList from "../dummyData.js";
// import './Gallery.css';
// import { useDrag, useDrop } from "react-dnd";

// // data image import
    
// const Card = ({ src, title, id, index, moveImage }) => {
// const ref = React.useRef(null);
    
// const [, drop] = useDrop({
//   accept: "image",
//   hover: (item, monitor) => {
//     if (!ref.current) {
//       return;
//     }
// const dragIndex = item.index;
// const hoverIndex = index;

// if (dragIndex === hoverIndex) {
//             return;
// }
// const hoverBoundingRect = ref.current?.getBoundingClientRect();
// const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

// const clientOffset = monitor.getClientOffset();
// const hoverClientY = clientOffset.y - hoverBoundingRect.top;

// if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
//      return;
// }

// if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
//     return;
// }

// moveImage(dragIndex, hoverIndex);

// item.index = hoverIndex;

// }
// });
      
// // useDrag component

// const [{ isDragging }, drag] = useDrag({
//     type: "image",
//     item: () => {
//       return { id, index };
//     },
//     collect: (monitor) => {
//       return {
//         isDragging: monitor.isDragging()
//       };
//     }
// });
    
// const opacity = isDragging ? 0 : 1;
// drag(drop(ref));

// return (
   
//     <div ref={ref} style={{ opacity }} className="card">
//       <img src={src} alt={title} />
//     </div>
// );
// }

// function Gallery() {
//     const { isAuthenticated } = useAuth0();
//     const [images, setImages] = React.useState(galleryList);
//     const moveImage = React.useCallback((dragIndex, hoverIndex) => {
//         setImages((prevCards) => {
//           const clonedCards = [...prevCards];
//           const removedItem = clonedCards.splice(dragIndex, 1)[0];
//           clonedCards.splice(hoverIndex, 0, removedItem);
//           return clonedCards;
//         });
//       }, []);


//     return (
//         isAuthenticated && (
//             <ul className="gallery">
//                 {dummyData.map((item, index) =>{
//                     return(
//                         <Card key={index} src={item.image} title={item.tag} id={item.id} index={index} moveImage={moveImage}/>
//                     )
//                 })}
//             </ul>
//         )
//     )    
// }

// export default Gallery;