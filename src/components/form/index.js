import React, { useEffect, useState } from 'react';
import { Lottie } from '@crello/react-lottie';
import Button from '../button/style';
import InputStyle from '../input/style';
import Text from '../text/style';
import FormStyle from './style';
import sucessAnimation from '../../../public/animations/sucess.json';
import errorAnimation from '../../../public/animations/error.json';
import Box from '../box/style';

const FORM_STATES = {
  SUCESS: 'SUCESS',
  ERROR: 'ERROR',
};

const Form = () => {
  const [formSubmited, setFormSubmited] = useState(false);

  const [submitState, setSubmitState] = useState(FORM_STATES.ERROR);

  useEffect(() => {
    setTimeout(() => {
      setFormSubmited(false);
      setSubmitState(FORM_STATES.ERROR);
    }, 5000);
  }, [formSubmited, submitState]);

  const [user, setUser] = useState({
    username: 'mateusc@email.com',
    name: 'Mateus C',
  });

  const handleChange = ({ target }) => {
    setUser({
      ...user,
      [target.id]: target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    setFormSubmited(true);

    const userDTO = {
      username: user.username,
      name: user.name,
    };

    fetch('https://instalura-api.vercel.app/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDTO),
    }).then(async (response) => {
      if (response.ok) {
        return response.json();
      }
      const error = await response.text();
      throw new Error(error);
    }).then((responseJson) => {
      // eslint-disable-next-line no-console
      console.log(responseJson);
      setSubmitState(FORM_STATES.SUCESS);
    })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
        setSubmitState(FORM_STATES.ERROR);
      });
  };

  const formIsInvalid = user.name.length === 0 || user.username.length === 0;

  return (
    <FormStyle onSubmit={onSubmit}>
      <Text
        as="h1"
        typographyVariant="title"
        colorVariant="tertiary.main"
        textAlign="center"
      >
        Pronto para saber da vida dos outros?
      </Text>
      <Text
        as="p"
        typographyVariant="paragraph1"
        colorVariant="tertiary.light"
        textAlign="center"
      >
        Você está a um passo de saber tudo o que
        está rolando no bairro, complete seu cadastro agora!
      </Text>
      <InputStyle id="username" placeholder="E-mail" value={user.username} onChange={handleChange} />
      <InputStyle id="name" placeholder="Usuário" value={user.name} onChange={handleChange} />
      <Button
        typographyVariant="paragraph1"
        colorVariant="primary.main"
        disabled={formIsInvalid}
      >
        Cadastrar
      </Button>
      <Text
        as="p"
        typographyVariant="paragraph1"
        colorVariant="tertiary.light"
        textAlign="center"
      >
        Já tem uma conta?
        {' '}
        <Text
          as="a"
          href="https://www.alura.com.br/"
          typographyVariant="paragraph1"
          colorVariant="primary.main"
        >
          Entrar
        </Text>
      </Text>
      <Box display="flex" justifyContent="center">
        { formSubmited && submitState === FORM_STATES.SUCESS && (
        <Lottie
          width="50px"
          height="50px"
          config={{ animationData: sucessAnimation, loop: false, autoplay: true }}
        />
        )}
        { formSubmited && submitState === FORM_STATES.ERROR && (
        <Lottie
          width="50px"
          height="50px"
          config={{ animationData: errorAnimation, loop: false, autoplay: true }}
        />
        ) }
      </Box>
    </FormStyle>
  );
};

export default Form;
