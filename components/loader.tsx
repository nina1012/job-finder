import { ActivityIndicator, StyleSheet, View } from "react-native";
import { theme } from "../theme";

export const Loader = () => {
  return (
    <View style={style.loader}>
      <ActivityIndicator />
    </View>
  );
};

const style = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
});
