import { ReactElement } from 'react';
import { FieldValues, FormState, UseFormRegister } from 'react-hook-form';

export type TFormFieldsRenderer = {
  fields: Record<
    string,
    {
      type: 'text' | 'password' | 'textarea' | 'number' | 'radio' | 'select';
      label: string;
      placeholder: string;
      errorMessage?: string;
    }
  >;
  register: UseFormRegister<any>;
  formState: FormState<any>;
  description?: string;
  button_text?: string;

  children?: ReactElement;

  full?: boolean;
};
