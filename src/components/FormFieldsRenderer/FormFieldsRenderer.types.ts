import { ReactElement } from 'react';
import { Control, FormState, UseFormRegister } from 'react-hook-form';

export type TFormFieldsRenderer = {
  fields: Record<
    string,
    {
      type?:
        | 'text'
        | 'password'
        | 'image'
        | 'textarea'
        | 'number'
        | 'radio'
        | 'select'
        | 'image'
        | 'date';
      values?: Array<string>;
      defaultInputValue?: string;
      label?: string;
      placeholder?: string;
      errorMessage?: string;
    }
  >;
  register: UseFormRegister<any>;
  // Control is only necessary when using a Select input
  control?: Control;
  formState: FormState<any>;
  description?: string;
  button_text?: string;

  children?: ReactElement;

  full?: boolean;
};
