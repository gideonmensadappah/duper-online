import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import Card from "../Components/Card";

type Props = {
  navigation: StackNavigationProp<any, "About">;
};

const data = Array.from({ length: 4 }, (_, index) => ({
  id: `${index}`,
  title: `List ${index}`,
  subtitle: "20 Items",
}));
const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        keyExtractor={({ id }) => id}
        data={data}
        renderItem={({ item: { id, title, subtitle } }) => (
          <Card
            title={title}
            listId={id}
            navigation={navigation}
            subtitle={subtitle}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F1F1",
    alignItems: "stretch",
    justifyContent: "center",
    paddingHorizontal: "8px",
    paddingVertical: "16px",
  },
  list: {
    flex: 1,
  },
});

export default HomeScreen;
