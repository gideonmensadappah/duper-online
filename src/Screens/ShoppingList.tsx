import React, { useState, ChangeEvent, useCallback, useEffect } from "react";
import { View, TextInput, StyleSheet, Image, Text } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../App";
import { CardHeader, CardFooter } from "../Components/Card";
import ListRenderer from "../Components/ListRenderer";

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

const SearchInput: React.FC = () => {
  const [textToSearch, setTextToSearch] = useState<string>("Add Product");

  const changeTextSearch = useCallback(() => {
    setTextToSearch(textToSearch);
  }, []);

  return (
    <View style={{ padding: "10px", borderWidth: 2, borderColor: "solid" }}>
      <label
        style={{
          padding: "5px",
          position: "relative",
          top: "-20px",
          left: "20px",
          backgroundColor: "white",
        }}
      >
        <Text> Add Product</Text>
      </label>
      <TextInput
        style={{
          height: 40,
          borderColor: "#DADADA",
          borderRadius: 1,
          borderWidth: 1,
          marginBottom: "16px",
        }}
        placeholder={textToSearch}
        onChange={changeTextSearch}
        editable
        maxLength={40}
      />
    </View>
  );
};

const PickedUpProducts: React.FC<Product> = ({ title }) => {
  console.log(` pickedUp ${title}`);
  return (
    <View style={{ marginTop: "8px" }}>
      <Text>picked up</Text>
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
