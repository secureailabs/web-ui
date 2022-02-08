import React, { ReactElement } from 'react';
import { Story, Meta } from '@storybook/react';

import Input from './Input.component';
import TInput from './Input.types';

import { useForm } from 'react-hook-form';

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

function InputForm(args: TInput): ReactElement {
  const { handleSubmit, register, formState } = useForm();
  return <Input {...args} register={register} />;
}

const Template: Story<TInput> = (args) => <InputForm {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  label: 'test',
  placeholder: 'test',
};
