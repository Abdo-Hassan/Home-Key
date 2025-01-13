import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Text className="font-rubik-bold text-5xl">Test font</Text>
      <Link href="/sign-in">Sign In</Link>
      <Link href="/Explore">Explore</Link>
      <Link href="/properties/1">Property</Link>
    </View>
  );
}
