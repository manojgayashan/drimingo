import { Text, View } from "react-native"
import CommanStyles from "../styles/CommanStyles"


const ListHeader = ({ title }) => {
    return (
      <View style={CommanStyles.listHeader}>
        <Text style={CommanStyles.font16Gray}>{title}</Text>
      </View>)
  }

export default ListHeader