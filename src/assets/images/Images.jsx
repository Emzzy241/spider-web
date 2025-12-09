// src/assets/images/Images.jsx (New location in src)
import stepImage1 from './step-1.jpg'; // Vite finds and bundles this
import stepImage2 from './step-2.jpg';
import stepImage3 from './step-3.jpg';

const IMAGES = {
    stepImage1,
    stepImage2,
    stepImage3
};

export default IMAGES;

// const IMAGES = {
//     stepImage1: new URL('./step-1.jpg', import.meta.url).href,
//     stepImage2: new URL('./step-2.jpg', import.meta.url).href,
//     stepImage3: new URL('./step-3.jpg', import.meta.url).href
// }

// export default IMAGES