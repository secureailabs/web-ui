import React from 'react';

import { TFormFieldsRenderer } from './FormFieldsRenderer.types';

import Input from '@components/Input';
import Textarea from '@components/Textarea';
import Button from '@components/Button';

import { headerCase } from 'change-case';

const FormRenderer: React.FC<TFormFieldsRenderer> = ({
  fields,
  register,
  formState,
  full,
  description,
  children,
  button_text,
}) => {
  return (
    <>
      {description && description != '' && (
        <div className="formsfieldsdescription">{description}</div>
      )}
      {Object.entries(fields).map(([key, value], index) => {
        switch (value.type) {
          case 'textarea': {
            return (
              <Textarea
                key={index}
                name={key}
                full={full || true}
                placeholder={
                  value.placeholder
                    ? value.placeholder
                    : headerCase(key, { delimiter: ' ' })
                }
                label={value.label}
                rows={5}
                register={register}
                // type={value.type}
                // errorMessage={formState.errors[key]?.message}
              />
            );
            break;
          }
          case 'text':
          case 'password':
          case 'number':
            return (
              <Input
                {...register(key)}
                key={index}
                placeholder={
                  value.placeholder
                    ? value.placeholder
                    : headerCase(key, { delimiter: ' ' })
                }
                label={value.label}
                register={register}
                type={value.type}
                full={full || true}
                // errorMessage={formState.errors[key]?.message}
                // onChange={value?.onChange}
              />
            );
        }
      })}
      {children}
      <Button full={true} button_type="primary" type="submit">
        {button_text}
      </Button>
    </>
  );
};

export default FormRenderer;
