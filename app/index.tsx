import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import { theme } from "../theme";
import { Search } from "../components/search";
import { Categories } from "../components/categories";
import { useFetch } from "../hooks/useFetch";
import { API_URL } from "../constants";
import { useState } from "react";

export default function App() {
  const { data } = useFetch(API_URL);
  const categories = [
    "Back-end Developer",
    "Data Scientist",
    "Data Administrator",
    "DevOps Engineer",
    "Front-end Developer",
    "Full-stack Developer",
    "Mobile App Developer",
    "QA Engineer",
    "Security Engineer",
    "UI/UX Designer",
  ];
  const [activeCategory, setActiveCategory] = useState("Back-end Developer");
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Find your job</Text>
      <Search />
      <Categories
        setActiveCategory={setActiveCategory}
        categories={categories}
        active={activeCategory}
      />
      <Text>{JSON.stringify(data)}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colorWhite,
    paddingVertical: 20,
    paddingHorizontal: 12,
    flex: 1,
  },
  heading: {
    fontSize: 36,
    fontWeight: "600",
    textTransform: "capitalize",
    paddingHorizontal: 12,
    marginTop: 8,
  },
});
