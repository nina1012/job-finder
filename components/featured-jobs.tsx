import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { theme } from "../theme";
import { featuredJobs } from "../constants";
import { Link } from "expo-router";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

type FeaturedJobsProps = {
  isLoading: boolean;
};

export const FeaturedJobs = ({ isLoading }: FeaturedJobsProps) => {
  const jobs = featuredJobs;

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 12,
        }}
      >
        <Text style={styles.heading}>Featured jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>{" "}
      </View>
      <FlatList
        data={jobs}
        contentContainerStyle={styles.contentContainer}
        renderItem={({ item, index }) =>
          isLoading ? (
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
            <View
              style={[
                styles.jobContainer,
                index === 0
                  ? { marginLeft: 12, marginRight: 8 }
                  : { marginRight: 12, marginLeft: 4 },
              ]}
              key={item.id}
            >
              <Link href={`/job/${item.id}`}>
                <ImageBackground
                  source={image}
                  resizeMode="cover"
                  style={styles.jobImage}
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
                      style={[
                        styles.jobText,
                        { fontWeight: "600", fontSize: 18 },
                      ]}
                    >
                      {item.job_category}
                    </Text>
                    <Text style={[styles.jobText]}>{item.location}</Text>
                  </View>
                </ImageBackground>
              </Link>
            </View>
          )
        }
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={
          <View style={{ alignItems: "center", marginTop: 20 }}>
            <Text>No jobs to show</Text>
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
  headerBtn: {
    fontSize: 16,
    fontFamily: "400",
    color: theme.colorGrey,
  },
  jobContainer: {
    flexDirection: "row",
    marginVertical: 8,
  },
  jobImage: {
    width: 300,
    height: 200,
    resizeMode: "cover",
    borderRadius: 20,
    marginRight: 8,
    overflow: "hidden",
  },
  jobText: {
    color: theme.colorWhite,
  },
});
