import React, { PureComponent, useCallback, useEffect, useState } from "react";
import { FlatList, View, Image, Text } from "react-native";
import { Product } from "../Screens/ShoppingList";
import { CheckBox, CheckBoxProps } from "react-native-elements";
const img = require("../Assets/images/benAndJerry.png");

type ListRendererProp = {
  products: Array<Product>;
};
type ProductsToByList = {
  product: Product;
  setProductsList?: React.Dispatch<React.SetStateAction<Product[] | null>>;
  productsList?: Array<Product> | null;
};
type PickedUpListProp = {
  product: Product;
  setProductsList?: React.Dispatch<React.SetStateAction<Product[] | null>>;
  productsList?: Array<Product> | null;
};

const ProductsToByList: React.FC<ProductsToByList> = ({
  product,
  productsList,
  setProductsList,
}) => {
  const { id, pickedUp, title, category, description, price } = product;

  const productPressed = useCallback(
    (checked, product) => {
      if (productsList && setProductsList) {
        const index = productsList.findIndex((product) => product.id === id);
        const beforeProduct = productsList.slice(0, index);
        const afterProduct = productsList.slice(index + 1, productsList.length);
        const pickedProduct = { ...product, pickedUp: true };

        const newProductsList: Array<Product> = [
          ...beforeProduct,
          pickedProduct,
          ...afterProduct,
        ];
        console.log(newProductsList);
        setProductsList(newProductsList);
      }
    },
    [productsList]
  );

  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Image source={img} style={{ width: 84, height: 56, borderRadius: 4 }} />
      <Text>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </Text>
      <CheckBox
        checked={pickedUp}
        onIconPress={() => productPressed(pickedUp, product)}
      />
    </View>
  );
};

const PickedUpList: React.FC<PickedUpListProp> = ({
  product,
  productsList,
  setProductsList,
}) => {
  const { id, pickedUp, title, category, description, price } = product;

  const productPressed = useCallback((checked, product) => {
    console.log("back to list");
    if (productsList && setProductsList) {
      const returnedProduct = { ...product, pickedUp: false };
      const index = productsList?.findIndex((product) => product.id === id);
      const beforeProduct = productsList.slice(0, index);
      const afterProduct = productsList.slice(index + 1, productsList.length);

      const newProductsList: Array<Product> = [
        ...beforeProduct,
        returnedProduct,
        ...afterProduct,
      ];

      setProductsList(newProductsList);
    }
  }, [] as Array<Product>);

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Image source={img} style={{ width: 84, height: 56, borderRadius: 4 }} />
      <Text>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </Text>
      <CheckBox
        checked={pickedUp}
        onIconPress={() => productPressed(pickedUp, product)}
      />
    </View>
  );
};

const ListRenderer: React.FC<ListRendererProp> = ({ products }) => {
  const [productsList, setProductsList] = useState<Array<Product> | null>(
    products
  );

  const [toBuyList, setToBuyList] = useState<Array<Product> | null>(null);
  const [pickedUpList, setPickedUpList] = useState<Array<Product> | null>(null);

  useEffect(() => {
    if (productsList) {
      const pickedUpList = productsList.filter(({ pickedUp }) => pickedUp);
      const buyingList = productsList.filter(({ pickedUp }) => !pickedUp);
      setPickedUpList(pickedUpList);
      setToBuyList(buyingList);
    }
  }, [productsList]);

  return (
    <View>
      <FlatList
        data={toBuyList}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <ProductsToByList
            setProductsList={setProductsList}
            productsList={productsList}
            product={item}
          />
        )}
      ></FlatList>
      <Text
        style={{
          marginTop: 10,
          marginBottom: 5,
        }}
      >
        PickedUp List
      </Text>
      <FlatList
        data={pickedUpList}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <PickedUpList
            setProductsList={setProductsList}
            productsList={productsList}
            product={item}
          />
        )}
      ></FlatList>
    </View>
  );
};

export default ListRenderer;
