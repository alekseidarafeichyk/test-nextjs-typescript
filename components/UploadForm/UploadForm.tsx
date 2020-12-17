import React, {ChangeEvent, useRef, useState} from 'react';
import styles from './UploadForm.module.css'

export const UploadForm: React.FC = () => {

    const inputEl = useRef<HTMLInputElement>(null);

    const [urlImage, setUrlImage] = useState<string>('');
    const [filePath, setFilePath] = useState<string>('');

    const setNewPhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.value) {
            // @ts-ignore
            const path = e.target.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
            setFilePath(path);
        }

        if (e.target.files?.length) {
            const file: File = e.target.files[0];

            let reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = function () {
                if (this.result) {
                    setUrlImage(this.result as string);
                }
            };
        }
    }

    function handleClick() {
        if (inputEl && inputEl.current) {
            inputEl.current.click();
        }
    }

    const showElement = urlImage ?
        <img className={styles.imagePreview} src={urlImage} alt="image"/> : <span>No file chosen, yet.</span>

    return (
        <div className={styles.container}>
            <input type="file" onChange={setNewPhoto} ref={inputEl} accept={'image/*'}  hidden/>
            <button className={styles.customButton} onClick={handleClick}>Choose a file</button>
            <span>{filePath ? filePath : 'No file chosen, yet.'}</span>
            <div className={styles.sectionPreview}>
                {showElement}
            </div>
        </div>
    )
}