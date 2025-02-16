import { Tabs, useRouter } from "expo-router";
import { theme } from "../theme";
import Entypo from "@expo/vector-icons/Entypo";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Pressable, StatusBar } from "react-native";

export default function Layout() {
  const router = useRouter();
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colorPurple,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <EvilIcons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: "favorite",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Fontisto name="favorite" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="job/[id]"
        options={{
          href: null,
          headerShown: true,
          headerTitle: "",
          headerLeft: () => (
            <Pressable onPress={() => router.push("/")}>
              <AntDesign
                name="leftcircleo"
                size={24}
                color={theme.colorPurple}
                style={{ marginLeft: 10 }}
              />
            </Pressable>
          ),
        }}
      />
      <StatusBar barStyle="dark-content" />
    </Tabs>
  );
}
