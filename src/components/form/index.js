import React, { useState } from 'react';
import Button from '../button/style';
import InputStyle from '../input/style';
import Text from '../text/style';
import FormStyle from './style';

const Form = () => {
  const [user, setUser] = useState({
    email: 'mateusc@email.com',
    name: 'Mateus C',
  });

  const handleChange = ({ target }) => {
    setUser({
      ...user,
      [target.id]: target.value,
    });
  };

  const formIsInvalid = user.name.length === 0 || user.email.length === 0;

  return (
    <FormStyle>
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
      <InputStyle id="email" placeholder="E-mail" value={user.email} onChange={handleChange} />
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
    </FormStyle>
  );
};

export default Form;
