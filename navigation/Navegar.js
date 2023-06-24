import React from "react";
import { createStackNavigator} from "@react-navigation/stack" 
import { NavigationContainer } from "@react-navigation/native";

import Menu from "../pantallas/Menu";
import Receta1 from "../pantallas/Receta1";
import Receta2 from "../pantallas/Receta2";
import Receta3 from "../pantallas/Receta3";
import Receta4 from "../pantallas/Receta4";


const Stack= createStackNavigator();

const Navegar = () => {
    return(
        <NavigationContainer>

            <Stack.Navigator >
                <Stack.Screen name="Menu" component={Menu} />
                <Stack.Screen name="Receta1" component={Receta1} />
                <Stack.Screen name="Receta2" component={Receta2} />
                <Stack.Screen name="Receta3" component={Receta3} />
                <Stack.Screen name="Receta4" component={Receta4} />


            </Stack.Navigator>

        </NavigationContainer>
    );
};

export default Navegar;