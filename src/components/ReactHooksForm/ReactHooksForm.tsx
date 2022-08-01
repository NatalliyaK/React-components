import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import './ReactHooksForm.css';

export type TformValues = {
  name: string;
  surname: string;
  data: Date;
  country: string;
  gender: string;
  agree: boolean;
  // picture: FileList;
  error: string;
};

export type Props = {
  addCharacter: Function;
};

const ReactHooksForm = ({ addCharacter }: Props) => {
  const {
    register,
    formState,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<TformValues>();

  const onSubmit: SubmitHandler<TformValues> = (dataValue) => {
    addCharacter(dataValue);

    reset();
  };

  return (
    <div className="form">
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">
          Name:
          <input
            type="text"
            {...register('name', {
              required: 'поле обязательно для заполнения',
              pattern: /[A-Za-z]/,
              minLength: {
                value: 3,
                message: 'минимум 3 символа',
              },
            })}
          />
        </label>
        <div>
          {errors?.name && <p style={{ color: 'red' }}>{errors?.name?.message || 'Error!'}</p>}
        </div>
        <label htmlFor="surname">
          Surname:
          <input
            type="text"
            {...register('surname', {
              required: 'поле обязательно для заполнения',
              pattern: /[A-Za-z]/,
              minLength: {
                value: 3,
                message: 'минимум 3 символа',
              },
            })}
          />
        </label>
        <div>
          {errors?.surname && (
            <p style={{ color: 'red' }}>{errors?.surname?.message || 'Error!'}</p>
          )}
        </div>
        <label htmlFor="data">
          Data:
          <input
            type="date"
            {...register('data', {
              required: 'поле обязательно для заполнения',
              valueAsDate: true,
            })}
          />
        </label>
        <div>
          {errors?.data && <p style={{ color: 'red' }}>{errors?.data?.message || 'Error!'}</p>}
        </div>
        <label htmlFor="country">
          Country:
          <select {...register('country')} className="country">
            <option value="Belarus">Belarus</option>
            <option value="Russia">Russia</option>
            <option value="Ukraine">Ukraine</option>
          </select>
        </label>
        <label htmlFor="gender">
          Gender
          <input
            {...register('gender', { required: 'поле обязательно для заполнения' })}
            type="radio"
            value="male"
          />{' '}
          Male
          <input
            {...register('gender', { required: 'поле обязательно для заполнения' })}
            type="radio"
            value="female"
          />{' '}
          Female
        </label>
        <div>
          {errors?.gender && <p style={{ color: 'red' }}>{errors?.gender?.message || 'Error!'}</p>}
        </div>
        <p> agree to the processing of data</p>
        <label className="switch">
          <input
            type="checkbox"
            {...register('agree', { required: 'поле обязательно для заполнения' })}
          />
          <span className="slider round"></span>
        </label>
        <div>
          {errors?.agree && <p style={{ color: 'red' }}>{errors?.agree?.message || 'Error!'}</p>}
        </div>
        {/*<label htmlFor="picture">*/}
        {/*  <input {...register('picture')} type="file" />*/}
        {/*</label>*/}
        {/*<div>{errors?.picture && <p style={{color: 'red'}}>{errors?.picture?.message || 'Error!'}</p>}</div>*/}
        <div>
          <button type="submit" className="submit" disabled={formState.isSubmitting}>
            submit
          </button>
          {formState.isSubmitted && <div>Form submitted successfully</div>}
        </div>
      </form>
    </div>
  );
};

export default ReactHooksForm;
