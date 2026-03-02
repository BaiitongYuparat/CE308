import { useEffect , useState } from "react";
import { Alert , ScrollView , Text , TextInput , TouchableOpacity , View } from "react-native";
import { useLocalSearchParams , useRouter } from "expo-router";
import { getBookByID , updateBook } from "../../services/bookService";
import axios from "axios";


export default function EditBookScreen() {
    const router = useRouter();
    const {id} = useLocalSearchParams<{id: string}>(); //ดึง id จาก url

    const [title , setTitle] = useState(''); //สถานะสำหรับเก็บข้อมูลหนังสือ
    const [author , setAuthor] = useState(''); //สถานะสำหรับเก็บข้อมูลผู้เขียน
    const [description , setDescription] = useState(''); //สถานะสำหรับเก็บคำอธิบาย
    const [price , setPrice] = useState(''); //สถานะสำหรับเก็บราคาหนังสือ


    useEffect(() => {
        const fetchBook = async () => {
            try {
                const book = await getBookByID(id); //ดึงข้อมูลหนังสือจาก api โดยใช้ id
                setTitle(String(book.title)); //ตั้งค่าข้อมูลหนังสือในสถานะ
                setAuthor(String(book.author)); //ตั้งค่าข้อมูลปู้เขียนในสถานะ
                setDescription(String(book.description)); //ตั้งค่าคำอธิบายในสถานะ
                setPrice(String(book.price)) //ตั้งค่าราคาในสถานะ
            }
            catch {
                Alert.alert('Error' , 'Failed to load book '); //แสดงข้อความผิดพลาดหากไม่สามารถโหลดข้อมูลหนังสือได้
                router.back(); //หลับไปหน้าก่อนหน้า
            }
        }

        const handleUpdate = async () => {
            if (!title || !author || !price ) { //เช็คว่าฟิลล์ที่จำเป็นถูกกรอกครบถ้วนไหม
                Alert.alert('Validation' , 'Title , Author and Price are required')
                return;
            }

            try {
                await updateBook(id, {
                    title,
                    author,
                    description,
                    price : parseFloat(price)
                })
                Alert.alert('Success' , 'Book update!');
                router.back();
            }
            catch {
                Alert.alert('Error' , 'Failed to updata book')
            }
        }

        return (
            <ScrollView> 

            </ScrollView>
        )
    })
}
