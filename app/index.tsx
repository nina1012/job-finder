import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { theme } from "../theme";
import { Search } from "../components/search";
import { Categories } from "../components/categories";
import { useFetch } from "../hooks/useFetch";
import { API_URL } from "../constants";
import { useState } from "react";
import { FeaturedJobs } from "../components/featured-jobs";
import { StatusBar } from "expo-status-bar";
import { Job } from "../types";

export default function App() {
  const { data: jobs, isLoading } = useFetch(API_URL);

  const [activeCategory, setActiveCategory] = useState("Back-end Developer");
  const [filteredJobs, setFilteredJobs] = jobs.filter(
    (job: Job) => job.job_category === activeCategory
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Find your job</Text>
      <Search />
      {isLoading ? (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <ActivityIndicator size="large" color={theme.colorPurple} />
        </View>
      ) : (
        <>
          <Categories
            setActiveCategory={setActiveCategory}
            active={activeCategory}
          />
          <FeaturedJobs isLoading={isLoading} />
        </>
      )}

      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colorWhite,
    paddingVertical: 20,
    flex: 1,
  },
  heading: {
    fontSize: 36,
    fontWeight: "600",
    textTransform: "capitalize",
    marginTop: 20,
  },
});
