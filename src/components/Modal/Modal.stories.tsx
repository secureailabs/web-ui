import React, { ReactElement } from 'react';
import { Story, Meta } from '@storybook/react';
import { useForm } from 'react-hook-form';

import Input from '@components/Input';
import Margin from '@components/Margin';
import Modal from './Modal.component';
import FormFieldsRenderer from '@components/FormFieldsRenderer';

import Button from '@components/Button';
import type TModal from './Modal.types';

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

function ModalForm(args: TModal): ReactElement {
  const { handleSubmit, register, formState } = useForm();
  return (
    <Modal {...args}>
      <form className="form">
        <FormFieldsRenderer
          register={register}
          button_text="Request Data Access"
          formState={formState}
          fields={{
            title: {
              label: 'Title',
              placeholder: 'Title',
              type: 'text',
            },
            access_duration: {
              label: 'Access Duration (days)',
              placeholder: 'Access Duration (days)',
              type: 'text',
            },
            comments: {
              label: 'Request Comments',
              placeholder: 'Comments',
              type: 'textarea',
            },
          }}
        />
      </form>
    </Modal>
  );
}

const Template: Story<TModal> = (args) => <ModalForm {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  close: () => {},
  title: 'Request Dataset Access',
  description:
    "To request access to this dataset, eter the title of your research, for how long you'll need access to the data, and any comments regarding your request.",
};
