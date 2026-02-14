import "./global.css";
import React, { useState } from "react";
import { Text, View, ScrollView, KeyboardAvoidingView, Platform, Alert, TouchableNativeFeedback, Keyboard, TouchableOpacity } from "react-native";
import CudtomButtom from "./component/CustomButton";
import CustomInput from "./component/CustomInput";
import Checkbox from "./component/Checkbox";
import RadioGroup from "./component/RadioGroup";
import DateTimePicker from "@react-native-community/datetimepicker";



interface FromData {
  fullname: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  address: string;
  gender: string;
  birthDate: Date | null;
}

interface FromError {
  fullname?: string;
  email?: string;
  phone?: string;
  password?: string;
  confirmPassword?: string;
  address?: string;
  gender?: string;
  birthDate?: string;
}

const formatDate = (date: Date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};


export default function Index() {

  const [formData, setfromdata] = useState<FromData>({
    fullname: "",
    email: "",
    phone: "",
    password: '',
    confirmPassword: "",
    address: "",
    gender: "",
    birthDate: null,
  });

  const [errorss, setErrors] = useState<FromError>({});

  const [touched, setTouched] = useState<{ [key: string]: boolean }>({})

  const [isLoading, setIsLoading] = useState(false)

  const [isAccepted, setIsAccepted] = useState(false);

  const [checkboxTouched, setCheckboxTouched] = useState(false);

  const [showDatePicker, setShowDatePicker] = useState(false);




  const validateField = ( name: keyof FromData, value: string | Date | null ): string | undefined => {
    switch (name) {
      case "fullname":
        if (typeof value !== "string" || !value.trim()) {
          return "กรอกชื่อ - นามกุล ";
        }
        if (value.trim().length < 3) {
          return "ชื่อ - นามกุล ต้องมีอย่างน้อย 3 ตัวอักษร";
        }
        return undefined;

      case "email":
        if (typeof value !== "string" || !value.trim()) {
          return "กรอกอีเมล";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return "รูปแบบอีเมลไม่ถูกต้อง";
        }
        return undefined;

      case "phone":
        if (typeof value !== "string" || !value.trim()) {
          return "กรอกเบอร์โทรศัพท์";
        }
        const phoneRegex = /^[0-9]{10}$/;
        if (!phoneRegex.test(value)) {
          return "เบอร์โทรศัพท์ต้องเป็นตัวเลข 10 หลัก";
        }
        return undefined;

      case "password":
        if (typeof value !== "string" || !value.trim()) {
          return "กรอกรหัสผ่าน"
        }
        if (value.length < 6) {
          return "รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร"
        }
        return undefined;

      case "confirmPassword":
        if (typeof value !== "string" || !value.trim()) {
          return "ยืนยันรหัสผ่าน"
        }
        if (value !== formData.password) {
          return "รหัสผ่านไม่ตรงกัน"
        }
        return undefined

      case "address":
        if (typeof value !== "string" || !value.trim()) {
          return "กรอกที่อยู่"
        }
        if (value.trim().length < 10) {
          return "ต้องกรอกอย่างน้อย 10 ตัวอักษร";
        }
        return undefined
      case "gender":
        if (!formData.gender) {
          return "กรุณาเลือกเพศ";
        }
        return undefined;
      case "birthDate":
        if (!value) {
          return "กรุณาเลือกวันเกิด";
        }
        return undefined;


      default:
        return undefined;

    }
  }

  const handleChange = (name: keyof FromData, value: string) => {
    setfromdata((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({
        ...prev,
        [name]: error,
      }))
    }
  }

  const handleBlur = (name: keyof FromData) => {
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    const error = validateField(name, formData[name]);
    setErrors((prev) => ({
      ...prev,
      [name]: error,
    }));
  };

  const validataForm = (): boolean => {
    const newErrors: FromError = {};
    let isValid = true;

    (Object.keys(formData) as Array<keyof FromData>).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) {
        newErrors[key] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);

    const allTouched: { [key: string]: boolean } = {};
    Object.keys(formData).forEach((key) => {
      allTouched[key] = true;
    });

    setTouched(allTouched);

    return isValid;
  };



  const handleSubmit = async () => {
    Keyboard.dismiss();

    const isFormValid = validataForm();

    if (!isAccepted) {
      setCheckboxTouched(true);
    }
    if (!isFormValid || !isAccepted) {
      Alert.alert("ข้อมูลไม่ถูก")
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      Alert.alert("สำเร็จ",
        `ลงทะเบียนสำเร็จ\n\ชื่อ : ${formData.fullname} \nอีเมล : ${formData.email} \nเบอร์โทร :${formData.phone}`,
        [
          {
            text: "ตรวจสอบ",
            onPress: () => console.log("Form Data: ", formData)
          },
          {
            text: "รีเซ็ตฟอร์ม",
            onPress: handleReset,
            style: "cancel"
          }
        ]
      )
    }, 2000)
  }

  const handleReset = () => {
    setfromdata({
      fullname: "",
      email: "",
      phone: "",
      password: '',
      confirmPassword: "",
      address: "",
      gender: "",
      birthDate: null,
    });

    setErrors({});
    setTouched({});
  }


  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (

    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1"
      keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 20}
    >

      <TouchableNativeFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          className="flex-1 bg-gray-50"
          contentContainerClassName="pb-8"
          keyboardShouldPersistTaps="handled"
        >
          <View className="bg-blue-600 pt-16 pb-8 px-6">
            <Text className="text-white text-3xl font-bold">
              ลงทะเบียนสมาชิก
            </Text>
            <Text className="text-blue-100 text-base mt-2">
              กรอกข้อมูลให้ครบถ้วน
            </Text>
          </View>

          <View className="px-6 mt-6">
            <CustomInput
              label="ชื่อ - สกุล "
              placeholder="ระบุชื่อและนามสกุล"
              value={formData.fullname}
              onChangeText={(value) => handleChange("fullname", value)}
              onBlur={() => handleBlur("fullname")}
              error={errorss.fullname}
              touched={touched.fullname}
              autoCapitalize="words"
            />

            <CustomInput
              label="อีเมล "
              placeholder="baitongbabybigboy@eamail.com"
              value={formData.email}
              onChangeText={(value) => handleChange("email", value)}
              onBlur={() => handleBlur("email")}
              error={errorss.email}
              touched={touched.email}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />

            <CustomInput
              label="เบอร์โทร "
              placeholder="099999999"
              value={formData.phone}
              onChangeText={(value) => handleChange("phone", value)}
              onBlur={() => handleBlur("phone")}
              error={errorss.phone}
              touched={touched.phone}
              keyboardType="phone-pad"
              maxLength={10}
            />

            <RadioGroup
              selected={formData.gender}
              onSelect={(value) =>
                setfromdata((prev) => ({ ...prev, gender: value }))
              }
              error={errorss.gender}
            />


            <CustomInput
              label="ที่อยู่"
              placeholder="เมืองนนทบุรี นนทบุรี 11000 "
              value={formData.address}
              onChangeText={(value) => handleChange("address", value)}
              onBlur={() => handleBlur("address")}
              error={errorss.address}
              touched={touched.address}
              multiline
              numberOfLines={4}
              maxLength={200}
              style={{ height: 100, textAlignVertical: "top" }}
            />

             <View >
              <Text className="mb-1 font-semibold">วันเกิด</Text>

              <TouchableOpacity
                onPress={() => setShowDatePicker(true)}
                className="border border-gray-300 rounded-lg p-3 bg-white"
              >
                <Text>
                  {formData.birthDate
                    ? formatDate(formData.birthDate)
                    : "เลือกวันเกิด"}
                </Text>
              </TouchableOpacity>

              {errorss.birthDate && (
                <Text className="text-red-500 text-sm mt-1">
                  {errorss.birthDate}
                </Text>
              )}
            </View>

            {showDatePicker && (
              <DateTimePicker
                value={formData.birthDate || new Date()}
                mode="date"
                display="default"
                onChange={(event, selectedDate) => {
                  setShowDatePicker(false);
                  if (selectedDate) {
                    setfromdata((prev) => ({
                      ...prev,
                      birthDate: selectedDate,
                    }));
                  }
                }}
              />
            )}

            <CustomInput
              label="รหัสผ่าน"
              placeholder="อย่างน้อย 6 ตัวอักษร"
              value={formData.password}
              onChangeText={(value) => handleChange("password", value)}
              onBlur={() => handleBlur("password")}
              error={errorss.password}
              touched={touched.password}
              autoCapitalize="none"
              secureTextEntry
            />


            <CustomInput
              label="ยืรยันรหัสผ่าน"
              placeholder="ระบุรหัสผ่านอีกครั้ง"
              value={formData.confirmPassword}
              onChangeText={(value) => handleChange("confirmPassword", value)}
              onBlur={() => handleBlur("confirmPassword")}
              error={errorss.confirmPassword}
              touched={touched.confirmPassword}
              autoCapitalize="none"
              secureTextEntry
            />
          </View>

          <Checkbox
            label="ฉันยอมรับข้อกำหนดและเงื่อนไข"
            checked={isAccepted}
            onPress={() => {
              setIsAccepted(!isAccepted);
              setCheckboxTouched(true);
            }}
            touched={checkboxTouched}
            error={!isAccepted ? "กรุณายอมรับข้อกำหนดก่อน" : undefined}
          />

          <View>
            <CudtomButtom
              title="ลงทะเบียน"
              onPress={handleSubmit}
              variant="primary"
              loading={isLoading}
            />

            <CudtomButtom
              title="รีเซ็ต"
              onPress={handleReset}
              variant="secondary"
              loading={isLoading}
            />
          </View>

          <View className="mt-6 bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
            <Text className="text-blue-800 font-semibold text-base mb-2">
              คำแนะนำ
            </Text>

            <Text className="text-blue-700 text-sm leading-5">
              - กรอกข้อมูลให้ครบถ้วน{"\n"}
              - อีเมลต้องมีรูปแบบที่ถูกต้อง{"\n"}
              - เบอร์โทรศัพท์ต้องเป็นตัวเลข 10 หลัก{"\n"}
              - รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร
            </Text>
          </View>

        </ScrollView>
      </TouchableNativeFeedback>
    </KeyboardAvoidingView>
  );
}
