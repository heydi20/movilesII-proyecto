import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from '../screens/WelcomeScreen';
import FormularioScreen from "../screens/FormularioScreen";
import ListaScreen from "../screens/ListaScreen";
import Peliculas from "../screens/PeliculasScreen";
import ListaPeliScreen from "../screens/ListaPeliScreen";

const Top = createMaterialTopTabNavigator();

function MyTops() {
    return (
        <Top.Navigator>
            <Top.Screen name="Welcome" component={WelcomeScreen} />
            <Top.Screen name="Guardar" component={FormularioScreen} />
            <Top.Screen name="Lista" component={ListaScreen} />
            <Top.Screen name='Ventana' component={Peliculas} />
            <Top.Screen name='Peliculas' component={ListaPeliScreen} />
        </Top.Navigator>
    );
}
//const Stack = createStackNavigator()
//function MyStack() {
   // return (
        //<Stack.Navigator screenOptions={() => ({ headerShown: false })}>
//<Stack.Screen name='Ventana' component={Peliculas} />
            //<Stack.Screen name='Peliculas' component={ListaPeliScreen} />
        //</Stack.Navigator>
   // )
//}

export default function MainNavigator() {
    return (
        <NavigationContainer>
            <MyTops />
        </NavigationContainer>
    )
}