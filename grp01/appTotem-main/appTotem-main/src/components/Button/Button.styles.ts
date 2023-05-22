import { moderateScale } from "react-native-size-matters";
import styled from "styled-components/native";

interface Props {
  propsColor?: string;
}

export const ButtonContainer = styled.TouchableOpacity<Props>`
  /* width: 50%; */
  /* height: 56px; */
  background-color: ${({ propsColor }) => (propsColor ? propsColor : "black")};
  min-width: 309px;
  min-height: 80px;

  margin: 5px 0px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: ${moderateScale(18)}px;
`;
