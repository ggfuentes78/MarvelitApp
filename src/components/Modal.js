import { Button, Modal as NewModal, StyleSheet, Text, View } from "react-native";

import React from "react";

const Modal= ({isVisible, modalTitle, modalText, textOK, actionOK, textCancel, actionCancel,itemSelected})=>{
    return (
        <NewModal title={modalTitle} visible={isVisible} animationType="fade" transparent="false">
            <View style={StyleSheet.modalContainer}>
                <View>
                    <Text>{modalText}</Text>
                    <Text>{itemSelected}</Text>
                    <Button title={textOK} onPress={actionOK()} />
                    <Button title={textCancel} onPress={actionCancel()} />
                </View>
            </View>
        </NewModal>
    );
};

export default Modal;

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})