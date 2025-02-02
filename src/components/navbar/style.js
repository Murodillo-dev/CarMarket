import styled from "styled-components";
import user from "../../assets/icons/user.svg?react";
import notifyOff from "../../assets/icons/notifyOff.svg?react";
import notifyOn from "../../assets/icons/notifyOn.svg?react";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 40px;
`;
export const WrapperLeft = styled.div``;

export const WrapperRight = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

export const UserIcon = styled(user)`
  margin-right: 8px;
`;
export const NofityOn = styled(notifyOn)`
  cursor: pointer;
`;
export const NofityOff = styled(notifyOff)`
  cursor: pointer;
`;
export const UserImg = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  cursor: pointer;
`;
