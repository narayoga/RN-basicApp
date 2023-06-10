Basir payenda : https://www.youtube.com/watch?v=I7POH4acHV8

+ git clone https://github.com/Basir-PD/react-nav-starter-template.git
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