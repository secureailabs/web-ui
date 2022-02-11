import React, { ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FormFieldsRenderer from '@components/FormFieldsRenderer';
import CardForm from '@components/CardForm';

import Page from '@layout/Page';

import SailLogo from '../../assets/logo.png';
import TCardForm from '@components/CardForm/CardForm.types';
import Margin from '@components/Margin';
import ImageBackground from '@components/ImageBackground';
import login_background from '@assets/login_background.jpg';

export default {
  title: 'Pages/Login',
  component: CardForm,
} as ComponentMeta<typeof CardForm>;

function NonEmptyCardForm(args: TCardForm): ReactElement {
  const { handleSubmit, register, formState } = useForm();
  return (
    <Page pageType="full">
      <ImageBackground image={login_background}>
        <CardForm {...args}>
          <>
            <form className="form">
              <FormFieldsRenderer
                register={register}
                button_text="Login"
                formState={formState}
                fields={{
                  Email: {
                    label: 'Email',
                    placeholder: 'Email',
                    type: 'text',
                  },
                  access_duration: {
                    label: 'Password',
                    placeholder: 'Password',
                    type: 'password',
                  },
                }}
              >
                <p
                  style={{
                    textAlign: 'right',
                    marginTop: '-1rem',
                    marginBottom: '2rem',
                  }}
                >
                  <a
                    href="./forgotpassword"
                    style={{
                      width: '100%',
                      fontSize: '1.4rem',
                      fontWeight: 500,
                      lineHeight: '1.7rem',
                      color: 'black',
                      textDecoration: 'None',
                    }}
                  >
                    Forgot Password?
                  </a>
                </p>
              </FormFieldsRenderer>
            </form>
            <Margin size={5} />
            <p
              style={{
                textAlign: 'center',
                fontWeight: 500,
                fontSize: '1.4rem',
                lineHeight: '1.7rem',
              }}
            >
              Don&apos;t have an account?&nbsp;&nbsp;
              <a
                href="./signup"
                style={{
                  color: 'var(--color-primary)',
                  textDecoration: 'None',
                }}
              >
                Signup
              </a>
            </p>
            <Margin size={5} />
          </>
        </CardForm>
      </ImageBackground>
    </Page>
  );
}

const Template: ComponentStory<typeof CardForm> = (args) => (
  <NonEmptyCardForm {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
  image: SailLogo,
};
