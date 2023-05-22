import { moderateScale } from "react-native-size-matters";
import styled from "styled-components/native";

interface TypePassword {
  type?: string;
}

export const Container = styled.View`
  flex: 1;
  padding: 0px 20px;
  align-items: center;
  padding-top: 45px;
`;

export const CardPassword = styled.View`
  background-color: white;
  border-radius: 10px;
  flex-direction: row;
  align-items: center;
  height: 60px;
  width: 160px;
  margin: 10px;
`;

export const CardBallLeft = styled.View<TypePassword>`
  background-color: ${(props) => (props.type === "SP" ? "red" : "green")};
  border-top-right-radius: 80px;
  border-bottom-right-radius: 80px;
  height: 100%;
  justify-content: center;
  width: 50px;
  align-items: center;
`;

export const TextRight = styled.Text`
  color: black;
  font-size: ${moderateScale(14)}px;
`;
export const TextGuice = styled.Text`
  color: black;
  font-size: ${moderateScale(17)}px;
`;

export const TextType = styled.Text`
  color: white;
  font-size: ${moderateScale(17)}px;
`;

export const ContainerText = styled.View`
  width: 75%;
  height: 100%;
  justify-content: center;
  padding-left: 5px;
`;

export const Divider = styled.View`
  margin: 10px 0px;
`;
