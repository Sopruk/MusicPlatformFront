import React from 'react'
interface TrackProgresProps{
    left: number;
    right: number;
    onChange: (e) => void;
}
const TrackProgres: React.FC<TrackProgresProps> = ({left, right, onChange}) => {
    return (
        <div style={{display:"flex"}}>
            <input 
                type="range"
                min={0}
                max={right}
                value={left}
                onChange={onChange}
             />
             <div>{left} / {right}</div>
        </div>
    )
}

export default TrackProgres
