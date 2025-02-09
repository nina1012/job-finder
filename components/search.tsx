import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { theme } from "../theme";

export const Search = () => {
  return (
    <View style={styles.search}>
      <TextInput
        style={styles.searchInput}
        placeholder="Search jobs"
        // value={}
        // onChangeText={setValue}
        // keyboardType="default"
        returnKeyType="search"
        // onSubmitEditing={handleSubmit}
      />
      <TouchableOpacity
        style={styles.searchBtn}
        onPress={() => console.log("pressed")}
      >
        <EvilIcons name="search" size={24} color={theme.colorWhite} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    gap: 8,
  },
  searchInput: {
    borderColor: theme.colorLightGrey,
    borderWidth: 2,
    padding: 12,
    marginVertical: 12,
    fontSize: 18,
    borderRadius: 10,
    backgroundColor: theme.colorWhite,
    flex: 1,
  },
  searchBtn: {
    backgroundColor: theme.colorPurple,
    color: theme.colorWhite,
    justifyContent: "center",
    alignItems: "center",
    margin: "auto",
    height: 48,
    width: 48,
    borderRadius: 10,
  },
});
