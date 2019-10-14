import React from "react";
import { Dimensions, View } from "react-native";
const { height, width } = Dimensions.get("window");
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
export const CardHomeSK = () => (
    <View style={{
        width: width,
        height: width / 4,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5,
        borderRadius: 10,
        backgroundColor: "#fff",
        marginVertical: 5,
        elevation: 5
    }}>
        <SkeletonPlaceholder>
            <View style={{
                width: width / 4,
                height: width / 4,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
            }} />
        </SkeletonPlaceholder>

        <View style={{
            width: width,
            height: width / 4.5,
            flexDirection: 'column',
            padding: 5,
            justifyContent: 'flex-start'
        }}>
            <SkeletonPlaceholder >
                <View style={{width:width/3, height:width/12}}>
                </View>
                <View style={{width:width/4, height:width/12, marginTop:10}}>
                </View>
            </SkeletonPlaceholder>
        </View>

    </View>
)