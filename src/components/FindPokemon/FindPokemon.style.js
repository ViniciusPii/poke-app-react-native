import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const Linear = styled(LinearGradient)`
  flex: 1;
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

export const Text = styled.Text`
  font-size: 18px;
`;
