import "react-native-gesture-handler";

import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import PostsScreen from "./src/screens/PostsScreen";
import CreatePostScreen from "./src/screens/CreatePostScreen";
import EditPostScreen from "./src/screens/EditPostScreen";
import ShowPostScreen from "./src/screens/ShowPostScreen";

import { BlogProvider } from "./src/context/BlogContext";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <BlogProvider>
        <Stack.Navigator initialRouteName="Posts">
          <Stack.Screen
            name="Posts"
            component={PostsScreen}
            options={{
              headerTitle: "Publicações",
            }}
          />
          <Stack.Screen
            name="CreatePost"
            component={CreatePostScreen}
            options={{
              headerTitle: "Nova Publicação",
            }}
          />
          <Stack.Screen
            name="EditPost"
            component={EditPostScreen}
            options={{
              headerTitle: "Editar Publicação",
            }}
          />
          <Stack.Screen
            name="ShowPost"
            component={ShowPostScreen}
            options={{
              headerTitle: "Publicação",
            }}
          />
        </Stack.Navigator>
      </BlogProvider>
    </NavigationContainer>
  );
}
