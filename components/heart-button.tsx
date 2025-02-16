import { StyleSheet, Text, TouchableOpacity } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { theme } from "../theme";

export const HeartButton = ({
  handleFavorite,
  isFavorited,
}: {
  handleFavorite: () => void;
  isFavorited: boolean;
}) => {
  return (
    <TouchableOpacity style={styles.heartButton} onPress={handleFavorite}>
      <AntDesign
        name={isFavorited ? "heart" : "hearto"}
        size={24}
        color={theme.colorPurple}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  heartButton: {
    width: "18%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
    borderColor: theme.colorPurple,
    borderWidth: 1,
    borderRadius: 20,
    shadowColor: "black",
    elevation: 20,
    marginVertical: 10,
  },
});
