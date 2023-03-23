import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  paddedView: {
    paddingHorizontal: 24
  },
  welcomeText: {
    marginTop: 22,
    marginBottom: 44
  },
  bikeView: {
    marginBottom: 34,
  },
  spacedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  recentOrders: {
    flex: 1,
    paddingTop: 18,
    paddingBottom: 34
  }
})

export default styles;