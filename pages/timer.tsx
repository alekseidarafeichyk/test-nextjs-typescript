import {MainLayout} from '../components/MainLayout/MainLayout';
import {useEffect, useState} from 'react';
import {Clock} from '../components/Clock/Clock';

export default function Timer() {

    const deadline = new Date('Dec 18, 2020 13:00:00').getTime();
    const oneSecond = 1000;

    const [distance, setDistance] = useState<number>(deadline - new Date().getTime());
    const [isShowElement, setIsShowElement] = useState<boolean>(false);

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    useEffect(() => {
        if (distance < oneSecond) {
            setIsShowElement(true);
            return
        }

        const interval = setInterval(() => {
            if (distance > oneSecond) {
                setDistance(deadline - new Date().getTime());
            }
        }, oneSecond)

        return () => {
            clearInterval(interval);
        }
    }, [distance])


    const isShowClock = (isShowElement || distance < oneSecond) ?
        null : <Clock days={days} hours={hours} minutes={minutes} seconds={seconds}/>

    const isShowDomElement = (isShowElement && distance > oneSecond) ?
        <div>Lorem</div> : null


    return (
        <MainLayout title={'Timer'}>
            {isShowClock}
            {isShowDomElement}
        </MainLayout>
    )
}