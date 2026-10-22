import { createContext, useContext, useState, useRef } from "react";
import { useNavigate, NavLink,Link } from "react-router-dom";
import "./Transition.css";

const TransitionContext = createContext(null);
     // must match the CSS duration
const FADE_IN = 400;     // ms to fade to black
const HOLD = 300;        // ms to stay fully black
const FADE_OUT = 400;    // ms to fade back
export function TransitionProvider({ children }){
    const navigate = useNavigate();
    const [phase, setPhase] = useState("idle");
    const busy = useRef(false);

    function go(to){
        if (busy.current) return;
        busy.current = true;

        setPhase("cover");

        setTimeout(function(){
            navigate(to);
            window.scrollTo(0, 0);

            // stay black for HOLD, then start fading out
            setTimeout(function(){
                setPhase("reveal");

                setTimeout(function(){
                    setPhase("idle");
                    busy.current = false;
                }, FADE_OUT);
            }, HOLD);
        }, FADE_IN);
    }
    return(
        <TransitionContext.Provider value={go}>
            {children}
            <div className={"fadeOverlay " + phase}></div>
        </TransitionContext.Provider>
    );
}

export function TransitionLink({ to, children, ...rest }){
    const go = useContext(TransitionContext);

    function handleClick(event){
        event.preventDefault();
        go(to);
    }

    return <NavLink to={to} onClick={handleClick} {...rest}>{children}</NavLink>;
}

export function useTransition(){
    return useContext(TransitionContext);
}