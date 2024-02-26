import React, { useState, useEffect } from "react";
import './numpad-styles.css'

interface INumericKeypadCallback {
  ({
    currentInput,
    lastKey
  }: {
    currentInput: string;
    lastKey: TKeypadInputKeys;
  }): void;
}

interface INumericKeypadConfirmCallback {
  ({ currentInput }: { currentInput: string }): void;
}

type TNumberInputKeys =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9";

type TBackKey = "backspace";
type TConfirmKey = "confirm";
type TKeypadFunctionKeys = TBackKey | TConfirmKey;
type TKeypadInputKeys = TNumberInputKeys | TKeypadFunctionKeys | "none";

interface INumberKeyProps {
  onPress: (currentInput: TNumberInputKeys) => void;
  value: TNumberInputKeys;
  children?: JSX.Element | string;
}

const NumberKey = ({ onPress, value, children = value }: INumberKeyProps) => (
  <button onClick={() => onPress(value)}>{children}</button>
);

interface IBackKeyProps {
  onPress: () => void;
  children?: JSX.Element | string;
}

const BackKey = ({ onPress, children }: IBackKeyProps) => (
  <button onClick={onPress} aria-label="backspace">
    {children}
  </button>
);

interface IConfirmKeyProps {
  onPress: () => void;
  children?: JSX.Element | string;
}

const ConfirmKey = ({ onPress, children }: IConfirmKeyProps) => (
  <button onClick={onPress} aria-label="confirm">
    {children}
  </button>
);

const deleteCharacter = (text: string): string => {
  return text.substr(0, text.length - 1);
};

const appendCharacter = (text: string, character: string): string => {
  return text + character;
};

export interface INumericKeypadProps {
  initialValue?: string;
  maxInputCharacters?: number;
  onConfirm: INumericKeypadConfirmCallback;
  onChange: INumericKeypadCallback;
}

export default function NumericKeypad({
  initialValue = "",
  maxInputCharacters = 25,
  onChange,
  onConfirm
}: INumericKeypadProps) {
  const [input, setInput] = useState(initialValue);
  const [lastKey, setLastKey] = useState<TKeypadInputKeys>("none");
  const [values,setInputValue] = useState([]);
  const updateInputState = (
    updatedInput: string,
    lastKey: TKeypadInputKeys
  ) => {
    if (updatedInput.length > maxInputCharacters) return;

    setLastKey(lastKey);
    setInput(updatedInput);
  };

  const handleNumberKeyPress = (value: TNumberInputKeys) => {
    updateInputState(appendCharacter(input, value), value);
    setInputValue([...values,value]);


  };

  const handleBackKeyPress = () => {
    updateInputState(deleteCharacter(input), "backspace");
  };

  const handleConfirmKeyPress = () => {
    setLastKey("confirm");
    onConfirm({
      currentInput: input
    });
  };

  useEffect(() => {
    onChange({ lastKey, currentInput: input });
  }, [lastKey, input, onChange]);

  return (
    <>
    <div className="numberced">

    <h1 className="h1ced">{values}</h1>
    
    </div>
    
    <section className="numpad-container">

      <div className="styleKeyboard">
        
        <NumberKey onPress={handleNumberKeyPress} value="1" />
        <NumberKey onPress={handleNumberKeyPress} value="2" />
        <NumberKey onPress={handleNumberKeyPress} value="3" />
        <NumberKey onPress={handleNumberKeyPress} value="4" />
        <NumberKey onPress={handleNumberKeyPress} value="5" />
        <NumberKey onPress={handleNumberKeyPress} value="6" />
        <NumberKey onPress={handleNumberKeyPress} value="7" />
        <NumberKey onPress={handleNumberKeyPress} value="8" />
        <NumberKey onPress={handleNumberKeyPress} value="9" />
        <BackKey onPress={handleBackKeyPress}>&lt;</BackKey>
        <NumberKey onPress={handleNumberKeyPress} value="0" />
        <ConfirmKey onPress={handleConfirmKeyPress}>Confirm</ConfirmKey>
      </div>
      </section>
    </>
  );
}
