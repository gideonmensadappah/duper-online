import React from "react";
import { View, Image, Button, Text, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import Icon from "./Icon";
import Avatar from "./Avatar";
import { StackNavigationProp } from "@react-navigation/stack";

const img = require("../Assets/images/benAndJerry.png");

type Props = {
  listId: string;
  title: string;
  subtitle?: string;
  actionButton?: React.ReactNode;
  children?: React.ReactNode;
  navigation: StackNavigationProp<any, "About">;
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

const ShareButton: React.FC = () => {
  return (
    <TouchableOpacity>
      <Icon name="share" />
    </TouchableOpacity>
  );
};

export const CardHeader: React.FC<{ title: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "16px",
      }}
    >
      <View>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </View>
      <ShareButton />
    </View>
  );
};

const CardContent: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {Array.from({ length: 4 }).map((_, index) => {
        return (
          <Image
            key={index}
            style={{
              marginBottom: "1px",
              width: "50%",
              height: "35vw",
              maxHeight: "200px",
            }}
            source={img}
          />
        );
      })}
    </View>
  );
};

export const CardFooter: React.FC = () => {
  return (
    <View
      style={{
        marginTop: "20px",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
      }}
    >
      <Text
        style={{
          fontFamily: "Roboto Mono",
          fontStyle: "normal",
          fontWeight: "normal",
          fontSize: 9,
          lineHeight: 16,
          color: "#828282",
        }}
      >
        ( Shared with )
      </Text>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        {Array.from({ length: 4 }, (_, index) => (
          <Avatar key={index} name="face" />
        ))}
      </View>
    </View>
  );
};

const Card: React.FC<Props> = ({ listId, title, subtitle, navigation }) => {
  return (
    <TouchableOpacity
      accessible={true}
      onPress={() =>
        navigation.navigate("ShoppingList", {
          listId,
          title,
          subtitle,
        })
      }
    >
      <View
        style={{
          paddingVertical: "14px",
          paddingHorizontal: "16px",
          marginBottom: "20px",
          backgroundColor: "white",
          borderRadius: 4,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.2,
          shadowRadius: 1.41,

          elevation: 2,
        }}
      >
        <CardHeader title={title} subtitle={subtitle} />
        <CardContent />
        <CardFooter />
      </View>
    </TouchableOpacity>
  );
};

export default Card;
