import React, { useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";

const SelectedImage = ({ 
    photo,
    index, 
    margin, 
    photosRoom,
    photosBath,
    photosBed,
    photosCustom,
    photosDesk,
    photosKitchen,
    photosLaundry,
}) => {

    const [isSelected, setIsSelected] = useState(false);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [imageCollection, setImageCollection] = useState([]);

    const handleOnClick = () => {
        const photoGalery = setPhotoGalery(index);
        setImageCollection(photoGalery);
        setViewerIsOpen(true);
        setIsSelected(true);
    };

    const closeLightbox = () => {
        setViewerIsOpen(false);
        setIsSelected(false);
    };

    const setPhotoGalery = (index) => {
        switch(index){
            case 0:
                return photosBed;
            case 1:
                return photosKitchen;
            case 2:
                return photosLaundry;
            case 3:
                return photosCustom;
            case 4:
                return photosBed;
            case 5:
                return photosDesk;
            case 6:
                return photosBath;
            case 7:
                return photosRoom;
            default:
                return photo;
        }
    }

    return (

        <div style={{ margin, height: photo.height, width: photo.width }}
            className={!isSelected ? "not-selected" : ""}>

            <img alt={photo.title} {...photo} onClick={handleOnClick}/>
            <div className="middle">
                <div className="image-text"
                onClick={handleOnClick}>
                {photo.title}
                </div>
            </div>

            <style>{`
                .not-selected:hover{
                    opacity:0.60; 
                    position: relative;
                }

                .not-selected:hover .middle {
                    opacity: 1;
                }

                .img {
                    opacity: 1;
                    display: block;
                    width: 100%;
                    height: auto;
                    transition: .1s ease in out;
                    backface-visibility: hidden;
                    }
                
                .middle {
                    transition: .1s ease in out;
                    opacity: 0;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    -ms-transform: translate(-50%, -50%);
                    text-align: center;
                }

                .image-text {
                    background-color: #009688;
                    color: white;
                    font-size: 16px;
                    padding: 16px 32px;
                    font-weight:bold
                }
            `}</style>

        <ModalGateway>
            { viewerIsOpen ? (
                <Modal onClose={closeLightbox}>
                    <Carousel
                        views={imageCollection.map((x) => ({
                        ...x,
                        srcset: x.srcSet
                        }))}
                    />
                </Modal>
            ) : null }
        </ModalGateway>
    </div>);
};

export default SelectedImage;
