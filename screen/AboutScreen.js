import { Image, View } from 'react-native'
import React from 'react'
import { SIZES } from '../constant/style'

const AboutScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image source={require("../assets/About.png")} style={{ width: SIZES.width, height: SIZES.height }}/>
      {/* Jika sudah ada version, ubah ke detail yang lebih dinamis.. */}
    </View>
  )
}

export default AboutScreen
