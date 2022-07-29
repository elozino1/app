import { Animated, Dimensions, FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { deviceHeight, deviceWidth } from '../../utils/utility_functions/UtilityFunctions'

import Button from '../../global_components/atoms/Button'
import { COLORS } from '../../themes/colors'
import SeerbitLogo from '../../assets/icons/seerbit_logo.svg';
import SliderImage1 from '../../assets/images/slider3.svg'
import Swiper from 'react-native-swiper'
import { sliderData } from './components'

const { white, veryDarkGray, veryDrakBlue, grayishBlue, pureRed, darkGrayishBlue } = COLORS
interface Props {
    navigation: any;
    sliderData: {};
    item: any;
}

const Onboarding: React.FC<Props> = ({ navigation }) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const RenderSlider = () => {
        return (
            <View style={styles.renderView}>

                {sliderData.map((item, index) => (
                    <View style={{ width: 200, height: 400 }}>
                        <Text style={styles.title}>{item.title}</Text>
                        <item.image width={300} />
                    </View>
                ))}
            </View>
        )
    };

    const Sliderfooter = () => {
        return (
            <View style={styles.sliderfooter}>
                {sliderData.map((_, index) =>
                (<View style={currentIndex == index ? styles.activeIndicator : styles.inactiveIndicator} key={index}>
                    <View style={currentIndex == index ? styles.innerIndicator : null} />
                </View>))}
            </View>
        )
    };

    const ActiveDot = () => {
        return (
            <View style={styles.activeIndicator}>
                <View style={styles.innerIndicator} />
            </View>
        )
    };

    const InactiveDot = () => {
        return (
            <View style={styles.inactiveIndicator}></View>
        )
    }

   
    const goToLogin = () => {

    }

    useEffect(() => {

    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: white }}>
            <View style={styles.root}>
                <SeerbitLogo
                    style={{ marginTop: 20, marginBottom: 10 }}
                />
                <View style={styles.flatlistView}>
                   
                    <Swiper
                        loop={false} dot={<InactiveDot />}
                        activeDot={<ActiveDot />}
                        dotStyle={{ marginTop: 0 }}
                    >
                        <View style={styles.slide1}>
                            <View>
                                <Text style={styles.title}>{sliderData[0].title}</Text>
                                <SliderImage1/>
                            </View>
                        </View>
                        <View style={styles.slide1}>
                            <View>
                                <Text style={styles.title}>{sliderData[1].title}</Text>
                                <SliderImage1 />
                            </View>
                        </View>
                        <View style={styles.slide1}>
                            <View>
                                <Text style={styles.title}>{sliderData[2].title}</Text>
                                <SliderImage1 />
                            </View>
                        </View>
                    </Swiper>
                </View>

                <Button
                    label='Sign Up'
                    onPress={() => { }}
                    style={styles.buttton}
                />
                <TouchableOpacity onPress={goToLogin} activeOpacity={0.4}>
                    <Text style={styles.login}>Log in</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default Onboarding;

const styles = StyleSheet.create({
    root: {
        backgroundColor: white,
        alignItems: 'center',
        paddingHorizontal: deviceWidth(0.3),
        paddingVertical: deviceHeight(3),
        justifyContent: 'center'
    },
    flatlistView: {
        width: '80%',
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        height: deviceHeight(68)
    },
    renderView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
        width: "80%",
    },
    title: {
        color: veryDrakBlue,
        fontWeight: '600',
        fontSize: 21,
        lineHeight: 24,
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom: 20
    },

    sliderfooter: {
        height: 20,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',

    },
    inactiveIndicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: grayishBlue,
        marginHorizontal: 7
    },
    buttton: {
        marginTop: 25
    },
    activeIndicator: {
        width: 15,
        height: 15,
        borderRadius: 7.5,
        backgroundColor: pureRed,
        marginHorizontal: 7,
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerIndicator: {
        width: 12,
        height: 12,
        borderRadius: 6,
        backgroundColor: pureRed,
        marginHorizontal: 7,
        borderWidth: 2,
        borderColor: white
    },
    login: {
        color: darkGrayishBlue,
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 21,
        alignSelf: 'center',
        textAlign: 'center',
        marginVertical: 20
    },

    slide1: {
        // flex: 1,
        height: 480,
        justifyContent: 'center',
        alignItems: 'center',
    },

})