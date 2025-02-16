import { useEffect, useState } from "react";
import { StyleSheet, FlatList, Text, View } from "react-native";
import { favoritedJobsStorageKey } from "./job/[id]";
import { getFromStorage } from "../utils/storage";
import { theme } from "../theme";
import { Job } from "../types";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";

export default function Favorite() {
  const [favoritedJobs, setFavoritedJobs] = useState<Job[]>([]);

  useEffect(() => {
    const init = async () => {
      const jobs = (await getFromStorage(favoritedJobsStorageKey)) || [];
      setFavoritedJobs(jobs);
    };
    init();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.heading}>Favorite</Text>
      </View>
      <FlatList
        contentContainerStyle={styles.container}
        ListEmptyComponent={
          <View>
            <Text>You haven't saved any jobs yet.</Text>
          </View>
        }
        data={favoritedJobs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }: { item: Job }) => (
          <Link href={`/job/${item.id}`}>
            <View style={styles.card}>
              <Text style={[styles.cardText, { fontWeight: "700" }]}>
                Position: {item.job_category}
              </Text>
              <Text style={[styles.cardText]}>
                Application deadline: {item.application_deadline}
              </Text>
            </View>
          </Link>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    gap: 10,
    paddingVertical: 12,
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
    paddingHorizontal: 12,
    marginTop: 8,
  },
  card: {
    flex: 1,
    width: "100%",
    height: 60,
    padding: 8,
    paddingHorizontal: 12,
    marginHorizontal: 12,
    backgroundColor: theme.colorPurple,
  },
  cardText: {
    color: theme.colorWhite,
  },
});
