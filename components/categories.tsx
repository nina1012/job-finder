import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { theme } from "../theme";
import { categories } from "../constants";

export const Categories = ({
  active,
  setActiveCategory,
}: {
  active: string;
  setActiveCategory: (category: string) => void;
}) => {
  return (
    <View style={styles.categories}>
      <FlatList
        data={categories}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={
          <View>
            <Text>No categories to show</Text>
          </View>
        }
        contentContainerStyle={{ columnGap: 8 }}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              setActiveCategory(item);
            }}
            style={[
              styles.categoriesItem,
              index === 0
                ? { marginLeft: 12 }
                : categories.length - 1 === index
                  ? { marginRight: 12 }
                  : undefined,
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
