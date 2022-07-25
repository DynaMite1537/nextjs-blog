import MyCard from '../components/comp';
import {Grid} from 'tabler-react'
export default function Home() {
  return (
    <div className="container">
      <MyCard size={4} />
      <Grid.Row>
        <Grid.Col md={4}><MyCard /></Grid.Col>
        <Grid.Col md={4}><MyCard /></Grid.Col>
        <Grid.Col md={4}><MyCard /></Grid.Col>
      </Grid.Row>
    </div>
  )
}
