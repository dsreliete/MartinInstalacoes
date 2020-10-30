import React, { useState, useCallback }  from 'react';

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import { galery } from "../photosGalery";
import { photosBath } from "../photosBath";
import { photosBed } from "../photosBed";
import { photosCustom } from "../photosCustom";
import { photosDesk } from "../photosDesk";
import { photosKitchen } from "../photosKitchen";
import { photosLaundry } from "../photosLaundry";
import { photosRoom } from "../photosRoom";

function Portfolio() {
    const [imageCollection, setImageCollection] = useState([]);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        const photoGalery = setPhotoGalery(index);
        setImageCollection(photoGalery);
        setViewerIsOpen(true);
    }, []);

    const setPhotoGalery = (index) => {
        switch(index){
            case 0:
                return photosBed;
            case 1:
                return photosLaundry;
            case 2:
                return photosCustom;
            case 3:
                return photosCustom;
            case 4:
                return photosBed;
            case 5:
                return photosDesk;
            case 6:
                return photosKitchen;
            case 7:
                return photosBath;
            case 8:
                return photosRoom;
            default:
                return galery;
        }
    }

    const closeLightbox = () => {
        setImageCollection([]);
        setViewerIsOpen(false);
    };

    return(
        <div>
            <Gallery photos={galery} onClick={openLightbox} />
            <ModalGateway>
                {viewerIsOpen ? (
                    <Modal onClose={closeLightbox}>
                        <Carousel
                            views={imageCollection.map(x => ({
                                ...x,
                                srcset: x.srcSet,
                            }))}
                        />
                    </Modal>
                ) : null}
            </ModalGateway>
        </div>
    );
}

export default Portfolio;