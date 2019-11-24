import React, { useState, useEffect } from 'react';
import { Keyboard, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '../../clients/pokeApi';
import colors from '../../config/colors';
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
  ResultInfoDiv,
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
  const [weaknesses, setWeaknesses] = useState([]);

  const infoPokemon = async () => {
    setLoading(true);

    try {
      const response = await api.get(
        `/pokemon/${namePokemon.trim().replace(' ', '-')}`
      );

      const { types, abilities, sprites } = response.data;

      types.length === 1
        ? setTypePokemonBgColor(types[0].type.name)
        : setTypePokemonBgColor(types[1].type.name);

      setTypePokemon(types);
      setAbilitiesPokemon(abilities);
      setImgPokemon(sprites.front_default);
      setLoading(false);
      setShowResult(true);
    } catch (error) {
      setShowResult(false);
      alert('Não foi possível encontrar o seu Pokemon!!!');
      setLoading(false);
    }
  };

  const setColor = () => {
    switch (typePokemonBgColor) {
      case 'bug':
        setPrimaryBgColor(colors.greenBug);
        setSecondBgColor(colors.white);
        break;
      case 'dragon':
        setPrimaryBgColor(colors.blueDragon);
        setSecondBgColor(colors.redDragon);
        break;
      case 'fairy':
        setPrimaryBgColor(colors.pinkFairy);
        setSecondBgColor(colors.white);
        break;
      case 'fire':
        setPrimaryBgColor(colors.redFire);
        setSecondBgColor(colors.orangeFire);
        break;
      case 'ghost':
        setPrimaryBgColor(colors.purpleGhost);
        setSecondBgColor(colors.grayGhost);
        break;
      case 'ground':
        setPrimaryBgColor(colors.yellowGround);
        setSecondBgColor(colors.white);
        break;
      case 'normal':
        setPrimaryBgColor(colors.grayNormal);
        setSecondBgColor(colors.white);
        break;
      case 'psychic':
        setPrimaryBgColor(colors.pinkPsychic);
        setSecondBgColor(colors.white);
        break;
      case 'steel':
        setPrimaryBgColor(colors.graySteel);
        setSecondBgColor(colors.white);
        break;
      case 'dark':
        setPrimaryBgColor(colors.blackDark);
        setSecondBgColor(colors.white);
        break;
      case 'electric':
        setPrimaryBgColor(colors.yellowElectric);
        setSecondBgColor(colors.white);
        break;
      case 'fighting':
        setPrimaryBgColor(colors.orangeFighting);
        setSecondBgColor(colors.white);
        break;
      case 'flying':
        setPrimaryBgColor(colors.blueFlying);
        setSecondBgColor(colors.grayFlying);
        break;
      case 'grass':
        setPrimaryBgColor(colors.greenGrass);
        setSecondBgColor(colors.white);
        break;
      case 'ice':
        setPrimaryBgColor(colors.blueIce);
        setSecondBgColor(colors.white);
        break;
      case 'poison':
        setPrimaryBgColor(colors.purplePoison);
        setSecondBgColor(colors.white);
        break;
      case 'rock':
        setPrimaryBgColor(colors.goldRock);
        setSecondBgColor(colors.white);
        break;
      case 'water':
        setPrimaryBgColor(colors.blueWater);
        setSecondBgColor(colors.white);
        break;
      default:
    }
  };

  const weaknessesByType = async () => {
    const response = await api.get(`/type/${typePokemonBgColor}`);

    const { damage_relations } = response.data;

    const { double_damage_from } = damage_relations;

    setWeaknesses(double_damage_from);
  };

  useEffect(() => {
    setColor();
  }, [typePokemonBgColor]);

  useEffect(() => {
    weaknessesByType();
  }, [typePokemonBgColor]);

  const handleClick = () => {
    if (namePokemon === '') {
      alert('Compo vazio não é um nome de Pokemon!!!');
      setShowResult(false);
      return;
    }
    infoPokemon();
    setColor();
    weaknessesByType();
    setNamePokemon(namePokemon.trim());
    Keyboard.dismiss();
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
        {showResult && (
          <Img source={{ uri: imgPokemon }} resizeMode="stretch" />
        )}
        {showResult && (
          <Scroll>
            <Result>
              <ResultInfoPoke>
                <ResultName>Type</ResultName>
                <ResultInfoDiv>
                  {typePokemon.map(type => (
                    <ResultInfo key={type.type.name}>
                      {type.type.name}
                    </ResultInfo>
                  ))}
                </ResultInfoDiv>
              </ResultInfoPoke>
              <ResultInfoPoke>
                <ResultName>Abilities</ResultName>
                <ResultInfoDiv>
                  {abilitiesPokemon.map(ability => (
                    <ResultInfo key={ability.ability.name}>
                      {ability.ability.name}
                    </ResultInfo>
                  ))}
                </ResultInfoDiv>
              </ResultInfoPoke>
              <ResultInfoPoke>
                <ResultName>Weaknesses</ResultName>
                <ResultInfoDiv>
                  {weaknesses.map(weakness => (
                    <ResultInfo key={weakness.name}>{weakness.name}</ResultInfo>
                  ))}
                </ResultInfoDiv>
              </ResultInfoPoke>
            </Result>
          </Scroll>
        )}
      </Page>
    </Linear>
  );
};
