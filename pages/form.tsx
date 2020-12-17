import {UploadForm} from '../components/UploadForm/UploadForm';
import {MainLayout} from '../components/MainLayout/MainLayout';

export default function Form() {
    return (
        <MainLayout title={'Form'}>
            <UploadForm/>
        </MainLayout>
    )
}