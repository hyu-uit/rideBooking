import React from "react";
import {
  HStack,
  Image,
  Text,
  VStack,
  View,
  Divider,
  Center,
  Flex,
} from "native-base";
import { TouchableOpacity } from "react-native";
import { SIZES, COLORS, FONTS } from "../../constants/theme";
import ClockIcon from "../../assets/clock-icon.png";
import MapIcon from "../../assets/map_marker_96px.png";
import barCodeIcon from "../../assets/barcode.png";
import avatarIcon from "../../assets/avatar.png";
import { useTranslation } from "react-i18next";

const OnTheWayCard = ({ onPressCancel, onPressInfo }) => {
  const { t } = useTranslation();
  return (
    <View
      bgColor={COLORS.background}
      w={"100%"}
      h={385}
      borderTopRadius={20}
      shadow={3}
      position={"absolute"}
      bottom={0}
      paddingLeft={26}
      paddingRight={26}
    >
      <VStack space={5}>
        <HStack style={{ marginTop: 24, alignItems: "center" }}>
          <Text
            style={{
              color: COLORS.white,
              ...FONTS.h3,
              fontWeight: "bold",
              flex: 1,
            }}
          >
            {t("onTheWay")}
          </Text>
          <TouchableOpacity onPress={onPressInfo}>
            <Image
              source={barCodeIcon}
              alt="barcode"
              style={{
                width: 34,
                height: 34,
                resizeMode: "contain",
              }}
            ></Image>
          </TouchableOpacity>
        </HStack>
        <HStack space={1}>
          <Center
            style={{
              width: 45,
              height: 45,
              borderRadius: 45 / 2,
              backgroundColor: COLORS.primary,
              justifyContent: "center",
              alignItems: "center",
              resizeMode: "contain",
            }}
          >
            <Image
              alt="avatar"
              source={avatarIcon}
              style={{
                width: 45,
                height: 45,
                borderRadius: 45 / 2,
              }}
            ></Image>
          </Center>
          <VStack
            style={{
              marginLeft: 12,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h5,
                fontWeight: "bold",
                flex: 1,
              }}
            >
              SnowFlower
            </Text>
            <Text
              style={{
                color: COLORS.fourthary,
                ...FONTS.body6,
                fontWeight: "bold",
                flex: 1,
              }}
            >
              University of Information Technology
            </Text>
          </VStack>
        </HStack>
      </VStack>
      <HStack marginTop={3}>
        <VStack space={8}>
          <HStack space={8}>
            <VStack space={1}>
              <Text
                style={{
                  color: COLORS.grey,
                  ...FONTS.body6,
                }}
              >
                {t("inputLicense")}
              </Text>
              <Text
                style={{
                  color: COLORS.grey,
                  ...FONTS.body6,
                }}
              >
                {t("inputType")}
              </Text>
            </VStack>
            <VStack space={1}>
              <Text
                style={{
                  color: COLORS.fourthary,
                  ...FONTS.body6,
                  fontWeight: "bold",
                }}
              >
                59X3 - 91176
              </Text>
              <Text
                style={{
                  color: COLORS.fourthary,
                  ...FONTS.body6,
                  fontWeight: "bold",
                }}
              >
                SH Mode
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </HStack>
      <Divider
        bgColor={COLORS.fourthary}
        style={{ height: 2, marginVertical: 20 }}
      ></Divider>
      <HStack>
        <VStack space={4}>
          <HStack space={3}>
            <Image
              source={MapIcon}
              alt="map icon"
              style={{
                width: 25,
                height: 25,
              }}
            ></Image>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h4,
                fontWeight: "bold",
              }}
            >
              2km
            </Text>
          </HStack>
          <HStack space={3}>
            <Image
              alt="clock icon"
              source={ClockIcon}
              style={{
                width: 25,
                height: 25,
              }}
            ></Image>
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h4,
                fontWeight: "bold",
              }}
            >
              5 {t("minutes")}
            </Text>
          </HStack>
        </VStack>
        <VStack
          style={{
            alignItems: "flex-end",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              paddingTop: 3,
              color: COLORS.white,
              ...FONTS.h2,
              fontWeight: "bold",
            }}
          >
            20.000đ
          </Text>
          <Text
            style={{
              color: COLORS.grey,
              ...FONTS.h5,
              fontWeight: "bold",
              textDecorationLine: "line-through",
            }}
          >
            30,000đ
          </Text>
        </VStack>
      </HStack>
      <HStack
        style={{
          marginBottom: 10,
          marginTop: 20,
        }}
      >
        <Flex flex={1}>
          <TouchableOpacity
            onPress={onPressCancel}
            style={{
              height: 59,
              borderRadius: 20,
              backgroundColor: "rgba(25, 74, 249, 0.3)",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: COLORS.white,
                ...FONTS.h2,
                paddingTop: 5,
                fontWeight: "bold",
              }}
            >
              {t("cancel")}
            </Text>
          </TouchableOpacity>
        </Flex>
      </HStack>
    </View>
  );
};

export default OnTheWayCard;
