/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { ScrollView } from "react-native";
import data from "./Data"
import Square from "./Square"
import Styles from "./Styles";

export default function App() {
  return (
    <ScrollView style={Styles.container}>
      {data.map((item, index) => (<Square key={index} text={`Square ${item}`} />))}
    </ScrollView>
  )
}

