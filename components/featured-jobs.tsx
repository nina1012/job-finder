import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { theme } from "../theme";
import { featuredJobs } from "../constants";

const image = { uri: "https://legacy.reactjs.org/logo-og.png" };

export const FeaturedJobs = ({ isLoading }: { isLoading: boolean }) => {
  const jobs = featuredJobs;

  return (
    <View style={{ marginTop: 10, marginBottom: 20 }}>
      <Text style={styles.heading}>Featured jobs</Text>
      <FlatList
        data={jobs}
        renderItem={({ item }) =>
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
            <View style={styles.jobContainer} key={item.company}>
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
            </View>
          )
        }
        horizontal
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={
          <View>
            <Text>No categories to show</Text>
          </View>
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "600",
    marginVertical: 8,
  },
  jobContainer: {
    flexDirection: "row",
    marginVertical: 8,
    borderColor: "#f00",
    borderWidth: 1,
  },
  jobImage: {
    width: 300,
    height: 200,
    resizeMode: "center",
    overflow: "hidden",
    borderRadius: 20,
    marginRight: 8,
  },
  jobText: {
    color: theme.colorWhite,
  },
});
