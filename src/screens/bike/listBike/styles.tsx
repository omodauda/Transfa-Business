import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  scrollContent: {
    paddingBottom: 30
  },
  headerTitle: {
    marginTop: 24,
    marginBottom: 12
  },
  radioBtnContainer: {
    flexDirection: 'row',
  },
  radioBtnView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  radioBtnLabel: {
    fontWeight: '400',
    fontSize: 14,
    fontFamily: 'GeneralSans-Regular',
  },
  imagePicker: {
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 12,
    marginTop: 22,
    marginBottom: 14,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 25
  },
  uploadText: {
    marginTop: 13
  },
  selectedImageView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  imageName: {
    marginLeft: 11
  },
  details: {
    marginTop: 26,
    marginBottom: 32
  }
})

export default styles