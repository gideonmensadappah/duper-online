import React, { useState, ChangeEvent, useCallback, useEffect } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import { CardHeader, CardFooter } from "../Components/Card";
import ListRenderer from "../Components/ListRenderer";
import Icon from "../Components/Icon";
import { Entypo } from "@expo/vector-icons";

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  price: number;
  pickedUp: boolean;
}

type Props = StackScreenProps<RootStackParamList, "ShoppingList">;

const productsMeta: Array<Product> = [
  {
    category: "men clothing",
    description: "Your perfect pack",
    id: 1,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    title: "Fjallraven ",
    pickedUp: false,
  },
  {
    category: "men clothing",
    description: "Your perfect pack",
    id: 3,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    title: "Fjallraven ",
    pickedUp: false,
  },
  {
    category: "men clothing",
    description: "Your perfect pack for everyday use ",
    id: 2,
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    price: 109.95,
    title: "prada",
    pickedUp: true,
  },
];
type AddIcon = {
  bgColor: string;
  color: string;
};
const AddProductIcon: React.FC<AddIcon> = ({ bgColor, color }) => {
  return (
    <View
      style={{
        backgroundColor: bgColor,
        borderRadius: 36 / 2,
        width: 36,
        height: 36,
        right: 40,
      }}
    >
      <Entypo
        style={{
          width: 20,
          height: 14,
          padding: 6,
        }}
        name="add-to-list"
        color={color}
        size={20}
      />
    </View>
  );
};
const SearchInput: React.FC = () => {
  const [textToSearch, setTextToSearch] = useState<string>("Add Product");
  const [IconBgColor, setBgColor] = useState<string>("white");
  const [color, setColor] = useState<string>("#666666");
  const changeTextSearch = useCallback(() => {
    setTextToSearch(textToSearch);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
        marginBottom: "16px",
      }}
    >
      <TextInput
        style={{
          flex: 1,
          height: 56,
          borderColor: "#DADADA",
          borderRadius: 1,
          borderWidth: 1,
          fontSize: 16,
          padding: 16,
        }}
        onFocus={() => {
          setBgColor("#2F80ED");
          setColor("white");
        }}
        onBlur={() => {
          setBgColor("white");
          setColor("#666666");
        }}
        textAlignVertical="center"
        placeholder={textToSearch}
        onChange={changeTextSearch}
        editable
        maxLength={40}
      />
      <AddProductIcon color={color} bgColor={IconBgColor} />
    </View>
  );
};

const ShoppingList: React.FC<Props> = ({
  navigation,
  route: {
    params: { listId, title, subtitle },
  },
}) => {
  return (
    <View
      style={{
        paddingVertical: "14px",
        paddingHorizontal: "16px",
        marginTop: "16px",
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
      <CardHeader title={title} subtitle="20 items" />
      <SearchInput />
      <ListRenderer products={productsMeta} />
      <CardFooter />
    </View>
  );
};

export default ShoppingList;

const styles = StyleSheet.create({});
