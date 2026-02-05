import {Text, TouchableOpacity} from 'react-native';

type CustomButtonProps = {
    title: string;
    onPress: () => void;
    variant?: "primary" | "secondary" | "danger" ; //สีตามปุ่ม
    size: "sm" | "md" | "lg" ; //ขนาดปุ่ม 
}

export const CustomButton = ({
    title ,
    onPress,
    variant = "primary", //ค่าเริ่มต้น
    size = "md", //ค่าเริ่มต้น
}: CustomButtonProps) => {
    const variantClasses = {
        primary: "bg-blue-500 ",
        secondary: "bg-gray-500",
        danger: "bg-red-500 "
    };

    const sizeClasses ={
        sm: "px-2 py-1 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-6 py-3 text-lg"
    }

    return (
        <TouchableOpacity 
        className= {[
            variantClasses[variant],
            sizeClasses[size],
            "rounded-lg  active:bg-opacity-70  items-center justify-center "
        ].join(' ')}
        onPress={onPress}
        >
            <Text className='text-white font-semibold'>{title}</Text> 
        </TouchableOpacity>
    )
}
