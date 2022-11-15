import React, { useRef, useState, useEffect } from "react";

let ctx;
const AfinneCanvas = ({squareCoords, needValidation}) => {
    const canvasRef = useRef(null);
    const WIDTH = 660;
    const center = WIDTH / 2; 

    useEffect(() => {
        DrawBackground();
    }, [])

    const DrawBackground = () => {
        var canvas= canvasRef.current;
        ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        var [width, height] = [canvas.width, canvas.height];
        
        ctx.fillStyle = "black";
        ctx.strokeStyle = '#808080';
        ctx.lineWidth = 0.5;
        let x = -15;
        let y = 15;
        var count = Math.round(width/(22));
        for(let i=0; i<count; i++){
            let step = i*22;        
            ctx.beginPath();
            ctx.moveTo(step, 0);
            ctx.lineTo(step, height);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0, step);
            ctx.lineTo(width, step);
            ctx.stroke(); 
            if(x===0){
                ctx.fillText(x, center+5, center+10);
            } else if(x>-15){
                ctx.font = '10px serif';
                ctx.fillText(x, step-5, center+10);
                ctx.fillText(y, center+5, step+3);
            }
            x++; y--;
        }
        ctx.lineWidth = 2;
        ctx.strokeStyle = '#000000';
        ctx.beginPath();
        ctx.moveTo(0, center);
        ctx.lineTo(width, center);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(center, 0);
        ctx.lineTo(center, height);
        ctx.stroke();
        ctx.beginPath();

        if (squareCoords){
            drawSquare(squareCoords);
            ctx.stroke();

        }
    }

    const drawSquare = (sqr_coords, needValidation) => {
        ctx.lineWidth = "6";
        ctx.strokeStyle = needValidation ? isSquare(sqr_coords) ? "green" : "red" : "green";
        let x1 = center + 22 * sqr_coords[0][0];
        let x2 = center + 22 * sqr_coords[1][0];
        let x3 = center + 22 * sqr_coords[2][0];
        let x4 = center + 22 * sqr_coords[3][0];
        let y1 = center - 22 * sqr_coords[0][1];
        let y2 = center - 22 * sqr_coords[1][1];
        let y3 = center - 22 * sqr_coords[2][1];
        let y4 = center - 22 * sqr_coords[3][1];
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineTo(x3, y3);
        ctx.lineTo(x4, y4);
        ctx.closePath();
    }

    const isSquare = (sqr_coords) => {
        return Math.abs(sqr_coords[0][0] - sqr_coords[3][0]) === Math.abs(sqr_coords[2][1] - sqr_coords[3][1])
    }
    
    return (
        <div>
            <canvas 
                ref={canvasRef}
                style={{
                    height: '100%',
                }}
                width={660}
                height={660}
            />
    </div>
    )
}



export default AfinneCanvas;