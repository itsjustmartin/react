import React from "react";

const MealsContext = React.createContext();

const todayMeals = ["Meat" , "Chiken" , "Apples"];

const MealsProvider = ({children}) => {
    // eslint-disable-next-line
    const [meals ,setMealsList] = React.useState(todayMeals);
    return (
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    )
}

export const useMealsListContext = () => React.useContext(MealsContext) ;
export default MealsProvider ;
