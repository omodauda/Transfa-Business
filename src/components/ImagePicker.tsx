import { SetStateAction } from "react";
import * as ImagePicker from 'expo-image-picker';
import { showMessage } from "react-native-flash-message";

interface ImagePickerComponentprops {
  setImage: (image: SetStateAction<ImagePicker.ImagePickerSuccessResult | null>) => void;
}

const pickImage = async ({setImage}: ImagePickerComponentprops) => {
  try {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1
    })
    if (!result.canceled) {
      setImage(result)
    }
  } catch (error) {
    showMessage({
      message: 'Error',
      description: 'Unable to read selected image',
      type: 'default',
    });
  }
}

export default pickImage