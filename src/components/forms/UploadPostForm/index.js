import React from 'react';
import {useForm} from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import './style.css'

const SUPPORTED_FORMATS = [
    "image/jpg",
    "image/jpeg",
    "image/png"
];


export const UploadPostForm = () => {
    const AddPostSchema = yup.object().shape({
        description: yup.string()
            .min(2, 'Too Short!')
            .max(60, 'Too Long!')
            .required('Required'),
        picture: yup.mixed()
            .required('Required')
            .test(
                "fileSize",
                "File too large",
                (value) => {
                    return value && value[0].size <= 195386
                }
            )
            .test(
                "fileFormat",
                "Unsupported Format",
                (value) => {
                    return value && SUPPORTED_FORMATS.includes(value[0].type)
                }
            )
    })
    const {register, handleSubmit, errors, getValues} = useForm({resolver: yupResolver(AddPostSchema), mode: "onChange", reValidateMode: 'onChange'});


    const onSubmit = data => {
        console.log(data)
     };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={'uploadPostForm'}>
            <div className="formGroup">
                <input type="text" ref={register} name={'description'} placeholder={'Опис для фотографії'}/>
                {errors.description && <p>{errors.description.message}</p>}
            </div>
            <div className="formGroup">
                <label>
                    <input type="file" ref={register} name={'picture'}/>
                    <span>+</span>
                </label>
                {getValues('picture') && getValues('picture')[0] && <div>{getValues('picture')[0].name}</div> }
                {errors.picture && <p>{errors.picture.message}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

