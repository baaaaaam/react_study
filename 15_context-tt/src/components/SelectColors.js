import React, {Component} from "react";
import ColorContext from "../contexts/color";

const colors = ['red','orange','yellow','green','blue','indigo','violet'];

class SelectColors extends Component {
    static contextType = ColorContext;

    handleSetColor = color=> {
        this.context.actions.setColor(color);
    }

    handleSetSubColor = subcolor=> {
        this.context.actions.setSubcolor(subcolor);
    }

    render() {
        return (
            <div>
                 <h2>색상을 선택하세요</h2>
                 <div style={{display:'flex'}}>
                 {colors.map(color => (
                    <div
                        key={color}
                        style={{
                            background:color,
                            width:'24px',
                            height:'24px',
                            cursor:'pointer'
                        }}
                        onClick={()=>this.handleSetColor(color)}
                        onContextMenu={ e => {
                            e.preventDefault();
                            this.handleSetSubColor(color)
                        }}
                        />
                    ))}
            </div>
            <hr/>
        </div>
        )
    }
}


// const SelectColors = () => {
//     return (
//         <div>
//             <h2>색상을 선택하세요</h2>
//             <ColorConsumer>
//             {({actions})=>(
//                 <div style={{display:'flex'}}>
//                 {colors.map(color => (
//                     <div
//                         key={color}
//                         style={{
//                             background:color,
//                             width:'24px',
//                             height:'24px',
//                             cursor:'pointer'
//                         }}
//                         onClick={()=>actions.setColor(color)}
//                         onContextMenu={e=>{
//                             e.preventDefault();
//                             actions.setSubcolor(color)
//                         }}
//                         />                          
//                 ))}
//             </div>
//             )}
//             </ColorConsumer>
//             <hr/>
//         </div>
//     );
// };

export default SelectColors;