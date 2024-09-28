import Header from '@/components/building-blocks/text/header'
import Box from './box'
import Row from './row'

export default function Board() {
  return (
    <div>
      <Header size="2" text="Tic Tac Toe" className="mb-5" />
      <Row>
        <Box boxId="A1" borderX={false} borderY={false} value="X" />
        <Box boxId="A2" borderX={true} borderY={false} value="O" />
        <Box boxId="A3" borderX={false} borderY={false} />
      </Row>
      <Row>
        <Box boxId="B1" borderX={false} borderY={true} value="O" />
        <Box boxId="B2" borderX={true} borderY={true} value="X" />
        <Box boxId="B3" borderX={false} borderY={true} />
      </Row>
      <Row>
        <Box boxId="C1" borderX={false} borderY={false} value="X" />
        <Box boxId="C2" borderX={true} borderY={false} value="O" />
        <Box boxId="C3" borderX={false} borderY={false} value="X" />
      </Row>
    </div>
  )
}
