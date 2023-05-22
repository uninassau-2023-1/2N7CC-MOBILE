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

  padding: 0px 20px;

  align-items: center;
  justify-items: center;
  justify-content: space-around;
`;

export const Image = styled.Image``;

export const ButtonOptions = styled.TouchableOpacity`
  background-color: #d9d9d9;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 60px;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  font-size: 18px;
  color: black;
`;

export const TextForgot = styled.Text`
  color: #b3b3b3;
  font-size: 13px;
  text-align: center;
`;
