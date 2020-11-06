import React from 'react';

import Gallery from "./GalleryCustomComponent";

import { photos } from "../photosGalery";
import { photosBath } from "../photosBath";
import { photosBed } from "../photosBed";
import { photosCustom } from "../photosCustom";
import { photosDesk } from "../photosDesk";
import { photosKitchen } from "../photosKitchen";
import { photosLaundry } from "../photosLaundry";
import { photosRoom } from "../photosRoom";

function Portfolio() {
    return(
        <Gallery 
            photos={photos}
            photosRoom={photosRoom}
            photosBath={photosBath}
            photosBed={photosBed}
            photosCustom={photosCustom}
            photosDesk={photosDesk}
            photosKitchen={photosKitchen}
            photosLaundry={photosLaundry} 
        />
    );
}

export default Portfolio;