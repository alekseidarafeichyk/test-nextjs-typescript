import React from 'react'
import styles from './Clock.module.css'
import {Field} from './Field/Field'

interface ClockProps {
    days: number
    hours: number
    minutes: number
    seconds: number
}

export const Clock: React.FC<ClockProps> = ({days, hours, minutes, seconds}) => {
    return (
        <div className={styles.clock}>
           <Field value={days} abbreviation={'d'}></Field>
           <Field value={hours} abbreviation={'h'}></Field>
           <Field value={minutes} abbreviation={'m'}></Field>
           <Field value={seconds} abbreviation={'s'}></Field>
        </div>
    )
}