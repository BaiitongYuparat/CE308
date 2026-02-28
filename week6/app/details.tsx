import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, router } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ProductScreen() {
    const { id, name, price, description } = useLocalSearchParams();

    return (
         <SafeAreaView style={styles.container}>

         <View style={styles.header}>
            <Pressable onPress={() => router.back()}>
                <Ionicons
                    name="arrow-back"
                    size={26}
                    color="white"
                />
            </Pressable>
            <Text style={styles.headerTitle}>
                Product Details
            </Text>
          </View>

            <View style={styles.details}>
                <Image style={styles.image} />
                <Text style={styles.title}> {name} </Text>
                <Text style={styles.price}> ฿{price}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: "#fff"
    },

    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    headerTitle: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 15,
    },
    details: {
        padding: 20,
    },
    price: {
        fontSize: 20,
        color: '#ff5722',
        marginBottom: 15,
        fontWeight: 'bold'
    },
    description: {
        fontSize: 16,
        color: '#666',
    }, 
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
        backgroundColor: '#eee'
    },
      header: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#ff5722",
        padding: 15,
    },

})