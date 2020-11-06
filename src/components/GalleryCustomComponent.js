import React from 'react';

import Gallery from "react-photo-gallery";

import SelectedImage from './GallerySelectedImageComponent';

function CustomGallery(props) {

    const imageRenderer = ({ index, key, photo }) => (
        <SelectedImage
            key={key}
            margin={"2px"}
            index={index}
            photo={photo}
            photosRoom={props.photosRoom}
            photosBath={props.photosBath}
            photosBed={props.photosBed}
            photosCustom={props.photosCustom}
            photosDesk={props.photosDesk}
            photosKitchen={props.photosKitchen}
            photosLaundry={props.photosLaundry} 
        />
    );
    
    return(
        <Gallery photos={props.photos} renderImage={imageRenderer} />
    );
}

export default CustomGallery;