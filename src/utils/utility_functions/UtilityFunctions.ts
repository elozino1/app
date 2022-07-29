// import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { Dimensions, useWindowDimensions } from 'react-native';

// export const deviceWidth = wp;
// export const deviceHeight = hp;

const dimensions = Dimensions.get('window')
    export const height = dimensions.height
    export const width = dimensions.width

// export const width = useWindowDimensions().width
// export const height = useWindowDimensions().height