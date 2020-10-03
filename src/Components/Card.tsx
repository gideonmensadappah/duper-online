import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

type Props = {
  title: string;
  subtitle: string;
};
const CardHeader: React.FC<Props> = ({ title, subtitle }) => {
  return <View>{title}</View>;
};

const Card: React.FC<Props> = ({ title, subtitle }) => {
  return (
    <View>
      <CardHeader title={title} subtitle={subtitle} />
    </View>
  );
};

export default Card;
