import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Page, Form, Input, FormButton, Linear } from './FindPokemon.style';

export default () => {
  const [primaryBgColor, setPrimaryBgColor] = useState('#fff');
  const [secondBgColor, setSecondBgColor] = useState('#fff');

  return (
    <Linear colors={[primaryBgColor, secondBgColor]}>
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
    </Linear>
  );
};
