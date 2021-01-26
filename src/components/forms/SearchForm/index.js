import React from 'react';
import {useFormik} from 'formik';
import './style.css'
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import CancelIcon from "@material-ui/icons/Cancel";
import makeStyles from "@material-ui/core/styles/makeStyles";
import * as Yup from "yup";

const useStyle = makeStyles(theme => ({
    infoSideSearchInput: {
        '& .MuiOutlinedInput-root': {
            backgroundColor: 'rgb(250,250,250)',
            maxWidth: 200,
            fontSize: 14,
            color: 'rgb(34,34,34)',
        },
        '& .MuiOutlinedInput-input': {
            padding: '5px 0px 5px 5px',
        },
        '& .MuiInputAdornment-root': {
            '& .MuiIconButton-root':{
                padding: 0
            },
        }
    },
}))

const SearchSchema = Yup.object({
    searchInputValue: Yup.string().required('Required'),
});


export const SearchForm = () => {
    const classes = useStyle()
    const formik = useFormik({
        initialValues: {
            searchInputValue: '',
        },
        SearchSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },

    });

    const resetInputValue = () => {
        formik.resetForm()
    }

    return (
        <form onSubmit={formik.handleSubmit}>
            <TextField
                className={classes.infoSideSearchInput}
                id="searchInputValue"
                name="searchInputValue"
                type="text"
                placeholder='Пошук'
                variant={'outlined'}
                onChange={formik.handleChange}
                value={formik.values.searchInputValue}
                InputProps={{
                startAdornment: (
                    <SearchIcon/>
                ),
                endAdornment: (
                    <InputAdornment position={'end'}>
                        {formik.values.searchInputValue.length > 0 ?
                            <IconButton onClick={resetInputValue}><CancelIcon /></IconButton> : <IconButton disabled><CancelIcon/></IconButton>}
                    </InputAdornment>
                )
            }}/>

        </form>
    )
}