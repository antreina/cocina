import React from "react";
import { createStackNavigator} from "@react-navigation/stack" 
import { NavigationContainer } from "@react-navigation/native";

import Menu from "../pantallas/Menu";
import Receta1 from "../pantallas/Receta1";
import Receta2 from "../pantallas/Receta2";
import Receta3 from "../pantallas/Receta3";
import Receta4 from "../pantallas/Receta4";
import Receta5 from "../pantallas/Receta5";
import Receta6 from "../pantallas/Receta6";
import Receta7 from "../pantallas/Receta7";
import Receta8 from "../pantallas/Receta8";
import Receta9 from "../pantallas/Receta9";
import Receta10 from "../pantallas/Receta10";
import Receta11 from "../pantallas/Receta11";
import Receta12 from "../pantallas/Receta12";
import Receta13 from "../pantallas/Receta13";
import Receta14 from "../pantallas/Receta14";
import Receta15 from "../pantallas/Receta15";
import Receta16 from "../pantallas/Receta16";
import Receta17 from "../pantallas/Receta17";
import Receta18 from "../pantallas/Receta18";
import Receta19 from "../pantallas/Receta19";
import Receta20 from "../pantallas/Receta20";
import Receta21 from "../pantallas/Receta21";
import Receta22 from "../pantallas/Receta22";
import Receta23 from "../pantallas/Receta23";
import Receta24 from "../pantallas/Receta24";
import Receta25 from "../pantallas/Receta25";
import Receta26 from "../pantallas/Receta26";
import Receta27 from "../pantallas/Receta27";
import Receta28 from "../pantallas/Receta28";
import Receta29 from "../pantallas/Receta29";

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
                <Stack.Screen name="Receta5" component={Receta5} />
                <Stack.Screen name="Receta6" component={Receta6} />
                <Stack.Screen name="Receta7" component={Receta7} />
                <Stack.Screen name="Receta8" component={Receta8} />
                <Stack.Screen name="Receta9" component={Receta9} />
                <Stack.Screen name="Receta10" component={Receta10} />
                <Stack.Screen name="Receta11" component={Receta11} />
                <Stack.Screen name="Receta12" component={Receta12} />
                <Stack.Screen name="Receta13" component={Receta13} />
                <Stack.Screen name="Receta14" component={Receta14} />
                <Stack.Screen name="Receta15" component={Receta15} />
                <Stack.Screen name="Receta16" component={Receta16} />
                <Stack.Screen name="Receta17" component={Receta17} />
                <Stack.Screen name="Receta18" component={Receta18} />
                <Stack.Screen name="Receta19" component={Receta19} />
                <Stack.Screen name="Receta20" component={Receta20} />
                <Stack.Screen name="Receta21" component={Receta21} />
                <Stack.Screen name="Receta22" component={Receta22} />
                <Stack.Screen name="Receta23" component={Receta23} />
                <Stack.Screen name="Receta24" component={Receta24} />
                <Stack.Screen name="Receta25" component={Receta25} />
                <Stack.Screen name="Receta26" component={Receta26} />
                <Stack.Screen name="Receta27" component={Receta27} />
                <Stack.Screen name="Receta28" component={Receta28} />
                <Stack.Screen name="Receta29" component={Receta29} />
                {/* <Stack.Screen name="Receta30" component={Receta30} />
                <Stack.Screen name="Receta31" component={Receta31} />
                <Stack.Screen name="Receta32" component={Receta32} />
                <Stack.Screen name="Receta33" component={Receta33} />
                <Stack.Screen name="Receta34" component={Receta34} />
                <Stack.Screen name="Receta35" component={Receta35} />
                <Stack.Screen name="Receta36" component={Receta36} />
                <Stack.Screen name="Receta37" component={Receta37} />
                <Stack.Screen name="Receta38" component={Receta38} />
                <Stack.Screen name="Receta39" component={Receta39} />
                <Stack.Screen name="Receta40" component={Receta40} />
                <Stack.Screen name="Receta41" component={Receta41} />
                <Stack.Screen name="Receta42" component={Receta42} />
                <Stack.Screen name="Receta43" component={Receta43} />
                <Stack.Screen name="Receta44" component={Receta44} />
                <Stack.Screen name="Receta45" component={Receta45} /> */}


            </Stack.Navigator>

        </NavigationContainer>
    );
};

export default Navegar;