import React from 'react';
import { Stage, Layer, Rect, Circle } from 'react-konva';


function App() {
  return (
    <div>
      <Stage width={500} height={500}>
        <Layer>
          {/* 枠です。見やすくするためにあります。 */}
          <Rect stroke='black' strokeWidth={1} x={0} y={0} width={500} height={500} />
          <Rect fill='red' x={100} y={100} width={300} height={200} />
        </Layer>
      </Stage>
    </div>
  );
}

/*
function App() {
  return (
    <div>
      <Stage width={500} height={500}>
        <Layer>
          <Rect stroke='black' strokeWidth={1} x={0} y={0} width={500} height={500} />
          <Rect fill='red' x={100} y={100} width={300} height={200} />
        </Layer >
      </Stage >
  <Stage width={500} height={500}>
    <Layer>
      <Rect stroke='black' strokeWidth={1} x={0} y={0} width={500} height={500} />
      <Circle fill='red' x={100} y={100} radius={150} />
    </Layer>
  </Stage>
    </div >
  );
}*/

export default App;
