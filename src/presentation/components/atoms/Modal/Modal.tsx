import React from "react";
import { Modal, TouchableWithoutFeedback } from "react-native";
import * as S from "./Modal.styles";

interface BottomModalProps {
  visible: boolean;
  onClose: () => void;
  actions: { label: string; onPress: () => void }[];
}

export const BottomModal: React.FC<BottomModalProps> = ({
  visible,
  onClose,
  actions,
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <S.Overlay>
          <TouchableWithoutFeedback>
            <S.ModalContainer>
              <S.Title>Choose an Action</S.Title>
              {actions.map((action, index) => (
                <S.ActionButton key={index} onPress={action.onPress}>
                  <S.ActionText>{action.label}</S.ActionText>
                </S.ActionButton>
              ))}
              <S.CancelButton onPress={onClose}>
                <S.CancelText>Cancel</S.CancelText>
              </S.CancelButton>
            </S.ModalContainer>
          </TouchableWithoutFeedback>
        </S.Overlay>
      </TouchableWithoutFeedback>
    </Modal>
  );
};
