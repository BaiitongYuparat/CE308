import React from "react";
import { Text, View, StyleSheet, ScrollView, FlatList } from "react-native";

const LIKE = [
  { id: '1', title: 'Fourth Nattawat' },
  { id: '2', title: 'ไปคอนเสิร์ค' },
  { id: '3', title: 'ไปงาน Event Fourth' },
  { id: '4', title: 'ดูซีรีย์' },
  { id: '5', title: 'ดู TikTok' },
  { id: 'ุ', title: 'ชาเย็น' },
  { id: '6', title: 'ชอบหนุ่มตี๋ ขาว สูง รวย' },
  { id: '7', title: 'ไปเที่ยว' },
]

const NOLIKE = [
  { id: '1', title: 'การที่กดบัตรคอนไม่ได้' },
  { id: '2', title: 'คนเยอะ' },
  { id: '3', title: 'รถติด' },
  { id: '4', title: 'ซีรีย์ขาดตอน' },
  { id: '5', title: 'คนโกหก' },
  { id: 'ุ', title: 'ไอ้เจน' },
  { id: '6', title: 'ไอ้เปา' },
]

const NAME = [
  { id: '1', title: 'ยุพารัตน์ ปลั่งกลาง' },
  { id: '2', title: 'ใบตอง' },
  { id: '3', title: '66112238@dpu.ac.th' },
]



const App = () => {

  const renderItem = ({ item }: {
    item: {
      id: string; title: string
    }
  }) => (
    <View style={styles.itemContainer}>
      <View style={styles.dot} />
      <Text style={styles.itemText}>{item.title}</Text>
    </View>
  )

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          My Profile
        </Text>
      </View>
      <View style={styles.row}>
        <View style={[styles.box, { backgroundColor: '#FFE5EC' }]}>
          <Text style={styles.boxText}>
            รหัส {'\n'}66112238
          </Text>
        </View>
        <View style={[styles.box, { backgroundColor: '#FFE5EC' }]}>
          <Text style={styles.boxText}>
            คณะ {'\n'} วิศวกรรมศาสตร์
          </Text>
        </View>
        <View style={[styles.box, { backgroundColor: '#FFE5EC' }]}>
          <Text style={styles.boxText}>
            สาขา {'\n'} คอมพิวเตอร์
          </Text>
        </View>
      </View>

      <View style={styles.contentSection}>
        <Text style={styles.title}>ข้อมูลส่วนตัว:</Text>

        {NAME.map((info, index) => (
          <View key={info.id} style={styles.listItem}>
            <Text>
              {info.title}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.contentSection}>
        <Text style={styles.title}>การศึกษา:</Text>
      </View>

      <View style={styles.listItem}>
        <Text>
          ระดับอุดมศึกษา: มหาวิทยาลัยธุรกิจบัณฑิตย์
        </Text>
      </View>
      <View style={styles.listItem}>
        <Text>
          สาขา: วิศวกรรมคอมพิวเตอร์ (CE)
        </Text>
      </View>

      <View style={styles.contentSection}>
        <Text style={styles.title}>ที่อยู่:</Text>
      </View>

      <View style={styles.listItem}>
        <Text>
          หอA&N ซอย ประชาชื่นนนทบุรี 8, ตำบลบางเขน เมืองนนทบุรี นนทบุรี 11000
        </Text>
      </View>


      <View style={styles.contentSection}>
        <FlatList
          data={LIKE}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={<Text style={styles.headerFlatList}>
            สิ่งที่ชอบ
          </Text>}
        >
        </FlatList>
      </View>
      <View style={styles.contentSection}>
        <FlatList
          data={NOLIKE}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListHeaderComponent={<Text style={styles.headerFlatList}>
            สิ่งที่ไม่ชอบ
          </Text>}
        >
        </FlatList>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 20,
  },
  header: {
    height: 100,
    backgroundColor: '#FFB3C6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  box: {
    flex: 1,
    height: 100,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  boxText: {
    color: '#FB6F92',
    fontWeight: '600',
    textAlign: 'center',
  },
  contentSection: {
    marginTop: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#FF8FAB'
  },
  contentSectionFlatList: {
    marginTop: 20,
  },
  headerFlatList: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    backgroundColor: '#FFC2D1',
    borderRadius: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#FFB3C6'
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'pink',
    marginRight: 10,
  },
  itemText: {
    fontSize: 15,

  },
})
export default App;