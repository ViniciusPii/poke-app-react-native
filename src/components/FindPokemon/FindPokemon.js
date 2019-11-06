import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../clients/pokeApi';
import {
  Page,
  Form,
  Input,
  FormButton,
  Linear,
  Logo,
  Result,
  Text,
} from './FindPokemon.style';

export default () => {
  const [primaryBgColor, setPrimaryBgColor] = useState('#fff');
  const [secondBgColor, setSecondBgColor] = useState('#fff');
  const [namePokemon, setNamePokemon] = useState('');

  const findByPokemon = async () => {
    const response = await api.get(`/pokemon/${namePokemon}`);
  };

  const handleClick = () => {
    findByPokemon();
  };

  return (
    <Linear colors={[primaryBgColor, secondBgColor]}>
      <Page>
        <Logo
          source={require('../../assets/images/logo.png')}
          resizeMode="stretch"
        />
        <Form>
          <Input
            placeholder="Digite o Pokemon"
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            value={namePokemon}
            onChangeText={name => setNamePokemon(name)}
          />
          <FormButton onPress={handleClick}>
            <Icon name="search" size={30} color="#fff" />
          </FormButton>
        </Form>
        <Result />
      </Page>
    </Linear>
  );
};
