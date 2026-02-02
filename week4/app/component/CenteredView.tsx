import { View } from 'react-native';

type CenteredViewProp = {
    children : React.ReactNode;
    backgroundColor? : string;
};

export const CenteredView = ({ children ,  backgroundColor = "bg-gray-100"}: CenteredViewProp ) => {
    return <View className={`flex-1 justify-center items-center ${backgroundColor}`}>
        {children}
    </View>
}