import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Page, Text, Form, Input, FormButton } from './FindPokemon.style';

export default () => {
  return (
    <Page>
      <Form>
        <Input
          placeholder="Digite o Pokemon"
          autoCapitalize="none"
          autoCompleteType="off"
          autoCorrect={false}
        />
        <FormButton>
          <Icon name="search" size={30} color="#fff" />
        </FormButton>
      </Form>
    </Page>
  );
};
