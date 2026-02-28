import { Text, View, Button, StyleSheet, Pressable, ScrollView } from "react-native";
import { router } from 'expo-router'


const products = [
  { id: 1, name: 'Premium Bean', price: '450' ,description:'เมล็ดกาแฟคั่วกลางจากดอยช้าง หอมเข้ม รสชาติดี' },
  { id: 2, name: 'Green Tea Powder', price: '290', description:'ผงชาเขียวมัทฉะแท้ 100% เหมาะสำหรับเครื่องดื่มและเบเกอรี่'},
  { id: 3, name: 'Oat Milk 1L', price: '115' , description:'นมโอ๊ตเพื่อสุขภาพ ไม่มีแลคโตส หอมมันอร่อย' },


]
export default function HomeScreen() {
  return (
    
    <ScrollView contentContainerStyle={styles.scrollContent} >

      {products.map((item) => (
        <Pressable
          key={item.id}
          onPress={() => {
            router.push({
              pathname: '/details',
              params: {
                id: item.id,
                name: item.name,
                price: item.price,
                description: item.description,
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
