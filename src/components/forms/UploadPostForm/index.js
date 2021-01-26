import React from 'react';
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import './style.css'
import CircularProgress from "@material-ui/core/CircularProgress";

const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png"
];
const AddPostSchema = yup.object().shape({
    description: yup.string()
        .min(2, 'Too Short!')
        .max(200, 'Too Long!')
        .required('Required'),
    picture: yup.mixed()
        .required('Required')
        .test(
            "fileFormat",
            "Unsupported Format",
            (value) => {
                return value && SUPPORTED_FORMATS.includes(value[0].type)
            }
        )
        .test(
            "fileSize",
            "File too large",
            (value) => {
                return value && value[0].size <= 195386
            }
        )

})


export const UploadPostForm = props => {
    const {onSubmit, inProgress, onError} = props
    const {register, handleSubmit, errors, getValues} = useForm(
        {resolver: yupResolver(AddPostSchema), mode: "onChange", reValidateMode: 'onChange'}
    );

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'uploadPostForm'}>
            {onError ? <span>{onError}</span> : null}
            <div className="formGroup">
                <input type="text" ref={register} name={'description'} placeholder={'Опис для фотографії'}/>
                {errors.description && <p>{errors.description.message}</p>}
            </div>
            <div className="formGroup">
                <label>
                    <input type="file" ref={register} name={'picture'}/>
                    <span>+</span>
                </label>
                {getValues('picture') && getValues('picture')[0] && <div>{getValues('picture')[0].name}</div>}
                {errors.picture && <p>{errors.picture.message}</p>}
            </div>
            <button type="submit">{inProgress?< CircularProgress  color={"secondary"} style={{width: 15, height: 15}} />: 'Опублікувати'}</button>
        </form>
    );
}

