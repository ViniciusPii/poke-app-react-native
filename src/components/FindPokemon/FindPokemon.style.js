import styled from 'styled-components/native';

export const Page = styled.SafeAreaView`
  align-items: center;
`;

export const Form = styled.View`
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
  margin-top: 50px;
`;

export const Input = styled.TextInput`
  width: 50px;
  height: 50px;
  border: 1px solid #6b6b6b;
  border-radius: 5px;
  width: 75%;
  font-size: 18px;
  padding-left: 10px;
`;

export const FormButton = styled.TouchableOpacity`
  width: 20%;
  height: 50px;
  border-radius: 5px;
  background-color: #0017ff;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 18px;
`;
