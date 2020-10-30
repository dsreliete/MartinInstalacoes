import React from 'react';

import { Parallax } from "react-parallax";

const ParallaxBannerImage = () => {

    const image2 =
    "/assets/images/man-measures-wood.jpg";

    return(
        <Parallax bgImage={image2} strength={-200}>
            <div style={{ height: 400 }}/>
        </Parallax>
    );

}

export default ParallaxBannerImage;