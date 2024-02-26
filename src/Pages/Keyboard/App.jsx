import NumericKeypad from "../../shared/components/numpad/numpad-component";
import React, { useState } from "react";
export const App = () => {
    const [hola, setInput] = useState('')

        return (
            <div>
                <NumericKeypad 
          initialValue=""
          onChange={({ currentInput }) => setInput(currentInput)}
          onConfirm={ (state) => console.log(state) }
          
        />
            </div>
        );
  
}
