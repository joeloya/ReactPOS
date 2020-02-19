import React from "react";
import {Dimensions, View, Text} from "react-native";

export default withModal = (modalTitle) => WrappedComponent => {

    class withModal extends React.Component {

        render() {
            const {width, height} = Dimensions.get("window");
            return (
                <>
                    <View
                    style={{
                      zIndex:1,
                      position: "absolute",
                      width: width,
                      height: height,
                      left: 0,
                      top: 0,
                      flex: 1,
                      opacity: 0.6,
                      backgroundColor: "rgb(20,20,20)",
                    }}>
                    </View>
                    <View style={{
                        zIndex: 2, 
                        position: "absolute",
                        left: ((width-(width/1.5))/2.0),
                        width: width/1.5,
                        bottom: ((height-(height/1.5))/2.0),
                        height: height/1.5, 
                        backgroundColor: 'rgb(244,244,244)',
                        borderColor: '#e62e09',
                        borderWidth: 8,
                        borderRadius: 8,
                    }}
                    >
                        <View style={{
                            backgroundColor: "#e62e09",
                            flexBasis: 50,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                color:'#EEEEEE',
                                fontSize: 20,
                                marginBottom: 8,
                                marginLeft: 4,
                                fontWeight: 'bold'
                            }}>
                                {modalTitle}
                            </Text>
                        </View>
                        <View style={{padding: 25, flex: 1}}>
                            <WrappedComponent {...this.props} />
                        </View>
                    </View></>);
        }
    }
    return withModal;

}

// TODO: Put X on the leftside