import { Text, View, Button, StyleSheet, Pressable, ScrollView } from "react-native";
import { router } from 'expo-router'


const products = [
  { id: 1, name: 'Premium Bean', price: '450' },
  { id: 2, name: 'Green Tea Powder', price: '290' },
  { id: 3, name: 'Oat Milk 1L', price: '115' },


]
export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContent} >

      {products.map((item) => (
        <Pressable
          key={item.id}
          onPress={() => {
            router.push({
              pathname: '/product/[id]',
              params: {
                id: item.id,
                name: item.name,
                price: item.price
              }
            })
          }}
          style={styles.productsCard}
        >

          <Text>{item.name}</Text>
          <Text style={styles.price}>{item.price} บาท</Text>
        </Pressable>
      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titel: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollContent: {
    padding: 20,
    gap: 15,
    alignItems: 'center'
  },
  sectionTitle: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
  },
  productsCard: {
    padding: 15,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    width: '100%',
    borderRadius: 8,
    elevation: 4
  },
  price: {
    color: '#FF8C00',
    marginTop: 5,
  }
})
