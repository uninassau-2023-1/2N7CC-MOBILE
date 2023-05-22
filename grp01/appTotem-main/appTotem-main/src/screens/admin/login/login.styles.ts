import styled from "styled-components/native";

import { TextInput } from "react-native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ContenModal = styled.View`
  width: 80%;
  background-color: white;
  border-radius: 10px;
  height: 323px;
  margin-top: 30px;

  align-items: center;
  justify-items: center;
  justify-content: space-around;
`;

export const Input = styled(TextInput)`
  width: 80%;
  border-bottom-width: 1px;
  margin: 15px 0px;
  padding: 5px 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #11a9ff;
  align-items: center;
  justify-content: center;

  width: 187px;
  height: 40px;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  line-height: 19px;
  align-items: center;
  text-align: center;
`;

export const Image = styled.Image``;

export const TextForgot = styled.Text`
  color: #b3b3b3;
  font-size: 13px;
  text-align: center;
`;
