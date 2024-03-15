import { StaticImageData } from "next/image";
import photo1 from './photos/1.jpg'
import photo2 from './photos/2.jpg'
import photo3 from './photos/3.jpg'
import photo4 from './photos/4.jpg'
import photo5 from './photos/5.jpg'
import photo6 from './photos/6.jpg'



export type WonderImage = {
    id: string,
    name: string,
    src: StaticImageData,
    photographer: string,
    location: string
}

const wondersImages: WonderImage[] = [
    {
        id: '1',
        name: 'Monk',
        src: photo1,
        photographer: 'Gedeon',
        location: 'Zugdidi'
    },
    {
        id: '2',
        name: 'Samuari',
        src: photo2,
        photographer: 'Gedeon',
        location: 'Zugdidi'
    },
    {
        id: '3',
        name: 'Robot',
        src: photo3,
        photographer: 'Gedeon',
        location: 'Zugdidi'
    },
    {
        id: '4',
        name: 'Getto',
        src: photo4,
        photographer: 'Gedeon',
        location: 'Zugdidi'
    },
    {
        id: '5',
        name: 'Pank',
        src: photo5,
        photographer: 'Gedeon',
        location: 'Zugdidi'
    },
    {
        id: '6',
        name: 'Professor',
        src: photo6,
        photographer: 'Gedeon',
        location: 'Zugdidi'
    },
]


export default wondersImages