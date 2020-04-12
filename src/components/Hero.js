import React from "react";

//Some components are class while smaller components can be functions
//Which I did in the tic tac toe game as well.
//See how props are passed as function FunctionName({Prop1, Prop2}) {...}
//This is the only confusion otherwise you know the basics already.

//Childeren is a special parameter.
//Which means all the subcomponents that are placed inside our JSX component.
//In this case, <Hero>.....Here are the childern...........</Hero>
//The children are automatically passed when we use the children paramater
export default function Hero({hero, children}) {
    return <header className={hero}>
        {children}
    </header>;
}
// When you use the props always use curly brackets {}. with no semicolon inside.
//So when you are setting the value of state such as setState = {props: "value",}; 
//Do not put semicolon inside the statement's curly brackets. Comma can be used to separate props though.

Hero.defaultProps = {
    hero: "defaultHero",
}