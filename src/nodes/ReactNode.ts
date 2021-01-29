// ts-ignore
import Node from "./Node";
// ts-ignore
import React from 'react';
// ts-ignore
export default abstract class ReactNode extends Node {
// ts-ignore
abstract component({
// ts-ignore
node,
// ts-ignore
isSelected,
// ts-ignore
isEditable,
// ts-ignore
innerRef,
// ts-ignore
}): React.ReactElement;
// ts-ignore
}
