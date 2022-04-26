import { CardButton } from "./Button.styles";

export default function Button({children, onClick, disabled}) {
    
    return(
        <CardButton
         onClick={onClick}
         disabled={disabled}
         >
            {children}
        </CardButton>
    )
}