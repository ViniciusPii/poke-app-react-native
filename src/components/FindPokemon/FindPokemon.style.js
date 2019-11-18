import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView } from 'react-native';

export const Scroll = styled(ScrollView)`
  width: 100%;
`;

export const Linear = styled(LinearGradient)`
  flex: 1;
`;

export const Status = styled.StatusBar`
  background-color: #3b5ca5;
`;

export const Page = styled.SafeAreaView`
  align-items: center;
`;

export const Logo = styled.Image`
  width: 90%;
  margin-top: 20px;
  height: 100px;
`;

export const Form = styled.View`
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Input = styled.TextInput`
  height: 50px;
  border: 1px solid #3b5ca5;
  border-radius: 5px;
  width: 75%;
  font-size: 18px;
  padding-left: 10px;
  background-color: #fff;
`;

export const FormButton = styled.TouchableOpacity`
  width: 20%;
  height: 50px;
  border-radius: 5px;
  background-color: #3b5ca5;
  align-items: center;
  justify-content: center;
`;

export const Result = styled.View`
  align-items: center;
  width: 100%;
  height: 740px;
`;

export const Img = styled.Image`
  width: 200px;
  height: 200px;
  margin: 20px 0;
`;

export const ResultInfoPoke = styled.View`
  width: 90%;
  margin-bottom: 20px;
`;

export const ResultName = styled.Text`
  background-color: #3b5ca5;
  color: #fff;
  width: auto;
  height: 30px;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  line-height: 30px;
  font-size: 18px;
  margin-bottom: 10px;
  padding: 0 20px;
`;

export const ResultInfo = styled.Text`
  background-color: #fff;
  width: auto;
  height: 30px;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  line-height: 30px;
  font-size: 18px;
  padding: 0 20px;
  margin-bottom: 10px;
  text-transform: capitalize;
  border: 1px solid #3b5ca5;
  color: #3b5ca5;
`;

export const Text = styled.Text`
  font-size: 18px;
`;
