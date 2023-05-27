// import React, { useState } from "react";
// import { View, Text, TouchableOpacity, FlatList } from 'react-native'

// import styles from './tabs.style'
// import { SIZES } from '../../../constants';


// //  Why this TabButton function is not work
// const TabButton = ({ name, activeTab, onHandleSearchType }) => {
//   <TouchableOpacity 
//             style={styles.btn(name, activeTab)} 
//             onPress={onHandleSearchType}
//     >
//     <Text style={styles.btnText(name, activeTab)}>{name}</Text>
//   </TouchableOpacity>
// }



// const JobTabs = ({ tabs, activeTab, setActiveTab }) => {
//   return (
//     <View style={styles.container}> 
//       <FlatList 
//         data={tabs}
//         renderItem={({ item }) => (
//           <TabButton 
//             name={item}
//             activeTab={activeTab}
//             onHandleSearchType={() => setActiveTab(item)}
//           />
//         )}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         keyExtractor={(item) => item}
//         contentContainerStyle= {{columnGap: SIZES.small / 2}}
//       />
//     </View>
//   )
// }

// export default JobTabs;


import React, { useState } from "react";
import { TouchableOpacity, FlatList, Text, View } from "react-native";

import styles from "./tabs.style";
import { SIZES } from "../../../constants";

function TabButton({ name, activeTab, onHandleSearchType }) {
  return (
    <TouchableOpacity
      style={styles.btn(name, activeTab)}
      onPress={onHandleSearchType}
    >
      <Text style={styles.btnText(name, activeTab)}>{name}</Text>
    </TouchableOpacity>
  );
}

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default Tabs;