import React, { useRef, useState, useEffect } from "react";

let WIDTH;
let HEIGHT;

const PURPLE_COLORS = [
    '#000',
    '#37002F',
    '#3C0034',
    '#420039',
    '#932F6D',
    '#E07BE0',
    '#DCCCFF',
    '#F6F2FF',
    '#F7F3FF',
]

const WHITE_BLACK = [
    '#000000',
    '#3D3C3C',
    '#242424',
    '#6F696A',
    '#BDBDBD',
    '#8A8384',
    '#FFFFFF',
    '#c7c7c7',
    '#737373',
    '#383838',
]

let colors = [];

const FractalCanvas = ({realValue1, imgValue1, realValue2, imgValue2, scale, schemeName}) => {
    const [context, setContext] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [zoom, setZoom] = useState(0);
    const [lastZoom, setLastZoom] = useState(1);
    const canvasRef = useRef(null);
    const MAX_ITERATION = 80;
    const mandelbrot = (c) => {
        let z = { x: 0, y: 0 }, n = 0, p, d;
        do {
            p = {
                x: Math.pow(z.x, 2) - Math.pow(z.y, 2),
                y: 2 * z.x * z.y
            }
            z = {
                x: p.x + c.x,
                y: p.y + c.y
            }
            d = Math.sqrt(Math.pow(z.x, 2) + Math.pow(z.y, 2))
            n += 1
        } while (d <= 2 && n < MAX_ITERATION)
        return [n, d <= 2]
    }

    const draw = () => {
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        const REAL_SET = { start: Number(realValue1), end: Number(realValue2) }
        const IMAGINARY_SET = { start: Number(imgValue1), end: Number(imgValue2) }
        switch(schemeName){
            case 'Чорно-біла':
                colors = WHITE_BLACK;
                break;
            case 'Фіолетова':
                colors = PURPLE_COLORS;
                break;
            default:
                colors = new Array(16).fill(0).map((_, i) => i === 0 ? '#000' : `#${((1 << 24) * Math.random() | 0).toString(16)}`);
                break;
        }
        for (let i = 0; i < WIDTH; i++) {
            for (let j = 0; j < HEIGHT; j++) {
                let complex = {
                    x: REAL_SET.start + (i / WIDTH) * (REAL_SET.end - REAL_SET.start),
                    y: IMAGINARY_SET.start + (j / HEIGHT) * (IMAGINARY_SET.end - IMAGINARY_SET.start)
                }
    
                const [m, isMandelbrotSet] = mandelbrot(complex)
                context.fillStyle = colors[isMandelbrotSet ? 0 : (m % PURPLE_COLORS.length - 1) + 1]
                context.fillRect(i, j, 1, 1)
            }
        }
    }

    useEffect(() => {
        WIDTH = canvasRef.current.width;
        HEIGHT = canvasRef.current.height;
        setContext(canvasRef.current.getContext('2d'));
        setLoaded(true);
    }, [])

    useEffect(() => {
        if (!!context && loaded){
            let k = lastZoom > zoom ? 0.2 : -0.2;
            context.scale(1 - k, 1 - k);
            draw();
        }
    }, [loaded, zoom]);

    useEffect(() => {
        setLastZoom(zoom);
        setZoom(scale);
    }, [zoom, scale]);

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



export default FractalCanvas;