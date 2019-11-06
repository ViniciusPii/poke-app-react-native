import React, { useState, useEffect } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
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
  const [loading, setLoading] = useState(false);
  const [namePokemon, setNamePokemon] = useState('');
  const [typePokemon, setTypePokemon] = useState('');

  const infoPokemon = async () => {
    try {
      setLoading(true);
      const response = await api.get(`/pokemon/${namePokemon}`);

      const { data } = response;

      setTypePokemon(data.types[0].type.name);
      setLoading(false);
      Keyboard.dismiss();
      console.log(data);
    } catch (error) {
      alert('Error!!');
      setNamePokemon('');
      setLoading(false);
      Keyboard.dismiss();
    }
  };

  const setColor = () => {
    if (typePokemon === 'bug') {
      setPrimaryBgColor('#719E3E');
      setSecondBgColor('#fff');
    } else if (typePokemon === 'dragon') {
      setPrimaryBgColor('#53A4CF');
      setSecondBgColor('#F06E56');
    } else if (typePokemon === 'fairy') {
      setPrimaryBgColor('#FDB9EA');
      setSecondBgColor('#fff');
    } else if (typePokemon === 'fire') {
      setPrimaryBgColor('#f60000');
      setSecondBgColor('#fcb045');
    } else if (typePokemon === 'ghost') {
      setPrimaryBgColor('#7A62A2');
      setSecondBgColor('#333');
    } else if (typePokemon === 'ground') {
      setPrimaryBgColor('#F7DE3E');
      setSecondBgColor('#fff');
    } else if (typePokemon === 'normal') {
      setPrimaryBgColor('#A4ADB0');
      setSecondBgColor('#fff');
    } else if (typePokemon === 'psychic') {
      setPrimaryBgColor('#F366B9');
      setSecondBgColor('#fff');
    } else if (typePokemon === 'steel') {
      setPrimaryBgColor('#9EB7B8');
      setSecondBgColor('#fff');
    } else if (typePokemon === 'dark') {
      setPrimaryBgColor('#717171');
      setSecondBgColor('#fff');
    } else if (typePokemon === 'electric') {
      setPrimaryBgColor('#EED534');
      setSecondBgColor('#fff');
    } else if (typePokemon === 'fighting') {
      setPrimaryBgColor('#D56723');
      setSecondBgColor('#fff');
    } else if (typePokemon === 'flying') {
      setPrimaryBgColor('#3CC7EF');
      setSecondBgColor('#BDB9B8');
    } else if (typePokemon === 'grass') {
      setPrimaryBgColor('#9BCB50');
      setSecondBgColor('#fff');
    } else if (typePokemon === 'ice') {
      setPrimaryBgColor('#50C3E7');
      setSecondBgColor('#fff');
    } else if (typePokemon === 'poison') {
      setPrimaryBgColor('#BA7FC9');
      setSecondBgColor('#fff');
    } else if (typePokemon === 'rock') {
      setPrimaryBgColor('#A38C20');
      setSecondBgColor('#fff');
    } else if (typePokemon === 'water') {
      setPrimaryBgColor('#4591C4');
      setSecondBgColor('#fff');
    }
  };

  useEffect(() => {
    setColor();
  }, [typePokemon]);

  const handleClick = () => {
    infoPokemon();
    setColor();
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
            onChangeText={name => setNamePokemon(name)}
            value={namePokemon}
          />
          <FormButton loading={loading} onPress={handleClick}>
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Icon name="search" size={30} color="#fff" />
            )}
          </FormButton>
        </Form>
      </Page>
    </Linear>
  );
};
