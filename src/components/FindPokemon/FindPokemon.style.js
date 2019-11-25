import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native';

export const Scroll = styled(ScrollView)`
  width: 100%;
`;

export const Linear = styled(LinearGradient)`
  flex: 1;
`;

export const Status = styled.StatusBar``;

export const Page = styled.SafeAreaView`
  align-items: center;
`;

export const Logo = styled.Image`
  height: 100px;
  margin-top: 20px;
  width: 90%;
`;

export const Form = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
  width: 90%;
`;

export const Input = styled.TextInput`
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #3b5ca5;
  font-size: 18px;
  height: 50px;
  padding-left: 10px;
  width: 75%;
`;

export const FormButton = styled.TouchableOpacity`
  align-items: center;
  background-color: #3b5ca5;
  border-radius: 5px;
  height: 50px;
  justify-content: center;
  width: 20%;
`;

export const Result = styled.View`
  align-items: center;
  height: 800px;
  width: 100%;
`;

export const Img = styled.Image`
  height: 200px;
  margin: 20px 0;
  width: 200px;
`;

export const ResultInfoPoke = styled.View`
  margin-bottom: 20px;
  width: 90%;
`;

export const ResultName = styled.Text`
  background-color: #3b5ca5;
  border-radius: 5px;
  color: #fff;
  font-size: 18px;
  height: 30px;
  line-height: 30px;
  margin-bottom: 10px;
  overflow: hidden;
  padding: 0 20px;
  text-align: center;
  width: auto;
`;

export const ResultInfoDiv = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;

export const ResultInfo = styled.Text`
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #3b5ca5;
  color: #3b5ca5;
  flex: 1;
  font-size: 18px;
  height: 30px;
  line-height: 30px;
  min-width: 50%;
  overflow: hidden;
  text-align: center;
  text-transform: capitalize;
`;

export const Text = styled.Text`
  font-size: 18px;
`;
