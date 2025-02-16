import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Pressable,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { theme } from "../../theme";
import { API_URL } from "../../constants";
import { useFetch } from "../../hooks/useFetch";
import { Job } from "../../types";
import { Loader } from "../../components/loader";
import { HeartButton } from "../../components/heart-button";
import { getFromStorage, saveToStorage } from "../../utils/storage";
import { useState } from "react";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

export const favoritedJobsStorageKey = "favorited-jobs";

export default function JobDetails() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const { data: jobs, isLoading, error } = useFetch(API_URL);
  const job = jobs.find((job: Job) => job.id === id) as Job | undefined;
  const [isFavorited, setIsFavorited] = useState<boolean>(false);

  if (!job) {
    return <Loader />;
  }
  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Something went wrong... 🙁</Text>
      </View>
    );
  }

  const handleFavorite = async (job: Job) => {
    const favorited = (await getFromStorage(favoritedJobsStorageKey)) || [];
    const isAlreadyFavorited = favorited.find((f: Job) => f.id === job.id);

    if (isAlreadyFavorited) {
      await saveToStorage(
        favoritedJobsStorageKey,
        favorited.filter((f: Job) => f.id !== job.id) // remove to unfavorite
      );
      setIsFavorited(false);
    } else {
      await saveToStorage(favoritedJobsStorageKey, [...favorited, job]);
      setIsFavorited(true);
    }
  };

  return (
    <ScrollView style={styles.container}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
          >
            <View
              style={{
                padding: 10,
                paddingBottom: 20,
                marginTop: "auto",
                gap: 4,
              }}
            >
              <Text
                style={[styles.jobText, { fontWeight: "600", fontSize: 28 }]}
              >
                {job?.job_category}
              </Text>
              <Text style={[styles.jobText]}>{job?.location}</Text>
            </View>
          </ImageBackground>
          <View style={styles.textContainer}>
            <Text style={styles.subheading}>Job description</Text>
            <Text>{job?.description}</Text>
            <Text style={[styles.subheading, { marginVertical: 10 }]}>
              Requirements ▶
            </Text>
            <View style={{ gap: 20 }}>
              <View>
                <Text
                  style={[
                    styles.subheading,
                    { fontSize: 18, marginBottom: 10 },
                  ]}
                >
                  Application deadline
                </Text>

                <Text style={styles.textGrey}>{job.application_deadline}</Text>
              </View>
              <View>
                <Text
                  style={[
                    styles.subheading,
                    { fontSize: 18, marginBottom: 10 },
                  ]}
                >
                  Employment type
                </Text>
                <Text style={styles.textGrey}>{job.employment_type}</Text>
              </View>
              <View>
                <Text
                  style={[
                    styles.subheading,
                    { fontSize: 18, marginBottom: 10 },
                  ]}
                >
                  Contact
                </Text>
                <Text style={styles.textGrey}>{job.contact}</Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginHorizontal: 12,
              gap: 10,
            }}
          >
            <Pressable onPress={() => router.push("/")} style={styles.button}>
              <Text style={styles.buttonText}>Apply now</Text>
            </Pressable>
            <HeartButton
              handleFavorite={() => handleFavorite(job)}
              isFavorited={isFavorited}
            />
          </View>
        </>
      )}
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
  subheading: {
    fontWeight: "600",
    fontSize: 20,
  },
  textGrey: { color: theme.colorGrey },
  textContainer: {
    paddingHorizontal: 12,
    paddingTop: 20,
    gap: 8,
  },
  button: {
    backgroundColor: theme.colorPurple,
    fontSize: 20,
    width: "80%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    borderRadius: 20,
    padding: 10,
  },
  buttonText: {
    color: theme.colorWhite,
    textTransform: "capitalize",
    fontWeight: "600",
    fontSize: 20,
  },
});
