import {MainLayout} from '../components/MainLayout/MainLayout';
import styles from './image.module.css'

export default function Image() {


    return (
        <MainLayout title={'Image'}>
            <div className={styles.backgroundImage} >
            </div>
        </MainLayout>
    )
}