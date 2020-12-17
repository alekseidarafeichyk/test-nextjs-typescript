import React from 'react'
import styles from './Field.module.css'

export const Field: React.FC<FieldProps> = ({value, abbreviation}) => {
    return (
        <span className={styles.field}>
            {`${value} ${abbreviation}`}
        </span>
    )
}

// interfaces

interface FieldProps {
    value: number
    abbreviation: string
}
