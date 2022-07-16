import React from 'react';

import { TFormFieldsRenderer } from './FormFieldsRenderer.types';

import Input from '@components/Input';
import Textarea from '@components/Textarea';
import Button from '@components/Button';

import { headerCase } from 'change-case';

import Text from '@components/Text';

import Dropzone from '@components/Dropzone';

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
          case 'image':
            return (
              <div>
                {value.label ? (
                  <>
                    <Text fontWeight={500} fontSize="14px" lineHeight={5}>
                      {value.label}
                    </Text>
                    <Dropzone />
                  </>
                ) : (
                  <></>
                )}
              </div>
            );

          case 'date':
            return <input type="date" {...register(key)} />;
          case 'text':
          case 'password':
          case 'number':
          default:
            return (
              <Input
                {...register(key)}
                key={index}
                placeholder={
                  value.placeholder
                    ? value.placeholder
                    : headerCase(key, { delimiter: ' ' })
                }
                label={
                  value.label
                    ? value.label
                    : headerCase(key, { delimiter: ' ' })
                }
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
      {button_text && (
        <Button full={true} button_type="primary" type="submit">
          {button_text}
        </Button>
      )}
    </>
  );
};

export default FormRenderer;
