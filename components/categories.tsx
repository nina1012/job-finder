import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { theme } from "../theme";

export const Categories = ({
  categories,
  active,
  setActiveCategory,
}: {
  categories: string[];
  active: string;
  setActiveCategory: (category: string) => void;
}) => {
  return (
    <View style={styles.categories}>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: 8 }}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              setActiveCategory(item);
            }}
            style={[
              styles.categoriesItem,
              active === item ? styles.activeCategory : undefined,
            ]}
          >
            <Text
              style={[
                styles.categoryText,
                active === item ? styles.activeCategoryText : undefined,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categories: {
    flexDirection: "row",
    marginVertical: 8,
  },
  categoriesItem: {
    borderColor: theme.colorPurple,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderRadius: 50,
  },
  activeCategory: {
    backgroundColor: theme.colorPurple,
  },
  categoryText: {
    color: theme.colorBlack,
  },
  activeCategoryText: {
    color: theme.colorWhite,
  },
});
