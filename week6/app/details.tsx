import {View , Text , Button , ScrollView ,StyleSheet} from 'react-native';
import {router} from 'expo-router';


export default function DetailsScreen() {
    return (
         <ScrollView contentContainerStyle={styles.scrollContent} >
            
         </ScrollView>
    );
}
const styles = StyleSheet.create({
  
  scrollContent: {
    padding: 20,
    gap: 15,
    alignItems: 'center'
  },
})