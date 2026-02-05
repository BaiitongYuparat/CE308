week 4

4.1

{ id: "1", productname: "Banana", price: 2000, pcs: 10, btnSize: "sm", btnColor: "primary" },
  { id: "2", productname: "Mango",  price: 2000, pcs: 10, btnSize: "md", btnColor: "secondary" },
  { id: "3", productname: "Apple",  price: 2000, pcs: 10, btnSize: "lg", btnColor: "danger" },
สร้างข้อมูลตามที่กำหนด

data={items} //array สินค้าไปให้ FlatList ใช้งาน
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <View className="p-4 bg-gray-300 rounded-lg m-2">
                //ดึงค่าจาก object ของสินค้าแต่ละชิ้นมาแสดง
                    <Text className="text-gray-800 text-4xl">ชื่อสินค้า : {item.productname}</Text>
                    <Text className="text-base text-gray-800">ราคา : {item.price}</Text>
                    <Text className="text-base text-gray-800 ">จำนวน : {item.pcs}</Text>
                    <CustomButton  title="สั่งซื้อ" size={item.btnSize} variant={item.btnColor} onPress={() => alert(item.productname)} />
               </View>
  ดึงปุ่มมาใช้จาก CustomButton
