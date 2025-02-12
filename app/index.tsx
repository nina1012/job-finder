import {
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { theme } from "../theme";
import { Search } from "../components/search";
import { Categories } from "../components/categories";
import { useFetch } from "../hooks/useFetch";
import { API_URL } from "../constants";
import { useEffect, useState } from "react";
import { FeaturedJobs } from "../components/featured-jobs";
import { StatusBar } from "expo-status-bar";
import { Job } from "../types";
import { RecommendedJobs } from "../components/recommended-jobs";

export default function App() {
  const { data: jobs, isLoading } = useFetch(API_URL);

  const [activeCategory, setActiveCategory] = useState("Back-end Developer");
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);

  useEffect(() => {
    if (jobs && jobs.length > 0) {
      setFilteredJobs(
        jobs.filter((job: Job) => job.job_category === activeCategory)
      );
    }
  }, [activeCategory, jobs]);

  if (isLoading) {
    return (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={theme.colorPurple} />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={filteredJobs}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <>
            <Text style={styles.heading}>Find your job</Text>
            <Search />
            <Categories
              setActiveCategory={setActiveCategory}
              active={activeCategory}
            />
            <FeaturedJobs isLoading={isLoading} />
            <RecommendedJobs
              jobs={filteredJobs || jobs}
              isLoading={isLoading}
            />
          </>
        }
        renderItem={() => null}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    paddingVertical: 12,
  },
  heading: {
    fontSize: 28,
    fontWeight: "600",
    textTransform: "capitalize",
    marginTop: 20,
    marginHorizontal: 12,
  },
  loader: { flex: 1, justifyContent: "center", alignItems: "center" },
});
