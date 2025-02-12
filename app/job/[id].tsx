import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { theme } from "../../theme";
import { API_URL } from "../../constants";
import { useFetch } from "../../hooks/useFetch";
import { Job } from "../../types";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

export default function JobDetails() {
  const { id } = useLocalSearchParams();

  const { data: jobs } = useFetch(API_URL);
  const job = jobs.find((job: Job) => job.id === id) as Job | undefined;
  if (!job) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Job not found</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View
          style={{
            padding: 10,
            paddingBottom: 20,
            marginTop: "auto",
            gap: 4,
          }}
        >
          <Text style={[styles.jobText, { fontWeight: "600", fontSize: 28 }]}>
            {job.job_category}
          </Text>
          <Text style={[styles.jobText]}>{job.location}</Text>
        </View>
      </ImageBackground>
      <Text>{job.company}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  heading: { fontSize: 24, fontWeight: "bold" },
  image: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
    marginRight: 8,
  },
  jobText: {
    color: theme.colorWhite,
    fontSize: 18,
  },
  errorText: {
    textAlign: "center",
    fontSize: 18,
    color: "red",
    marginTop: 50,
  },
});
