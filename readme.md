## Preview App:
- Implementation of various navigations such as stack navigation, drawer navigation, and bottom tab navigation.
- Implementation of simple useContext and Redux in React Native using interactive icons, such as clicking on the favorite icon (showing a full star if it is favorited, and an outline if it is not). Please refer to the image for reference.

![reactnavigation](https://github.com/narayoga/RN-basicApp/assets/68230425/79573b3a-7d42-47f2-a790-e75e33bee412)

## Source :
Basir payenda : https://www.youtube.com/watch?v=I7POH4acHV8

git clone https://github.com/Basir-PD/react-nav-starter-template.git

## Setting navigation & icon :

+ go to https://reactnavigation.org/docs/getting-started install:
    - yarn add @react-navigation/native
    - yarn add react-native-screens react-native-safe-area-context
    - copy this to android/app/src/main/java//MainActivity.java di dalam "public class MainActivity extends ReactActivity{...disini}"
        @Override
        protected void onCreate(Bundle savedInstanceState) {
            super.onCreate(null);
        }
    - copy this " import android.os.Bundle; " taruh diatas di dalam MainActivity.java

+ go to install stack navigation https://reactnavigation.org/docs/stack-navigator install:
    - yarn add @react-navigation/stack
    - yarn add react-native-gesture-handler
    - import 'react-native-gesture-handler'; taruh di index.js paling atas

+ go install drawer https://reactnavigation.org/docs/drawer-navigator install: 
    - yarn add @react-navigation/drawer
    - yarn add react-native-reanimated
    - paste this to babel.config follow instruction here https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/installation
    
    plugins: [
      ...
      'react-native-reanimated/plugin',
    ],

    - restart aplication with yarn start --reset-cache

+ go install icon https://github.com/oblador/react-native-vector-icons
    - yarn add --save react-native-vector-icons
    - paste this 

    apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"

    to android > app > build.gradle dibawah "apply plugin: "com.facebook.react""
