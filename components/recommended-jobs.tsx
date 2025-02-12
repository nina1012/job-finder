import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Image,
} from "react-native";
import { theme } from "../theme";
import { Job } from "../types";
import { Link } from "expo-router";

const image = { uri: "https://ingamejob.com/assets/images/company.png" };

type RecommendedJobsProps = {
  jobs: Job[];
  isLoading: boolean;
};

export const RecommendedJobs = ({ jobs, isLoading }: RecommendedJobsProps) => {
  return (
    <View style={{ marginLeft: 12 }}>
      <Text style={styles.heading}>Recommended for you </Text>
      <Text
        style={{
          color: theme.colorPurple,
          fontWeight: "600",
          marginVertical: 8,
          textDecorationColor: theme.colorPurple,
          textDecorationStyle: "solid",
        }}
      >
        {jobs.length} jobs available
      </Text>
      <FlatList
        data={jobs}
        contentContainerStyle={styles.contentContainer}
        ListEmptyComponent={
          <View>
            <Text>No recommended jobs at the moment... 😬</Text>
          </View>
        }
        renderItem={({ item }) => {
          return isLoading ? (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ActivityIndicator />
            </View>
          ) : (
            <Link href={`/job/${item.id}`}>
              <View style={[styles.jobContainer]} key={item.company}>
                <Image source={image} style={styles.jobImage} />
                <View
                  style={{ justifyContent: "center", gap: 8, marginLeft: 10 }}
                >
                  <Text style={{ fontWeight: 700 }}>{item.job_category}</Text>
                  <Text style={{ color: theme.colorGrey }}>
                    {item.location.length > 30
                      ? item.location.substring(0, 20) + " ..."
                      : item.location}
                  </Text>
                </View>
              </View>
            </Link>
          );
        }}
        ListFooterComponent={
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
              marginBottom: 20,
            }}
          >
            <Text style={{ color: theme.colorPurple }}>
              It looks like you reached the end of list{" "}
            </Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingBottom: 24,
  },
  heading: {
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 4,
  },
  jobContainer: {
    flexDirection: "row",
    marginVertical: 8,
    gap: 4,
  },
  jobImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  jobText: {
    color: theme.colorWhite,
  },
});
