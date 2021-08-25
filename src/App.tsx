import React from 'react';
import { Stage, Layer, Rect, Circle, Text, Image } from 'react-konva';
import logo from './logo.svg';


function App() {
  let img = new window.Image();
  img.src = logo;
  return (
    <div>
      <Stage width={500} height={500}>
        <Layer>
          <Rect stroke='black' strokeWidth={1} x={0} y={0} width={500} height={500} />
          <Rect fill='red' x={100} y={100} width={300} height={200} />
        </Layer >
      </Stage >

      <Stage width={500} height={400}>
        <Layer>
          <Rect stroke='black' strokeWidth={1} x={0} y={0} width={500} height={400} />
          <Circle fill='red' x={100} y={100} radius={150} />
        </Layer>
      </Stage>

      <Stage width={500} height={100}>
        <Layer>
          <Rect stroke='black' strokeWidth={1} x={0} y={0} width={500} height={100} />
          <Text text='aaaあああ' width={100} height={100} />
        </Layer>
      </Stage>

      <Stage width={500} height={200}>
        <Layer>
          <Rect stroke='black' strokeWidth={1} x={0} y={0} width={500} height={200} />
          <Image image={img} width={img.width} height={img.height} />
        </Layer >
      </Stage >
    </div >
  );
}

export default App;
