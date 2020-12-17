import {GetStaticPropsContext} from 'next';
import {MainLayout} from '../components/MainLayout/MainLayout';


export default function Request({photos}: RequestPropsType) {
    console.log(photos)

    let elements = photos.map(el => <span>{el.albumId}</span>)
    return (
        <MainLayout title={'Request'}>
            <h1>Запрос на сервере(response in console.log)</h1>
            <style jsx>
                {`h1 {
                  text-align: center;
                }`}
            </style>
        </MainLayout>
    )
}


Request.getInitialProps = async (context: GetStaticPropsContext) => {
    const requestURL = 'https://jsonplaceholder.typicode.com/photos';

    const response = await fetch(requestURL);
    const photos: Array<PhotosType> = await response.json();

    return {photos}
}

// interfaces

interface RequestPropsType {
    photos: PhotosType[]
}

interface PhotosType {
    albumId: number
    id: number
    title: string
    url: string
    thumbnailUrl: string
}
