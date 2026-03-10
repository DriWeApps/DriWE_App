import { Video } from "expo-av";
import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import { splashStyles } from "./styles/splash";

export default function Splash({ onFinish }: { onFinish: () => void }) {
  const video = useRef<any>(null);

  useEffect(() => {
    const t = setTimeout(() => onFinish(), 5000);
    return () => clearTimeout(t);
  }, [onFinish]);

  return (
    <View style={splashStyles.container}>
      <Video
        ref={video}
        source={require("../assets/DriWE Animation.mp4")}
        style={splashStyles.video}
        resizeMode="contain"
        shouldPlay
        isLooping={false}
        isMuted
        useNativeControls={false}
        onPlaybackStatusUpdate={(status: any) => {
          if (status?.didJustFinish) onFinish();
        }}
      />
    </View>
  );
}