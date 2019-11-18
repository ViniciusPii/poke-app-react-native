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
  Img,
  Status,
  ResultInfoPoke,
  ResultName,
  ResultInfo,
  Scroll,
} from './FindPokemon.style';

export default () => {
  const [primaryBgColor, setPrimaryBgColor] = useState('#fff');
  const [secondBgColor, setSecondBgColor] = useState('#fff');
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [namePokemon, setNamePokemon] = useState('');
  const [typePokemonBgColor, setTypePokemonBgColor] = useState();
  const [typePokemon, setTypePokemon] = useState([]);
  const [abilitiesPokemon, setAbilitiesPokemon] = useState([]);
  const [imgPokemon, setImgPokemon] = useState();

  const infoPokemon = async () => {
    try {
      if (namePokemon === '') {
        alert('Nome em Branco, não é um pokemon, joven!!!');
        return;
      }

      setLoading(true);
      const response = await api.get(
        `/pokemon/${namePokemon.trim().replace(' ', '-')}`
      );

      const { data } = response;

      setTypePokemon(data.types);
      setAbilitiesPokemon(data.abilities);
      setImgPokemon(data.sprites.front_default);
      if (data.types.length === 1) {
        setTypePokemonBgColor(data.types[0].type.name);
      } else {
        setTypePokemonBgColor(data.types[1].type.name);
      }
      setLoading(false);
      setShowResult(true);
      Keyboard.dismiss();
    } catch (error) {
      alert('Ah, não!! Isso não é um pokemon!!!');
      setNamePokemon('');
      setImgPokemon();
      setShowResult(false);
      setLoading(false);
      Keyboard.dismiss();
    }
  };

  const setColor = () => {
    switch (typePokemonBgColor) {
      case 'bug':
        setPrimaryBgColor('#719E3E');
        setSecondBgColor('#fff');
        break;
      case 'dragon':
        setPrimaryBgColor('#53A4CF');
        setSecondBgColor('#F06E56');
        break;
      case 'fairy':
        setPrimaryBgColor('#FDB9EA');
        setSecondBgColor('#fff');
        break;
      case 'fire':
        setPrimaryBgColor('#f60000');
        setSecondBgColor('#fcb045');
        break;
      case 'ghost':
        setPrimaryBgColor('#7A62A2');
        setSecondBgColor('#333');
        break;
      case 'ground':
        setPrimaryBgColor('#F7DE3E');
        setSecondBgColor('#fff');
        break;
      case 'normal':
        setPrimaryBgColor('#A4ADB0');
        setSecondBgColor('#fff');
        break;
      case 'psychic':
        setPrimaryBgColor('#F366B9');
        setSecondBgColor('#fff');
        break;
      case 'steel':
        setPrimaryBgColor('#9EB7B8');
        setSecondBgColor('#fff');
        break;
      case 'dark':
        setPrimaryBgColor('#717171');
        setSecondBgColor('#fff');
        break;
      case 'electric':
        setPrimaryBgColor('#EED534');
        setSecondBgColor('#fff');
        break;
      case 'fighting':
        setPrimaryBgColor('#D56723');
        setSecondBgColor('#fff');
        break;
      case 'flying':
        setPrimaryBgColor('#3CC7EF');
        setSecondBgColor('#BDB9B8');
        break;
      case 'grass':
        setPrimaryBgColor('#9BCB50');
        setSecondBgColor('#fff');
        break;
      case 'ice':
        setPrimaryBgColor('#50C3E7');
        setSecondBgColor('#fff');
        break;
      case 'poison':
        setPrimaryBgColor('#BA7FC9');
        setSecondBgColor('#fff');
        break;
      case 'rock':
        setPrimaryBgColor('#A38C20');
        setSecondBgColor('#fff');
        break;
      case 'water':
        setPrimaryBgColor('#4591C4');
        setSecondBgColor('#fff');
        break;
      default:
    }
  };

  useEffect(() => {
    setColor();
  }, [typePokemonBgColor]);

  const handleClick = () => {
    infoPokemon();
    setColor();
    setNamePokemon(namePokemon.trim());
  };

  return (
    <Linear colors={[primaryBgColor, secondBgColor]}>
      <Status />
      <Page>
        <Logo
          source={require('../../assets/images/logo.png')}
          resizeMode="stretch"
        />
        <Form>
          <Input
            placeholder="Search your Pokemon"
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            onChangeText={name => setNamePokemon(name.replace(/\d/g, ''))}
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
        <Img source={{ uri: imgPokemon }} resizeMode="stretch" />
        <Scroll>
          {showResult && (
            <Result>
              <ResultInfoPoke>
                <ResultName>Type</ResultName>
                {typePokemon.map(type => (
                  <ResultInfo key={type.type.name}>{type.type.name}</ResultInfo>
                ))}
              </ResultInfoPoke>
              <ResultInfoPoke>
                <ResultName>Abilities</ResultName>
                {abilitiesPokemon.map(ability => (
                  <ResultInfo key={ability.ability.name}>
                    {ability.ability.name}
                  </ResultInfo>
                ))}
              </ResultInfoPoke>
            </Result>
          )}
        </Scroll>
      </Page>
    </Linear>
  );
};
