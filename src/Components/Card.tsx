import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

type Props = {
  title: string;
  subtitle?: string;
  actionButton?: React.ReactNode;
  children?: React.ReactNode;
};
const Title = styled(Text)`
  font-family: Arial;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
`;
const SubTitle = styled(Text)`
  font-family: Arial;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
`;
const CardHeader: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <View>
      <Title>{title}</Title>
      <SubTitle>{subtitle}</SubTitle>
    </View>
  );
};

const Card: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <View>
      <CardHeader title={title} subtitle={subtitle} />
    </View>
  );
};

export default Card;
