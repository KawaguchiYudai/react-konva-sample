import { Stage, Layer, Rect } from 'react-konva';

function App() {
  return (
    <Stage width={500} height={500}>
      <Layer>
        {/* 枠です。見やすくするためにあります。 */}
        <Rect stroke='black' strokeWidth={1} x={0} y={0} width={500} height={500} />
        <Rect fill='red' x={100} y={100} width={300} height={200} />
      </Layer>
    </Stage>
  );
}

export default App;
