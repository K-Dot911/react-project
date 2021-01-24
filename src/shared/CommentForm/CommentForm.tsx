import React, {ChangeEvent, FormEvent, useState} from 'react';
import styles from './commentform.css';
import {Field, Formik} from "formik";


export function CommentForm() {

    function validateText(value: any) {
        let error;
        if (value.length <= 3) {
            error = 'Введите больше 3-x символов';
        }
        return error;
    }

    return(
        <Formik initialValues={{text: ''}}
        onSubmit={data => {
            console.log(data);
        }}>
            {({errors, values, handleBlur, touched, handleChange, handleSubmit, isValidating}) => (
            <form className={styles.form} onSubmit={handleSubmit}>
                <Field
                    name="text"
                    validate={validateText}
                    value={values.text}
                    onChange={handleChange}
                    className={styles.input}
                    aria-invalid={errors.text ? 'true': undefined}
                />
                {errors.text && touched.text && <div>{errors.text}</div>}
                <button disabled={errors.text ? true : false} type="submit" className={styles.button}>Комментировать</button>
            </form>
        )}

        </Formik>
    )
}


// export function CommentForm() {
//     const [value, setValue] = useState('');
//     const [touched, setTouched] = useState(false);
//     const [valueError, setValueError] = useState('');
//
//     function handleSubmit(event: FormEvent) {
//         event.preventDefault();
//         setTouched(true);
//         setValueError(validateValue());
//
//         const isFormValid = !validateValue();
//         if (!isFormValid) return;
//         alert('Форма отправлена');
//     }
//
//     function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
//         setValue(event.target.value);
//     }
//
//     function validateValue() {
//         if (value.length <= 3) return 'Введите больше 3-x символов'
//         return '';
//     }
//   return (
//     <form className={styles.form} onSubmit={formik.handleSubmit}>
//       <textarea
//           className={styles.input}
//           value={value}
//           onChange={handleChange}
//           aria-invalid={valueError ? 'true': undefined}
//       />
//           {touched && valueError && (<div>{valueError}</div>)}
//       <button type="submit" className={styles.button}>Комментировать</button>
//     </form>
//   );
// }
